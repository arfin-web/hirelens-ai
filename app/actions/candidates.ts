'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';

type CandidateInsert = {
    job_id: string;
    name: string;
    email: string;
    raw_resume_text: string;
    match_score: number;
    ai_summary: string;
    skill_gaps: string[];
};
type Result = { name: string; status: 'success' | 'error'; message?: string };

export async function analyzeAndCreateCandidate(jobId: string, formData: FormData) {
    const supabase = await createClient();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const rawResumeText = formData.get('resumeText') as string;

    // 1. Fetch Job Context
    const { data: job } = await supabase
        .from('jobs')
        .select('description, title, required_skills')
        .eq('id', jobId)
        .single();

    if (!job) throw new Error("Job context not found");

    // 2. Use Gemini to get Structured JSON
    const { object: analysis } = await generateObject({
        model: google("gemini-3-flash-preview"),
        schema: z.object({
            match_score: z.number().min(0).max(100),
            ai_summary: z.string(),
            skill_gaps: z.array(z.string()),
        }),
        prompt: `
      You are an expert recruiter. Analyze this candidate for: "${job.title}".
      Job Description: ${job.description}
      Required Skills: ${job.required_skills?.join(', ')}
      
      Candidate Resume Content:
      ${rawResumeText}
      
      Compare the resume against the JD and return a match score, a short summary, and missing skills.
    `,
    });

    // 3. Insert into Supabase
    const { error } = await supabase.from('candidates').insert({
        job_id: jobId,
        name,
        email,
        raw_resume_text: rawResumeText,
        match_score: analysis.match_score,
        ai_summary: analysis.ai_summary,
        skill_gaps: analysis.skill_gaps,
    });

    if (error) throw new Error(error.message);

    revalidatePath(`/dashboard/jobs/${jobId}`);
}

export async function bulkAnalyzeAndCreateCandidates(
    jobId: string,
    files: { name: string; text: string }[]
): Promise<Result[]> {
    const supabase = await createClient();

    // 1️⃣ Fetch job context
    const { data: job } = await supabase
        .from('jobs')
        .select('description, title, required_skills')
        .eq('id', jobId)
        .single();

    if (!job) throw new Error('Job context not found');

    const inserts: CandidateInsert[] = [];
    const results: Result[] = [];

    for (const file of files) {
        try {
            // 2️⃣ Use Gemini to analyze pre-parsed text
            const { object } = await generateObject({
                model: google("gemini-3-flash-preview"),
                schema: z.object({
                    name: z.string(),
                    email: z.string(),
                    match_score: z.number().min(0).max(100),
                    ai_summary: z.string(),
                    skill_gaps: z.array(z.string()),
                }),
                prompt: `
Job Title: ${job.title}
Job Description: ${job.description}
Required Skills: ${job.required_skills?.join(', ')}

Candidate Resume:
${file.text}

Return candidate name, email, match score (0-100), short summary, and missing skills.
If name or email is missing, default to "Unknown" and "unknown@example.com".
        `,
            });

            inserts.push({
                job_id: jobId,
                name: object.name || file.name.replace(/\.pdf$/i, ''),
                email: object.email || 'unknown@example.com',
                raw_resume_text: file.text,
                match_score: object.match_score,
                ai_summary: object.ai_summary,
                skill_gaps: object.skill_gaps,
            });

            results.push({ name: file.name, status: 'success' });
        } catch (err: any) {
            console.error(`Failed to process ${file.name}`, err);
            results.push({
                name: file.name,
                status: 'error',
                message: err?.message || 'Unknown error',
            });
        }
    }

    // 3️⃣ Batch insert candidates into Supabase
    if (inserts.length) {
        const { error } = await supabase.from('candidates').insert(inserts);
        if (error) {
            console.error('Supabase insert error:', error);
            throw new Error(error.message);
        }
    }

    // 4️⃣ Revalidate job page cache
    revalidatePath(`/dashboard/jobs/${jobId}`);

    return results;
}

'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';

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
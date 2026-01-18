'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

// CREATE
export async function createJob(userId: string, formData: FormData) {
    if (!userId) throw new Error('Unauthorized');

    const supabase = await createClient();

    // Extracting skills from a comma-separated string to an array
    const skillsRaw = formData.get('required_skills') as string;
    const skillsArray = skillsRaw ? skillsRaw.split(',').map(s => s.trim()) : [];

    const { error } = await supabase.from('jobs').insert({
        user_id: userId,
        title: formData.get('title'),
        company_name: formData.get('company_name'),
        location: formData.get('location'),
        description: formData.get('description'),
        required_skills: skillsArray,
    });

    if (error) throw new Error(error.message);

    revalidatePath('/dashboard'); // Update the list view
}

// UPDATE
export async function updateJob(userId: string, jobId: string, formData: FormData) {
    if (!userId) throw new Error('Unauthorized');

    const supabase = await createClient();

    const { error } = await supabase
        .from('jobs')
        .update({
            title: formData.get('title'),
            company_name: formData.get('company_name'),
            description: formData.get('description'),
        })
        .eq('id', jobId)
        .eq('user_id', userId); // Extra safety check

    if (error) throw new Error(error.message);

    revalidatePath(`/dashboard/jobs/${jobId}`);
    revalidatePath('/dashboard');
}

// DELETE
export async function deleteJob(userId: string, jobId: string) {
    if (!userId) throw new Error('Unauthorized');

    const supabase = await createClient();

    const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id', jobId)
        .eq('user_id', userId);

    if (error) throw new Error(error.message);

    revalidatePath('/dashboard');
}
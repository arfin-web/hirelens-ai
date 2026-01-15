import { auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AddCandidateForm } from "@/components/dashboard/AddCandidateForm";
import { CandidateList } from "@/components/dashboard/CandidateList";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, LocationIcon } from "@hugeicons/core-free-icons";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function JobDetailsPage({ params }: PageProps) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const { id } = await params;
    const supabase = await createClient();

    // Fetch job details
    const { data: job, error: jobError } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .eq("user_id", userId)
        .single();

    if (jobError || !job) {
        notFound();
    }

    // Fetch candidates for this job
    const { data: candidates, error: candidatesError } = await supabase
        .from("candidates")
        .select("*")
        .eq("job_id", id)
        .order("match_score", { ascending: false });

    if (candidatesError) {
        console.error("Failed to fetch candidates:", candidatesError);
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <Button variant="ghost" size="sm" asChild className="mb-4">
                    <Link href="/dashboard">
                        <HugeiconsIcon icon={ArrowLeft01Icon} className="mr-2 w-4 h-4" />
                        Back to Jobs
                    </Link>
                </Button>

                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold tracking-tight mb-2">{job.title}</h1>
                        <p className="text-xl text-muted-foreground mb-3">{job.company_name}</p>
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <HugeiconsIcon icon={LocationIcon} size={20} />
                            {job.location}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {job.required_skills?.map((skill: string, idx: number) => (
                                <Badge key={idx} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Job Description</h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {job.description}
                    </p>
                </div>
            </div>

            {/* Add Candidate Form */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Candidates</h2>
                <AddCandidateForm jobId={id} />
            </div>

            {/* Candidates List */}
            <CandidateList candidates={candidates || []} />
        </div>
    );
}

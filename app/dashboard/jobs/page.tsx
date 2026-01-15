import { auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { CreateJobDialog } from "@/components/dashboard/CreateJobDialog";
import { JobCard } from "@/components/dashboard/JobCard";

export default async function JobsPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const supabase = await createClient();

    const { data: jobs, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Failed to fetch jobs:", error);
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Your Jobs</h1>
                    <p className="text-muted-foreground mt-1">
                        Manage your job postings and view candidate matches
                    </p>
                </div>
                <CreateJobDialog />
            </div>

            {jobs && jobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 border border-dashed rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">No jobs posted yet</h3>
                    <p className="text-muted-foreground mb-6">
                        Get started by posting your first job
                    </p>
                    <CreateJobDialog />
                </div>
            )}
        </div>
    );
}
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { CreateJobDialog } from "@/components/dashboard/CreateJobDialog";
import { JobCard } from "@/components/dashboard/JobCard";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { RecentCandidates } from "@/components/dashboard/RecentCandidates";

export default async function DashboardPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const supabase = await createClient();

    // Fetch Jobs
    const { data: jobs, error: jobsError } = await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    // Fetch Candidates for stats and recent list
    const { data: allCandidates, error: candidatesError } = await supabase
        .from("candidates")
        .select("*, jobs(title)")
        .order("created_at", { ascending: false });

    if (jobsError || candidatesError) {
        console.error("Failed to fetch dashboard data:", { jobsError, candidatesError });
    }

    const totalJobs = jobs?.length || 0;
    const candidates = allCandidates ?? [];
    const totalCandidates = candidates?.length || 0;
    const averageScore = totalCandidates > 0
        ? Math.round(candidates.reduce((acc, c) => acc + (c.match_score || 0), 0) / totalCandidates)
        : 0;

    const recentCandidates = candidates?.slice(0, 5).map(c => ({
        ...c,
        job_title: c.jobs?.title
    })) || [];

    return (
        <div className="max-w-7xl mx-auto space-y-10 py-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="space-y-1">
                    <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
                        Recruitment Overview
                    </h1>
                    <p className="text-muted-foreground text-lg font-medium">
                        Track your candidate pipeline and manage active job postings.
                    </p>
                </div>
                <div>
                    <CreateJobDialog />
                </div>
            </div>

            {/* Stats Section */}
            <StatsCards
                totalJobs={totalJobs}
                totalCandidates={totalCandidates}
                averageScore={averageScore}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Jobs List Section */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                            Active Jobs
                            <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                                {totalJobs}
                            </span>
                        </h2>
                    </div>

                    {jobs && jobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {jobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border-2 border-dashed rounded-[2rem] bg-muted/10 border-muted-foreground/20">
                            <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 rounded bg-muted-foreground/20 animate-pulse"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">No jobs found</h3>
                            <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
                                Ready to find talent? Post your first job and let AI help you rank candidates.
                            </p>
                            <CreateJobDialog />
                        </div>
                    )}
                </div>

                {/* Recent Activity Section */}
                <div className="lg:col-span-1 space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight">Recent activity</h2>
                    <RecentCandidates candidates={recentCandidates} />
                </div>
            </div>
        </div>
    );
}
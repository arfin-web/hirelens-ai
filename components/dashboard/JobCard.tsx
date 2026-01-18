"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    LocationIcon,
    Delete01Icon,
    ArrowRight01Icon
} from "@hugeicons/core-free-icons";
import { deleteJob } from "@/app/actions/jobs";
import { useState } from "react";
import { toast } from "react-toastify";

interface JobCardProps {
    job: {
        id: string;
        title: string;
        company_name: string;
        location: string;
        description: string;
        required_skills: string[];
        created_at: string;
    };
}

export function JobCard({ job }: JobCardProps) {
    const { userId } = useAuth();
    const [deleting, setDeleting] = useState(false);

    async function handleDelete() {
        if (!confirm("Are you sure you want to delete this job?")) return;

        setDeleting(true);
        try {
            if (!userId) throw new Error("Unauthorized");
            await deleteJob(userId, job.id);
            toast.success("Job deleted successfully");
        } catch (error: unknown) {
            console.error("Failed to delete job:", error);
            const message = error instanceof Error ? error.message : "Failed to delete job. Please try again.";
            toast.error(message);
            setDeleting(false);
        }
    }

    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                        <CardDescription className="text-base text-primary font-medium">
                            {job.company_name}
                        </CardDescription>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <HugeiconsIcon icon={LocationIcon} size={16} />
                    {job.location}
                </div>
            </CardHeader>

            <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {job.required_skills?.slice(0, 4).map((skill, idx) => (
                        <Badge key={idx} variant="secondary">
                            {skill}
                        </Badge>
                    ))}
                    {job.required_skills?.length > 4 && (
                        <Badge variant="secondary">
                            +{job.required_skills.length - 4} more
                        </Badge>
                    )}
                </div>
            </CardContent>

            <CardFooter className="flex justify-between gap-2">
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleDelete}
                    disabled={deleting}
                >
                    <HugeiconsIcon icon={Delete01Icon} className="mr-2 w-4 h-4" />
                    {deleting ? "Deleting..." : "Delete"}
                </Button>
                <Button asChild size="sm">
                    <Link href={`/dashboard/jobs/${job.id}`}>
                        View Candidates
                        <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

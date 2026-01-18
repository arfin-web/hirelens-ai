"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "@/app/actions/jobs";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { toast } from "react-toastify";

export function CreateJobDialog() {
    const { userId } = useAuth();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        setLoading(true);

        try {
            if (!userId) throw new Error("Unauthorized");
            const formData = new FormData(form);
            await createJob(userId, formData);
            setOpen(false);
            form.reset();
            toast.success("Job posted successfully!");
        } catch (error: unknown) {
            console.error("Failed to create job:", error);
            const message = error instanceof Error ? error.message : "Failed to create job. Please try again.";
            toast.error(message);
        } finally {
            setLoading(false);
        }
    }


    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button size="lg" className="rounded-full">
                    <HugeiconsIcon icon={Add01Icon} className="mr-2 w-4 h-4" />
                    Post New Job
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-2xl">
                <form onSubmit={handleSubmit}>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Post a New Job</AlertDialogTitle>
                        <AlertDialogDescription>
                            Fill in the details below to create a new job posting.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="space-y-4 py-4">
                        <Field>
                            <FieldLabel>Job Title *</FieldLabel>
                            <Input
                                name="title"
                                required
                                placeholder="e.g. Senior Frontend Developer"
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Company Name *</FieldLabel>
                            <Input
                                name="company_name"
                                required
                                placeholder="e.g. Tech Corp Inc."
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Location *</FieldLabel>
                            <Input
                                name="location"
                                required
                                placeholder="e.g. Remote, San Francisco, CA"
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Required Skills (comma-separated) *</FieldLabel>
                            <Input
                                name="required_skills"
                                required
                                placeholder="e.g. React, TypeScript, Node.js"
                            />
                        </Field>

                        <Field>
                            <FieldLabel>Job Description *</FieldLabel>
                            <Textarea
                                name="description"
                                required
                                rows={6}
                                placeholder="Describe the role, responsibilities, and requirements..."
                            />
                        </Field>
                    </div>

                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Creating..." : "Create Job"}
                        </Button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}

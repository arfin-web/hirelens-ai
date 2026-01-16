"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { analyzeAndCreateCandidate } from "@/app/actions/candidates";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserAdd01Icon } from "@hugeicons/core-free-icons";

interface AddCandidateFormProps {
    jobId: string;
}

export function AddCandidateForm({ jobId }: AddCandidateFormProps) {
    const [loading, setLoading] = useState(false);
    const [expanded, setExpanded] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        setLoading(true);

        try {
            const formData = new FormData(form);
            await analyzeAndCreateCandidate(jobId, formData);
            form.reset();
            setExpanded(false);
            alert("Candidate analyzed and added successfully!");
        } catch (error) {
            console.error("Failed to add candidate:", error);
            alert("Failed to add candidate. Please check your API keys and try again.");
        } finally {
            setLoading(false);
        }
    }

    if (!expanded) {
        return (
            <Button onClick={() => setExpanded(true)} size="lg" className="mb-6">
                <HugeiconsIcon icon={UserAdd01Icon} className="mr-2 w-4 h-4" />
                Add Candidate
            </Button>
        );
    }

    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>Add New Candidate</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Field>
                        <FieldLabel>Candidate Name *</FieldLabel>
                        <Input
                            name="name"
                            required
                            placeholder="e.g. John Doe"
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Email *</FieldLabel>
                        <Input
                            name="email"
                            type="email"
                            required
                            placeholder="e.g. john@example.com"
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Resume Text *</FieldLabel>
                        <Textarea
                            name="resumeText"
                            required
                            rows={8}
                            placeholder="Paste the candidate's resume content here..."
                        />
                    </Field>

                    <div className="flex gap-3">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Analyzing with AI..." : "Analyze & Add Candidate"}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setExpanded(false)}
                            disabled={loading}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

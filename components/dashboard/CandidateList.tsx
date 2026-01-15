"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";

interface Candidate {
    id: string;
    name: string;
    email: string;
    match_score: number;
    ai_summary: string;
    skill_gaps: string[];
    created_at: string;
}

interface CandidateListProps {
    candidates: Candidate[];
}

export function CandidateList({ candidates }: CandidateListProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    if (candidates.length === 0) {
        return (
            <div className="text-center py-12 border border-dashed rounded-lg">
                <h3 className="text-lg font-semibold mb-2">No candidates yet</h3>
                <p className="text-muted-foreground">
                    Add candidates to see AI-powered match scores
                </p>
            </div>
        );
    }

    const getMatchBadge = (score: number) => {
        if (score >= 80) return <Badge className="bg-green-500">High Match ({score}%)</Badge>;
        if (score >= 60) return <Badge className="bg-yellow-500">Medium Match ({score}%)</Badge>;
        return <Badge variant="destructive">Low Match ({score}%)</Badge>;
    };

    return (
        <div className="space-y-4">
            {candidates.map((candidate) => {
                const isExpanded = expandedId === candidate.id;

                return (
                    <div
                        key={candidate.id}
                        className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg font-semibold">{candidate.name}</h3>
                                    {getMatchBadge(candidate.match_score)}
                                </div>
                                <p className="text-sm text-muted-foreground">{candidate.email}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setExpandedId(isExpanded ? null : candidate.id)}
                            >
                                <HugeiconsIcon
                                    icon={isExpanded ? ArrowUp01Icon : ArrowDown01Icon}
                                    size={20}
                                />
                            </Button>
                        </div>

                        {isExpanded && (
                            <div className="mt-6 space-y-4 border-t border-border pt-4">
                                <div>
                                    <h4 className="font-semibold text-sm mb-2">AI Summary</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {candidate.ai_summary}
                                    </p>
                                </div>

                                {candidate.skill_gaps && candidate.skill_gaps.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2">Skill Gaps</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {candidate.skill_gaps.map((gap, idx) => (
                                                <Badge key={idx} variant="outline">
                                                    {gap}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

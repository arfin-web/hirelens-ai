import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon, Clock01Icon } from "@hugeicons/core-free-icons";

interface Candidate {
    id: string;
    name: string;
    match_score: number;
    job_title?: string;
    created_at: string;
}

interface RecentCandidatesProps {
    candidates: Candidate[];
}

export function RecentCandidates({ candidates }: RecentCandidatesProps) {
    return (
        <Card className="border-none shadow-sm bg-card/50 backdrop-blur-sm h-full">
            <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <HugeiconsIcon icon={Clock01Icon} size={5} className="text-primary" />
                    Recent Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                {candidates.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                        No recent activity found.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {candidates.map((candidate) => (
                            <div key={candidate.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <HugeiconsIcon icon={UserIcon} size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold">{candidate.name}</h4>
                                        <p className="text-xs text-muted-foreground">
                                            Applied for <span className="text-foreground">{candidate.job_title || "Unknown Job"}</span>
                                        </p>
                                    </div>
                                </div>
                                <Badge
                                    variant={candidate.match_score >= 80 ? "default" : "secondary"}
                                    className={candidate.match_score >= 80 ? "bg-green-500 hover:bg-green-600" : ""}
                                >
                                    {candidate.match_score}% Match
                                </Badge>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

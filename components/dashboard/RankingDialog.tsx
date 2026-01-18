"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChampionIcon, RankingIcon } from "@hugeicons/core-free-icons";

interface Candidate {
    id: string;
    name: string;
    match_score: number;
}

interface RankingDialogProps {
    candidates: Candidate[];
}

export function RankingDialog({ candidates }: RankingDialogProps) {
    // Sort candidates by match_score descending
    const sortedCandidates = [...candidates].sort((a, b) => b.match_score - a.match_score);

    const getMatchBadge = (score: number) => {
        if (score >= 80) return <Badge className="bg-green-500">High Match</Badge>;
        if (score >= 60) return <Badge className="bg-yellow-500 text-black">Medium Match</Badge>;
        return <Badge variant="destructive">Low Match</Badge>;
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="gap-2">
                    <HugeiconsIcon icon={RankingIcon} size={20} />
                    Rank Candidates
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                        <HugeiconsIcon icon={ChampionIcon} className="text-yellow-500" size={24} />
                        AI Candidate Ranking
                    </DialogTitle>
                </DialogHeader>

                <div className="mt-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-16">Rank</TableHead>
                                <TableHead>Candidate Name</TableHead>
                                <TableHead className="text-center">Score</TableHead>
                                <TableHead className="text-right">Category</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sortedCandidates.map((candidate, index) => (
                                <TableRow key={candidate.id} className={index === 0 ? "bg-primary/5 font-medium" : ""}>
                                    <TableCell className="font-bold">
                                        {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                                    </TableCell>
                                    <TableCell>{candidate.name}</TableCell>
                                    <TableCell className="text-center">
                                        <span className="text-lg font-semibold">{candidate.match_score}%</span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {getMatchBadge(candidate.match_score)}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {sortedCandidates.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                        No candidates to rank yet.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </DialogContent>
        </Dialog>
    );
}

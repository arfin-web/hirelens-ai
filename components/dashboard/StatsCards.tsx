import {
    Briefcase02Icon,
    UserGroupIcon,
    ChartAverageIcon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardsProps {
    totalJobs: number;
    totalCandidates: number;
    averageScore: number;
}

export function StatsCards({ totalJobs, totalCandidates, averageScore }: StatsCardsProps) {
    const stats = [
        {
            title: "Active Jobs",
            value: totalJobs,
            icon: Briefcase02Icon,
            description: "Live job postings",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Total Candidates",
            value: totalCandidates,
            icon: UserGroupIcon,
            description: "Applied via Hirelens",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
        {
            title: "Avg. Match Score",
            value: `${averageScore}%`,
            icon: ChartAverageIcon,
            description: "AI matching accuracy",
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
                <Card key={stat.title} className="border-none shadow-sm bg-card/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            {stat.title}
                        </CardTitle>
                        <div className={`p-2 rounded-lg ${stat.bg}`}>
                            <HugeiconsIcon icon={stat.icon} size={20} className={stat.color} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            {stat.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

import { HugeiconsIcon } from "@hugeicons/react";
import {
    Clock01Icon,
    GlobalIcon,
    UserGroupIcon,
    Task01Icon
} from "@hugeicons/core-free-icons";

const stats = [
    {
        label: "Time Saved",
        value: "90%",
        description: "Reduction in manual resume screening time.",
        icon: <HugeiconsIcon icon={Clock01Icon} size={24} className="text-primary" />,
        delay: "delay-100"
    },
    {
        label: "Candidates Ranked",
        value: "10k+",
        description: "Resumes parsed and scored monthly.",
        icon: <HugeiconsIcon icon={Task01Icon} size={24} className="text-primary" />,
        delay: "delay-200"
    },
    {
        label: "Happy Recruiters",
        value: "500+",
        description: "Companies trust Hirelens for their hiring.",
        icon: <HugeiconsIcon icon={UserGroupIcon} size={24} className="text-primary" />,
        delay: "delay-300"
    },
    {
        label: "Global Reach",
        value: "15+",
        description: "Countries using our AI-driven recruitment.",
        icon: <HugeiconsIcon icon={GlobalIcon} size={24} className="text-primary" />,
        delay: "delay-400"
    }
];

export function ImpactSection() {
    return (
        <section className="pb-20 relative overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px] animate-pulse delay-700" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Making a Real Impact
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Numbers don't lie. Here is how Hirelens AI is transforming the recruitment landscape for teams worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group animate-fade-in-up ${stat.delay}`}
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                {stat.icon}
                            </div>
                            <div className="space-y-2">
                                <span className="text-4xl font-bold tracking-tight text-foreground">
                                    {stat.value}
                                </span>
                                <h3 className="text-lg font-semibold text-foreground">
                                    {stat.label}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                            {/* Decorative line */}
                            <div className="mt-6 h-1 w-0 bg-primary/40 rounded-full group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

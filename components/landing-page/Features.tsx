import { HugeiconsIcon } from "@hugeicons/react";
import { FileValidationIcon, RankingIcon, RoboticIcon, Search01Icon } from "@hugeicons/core-free-icons";

const features = [
    {
        icon: <HugeiconsIcon icon={FileValidationIcon} className="w-8 h-8 text-primary" />,
        title: "Smart Resume Parsing",
        description:
            "Instantly extract structured data from PDF and Word resumes. Our AI understands skills, experience, and education context.",
    },
    {
        icon: <HugeiconsIcon icon={RankingIcon} className="w-8 h-8 text-primary" />,
        title: "AI Candidate Ranking",
        description:
            "Candidates are automatically scored and ranked based on how well they match your specific job description requirements.",
    },
    {
        icon: <HugeiconsIcon icon={RoboticIcon} className="w-8 h-8 text-primary" />,
        title: "Automated Screening",
        description:
            "Save hours by letting our AI handle the initial screening. We highlight match percentages and potential red flags.",
    },
    {
        icon: <HugeiconsIcon icon={Search01Icon} className="w-8 h-8 text-primary" />,
        title: "Contextual Search",
        description: "Search your candidate pool with natural language. 'Find a python developer who knows finance' works instantly."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Why Choose Hirelens AI?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We replace manual resume screening with intelligent automation, helping you build your dream team 10x faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

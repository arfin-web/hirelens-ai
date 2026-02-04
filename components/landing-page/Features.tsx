import { HugeiconsIcon } from "@hugeicons/react";
import { FileValidationIcon, RankingIcon, RoboticIcon, Note01Icon } from "@hugeicons/core-free-icons";

const features = [
    {
        icon: <HugeiconsIcon icon={FileValidationIcon} size={32} className="text-primary" />,
        title: "Smart Resume Parsing",
        description:
            "Instantly extract structured data from PDF and Word resumes. Our AI understands skills, experience, and education context.",
        className: "md:col-span-2 md:row-span-1",
        delay: "delay-100"
    },
    {
        icon: <HugeiconsIcon icon={RankingIcon} size={32} className="text-primary" />,
        title: "AI Candidate Ranking",
        description:
            `Candidates are automatically scored and ranked based on how well they match your specific job requirements.
            Here you can see the match percentage and potential red flags. Also you can see the candidate's strengths and weaknesses.
            The process is simple and straightforward. You can see the candidate's strengths and weaknesses.
            Here's how it works:
            1. Upload resumes
            2. AI parses and analyzes resumes
            3. AI ranks candidates based on job requirements
            4. AI highlights match percentages and potential red flags
            `,
        className: "md:col-span-1 md:row-span-2",
        delay: "delay-200"
    },
    {
        icon: <HugeiconsIcon icon={RoboticIcon} size={32} className="text-primary" />,
        title: "Automated Screening",
        description:
            "Save hours by letting our AI handle the initial screening. We highlight match percentages and potential red flags.",
        className: "md:col-span-1 md:row-span-1",
        delay: "delay-300"
    },
    {
        icon: <HugeiconsIcon icon={Note01Icon} size={32} className="text-primary" />,
        title: "Consize Summaries",
        description: "Get consize summaries of each candidate's strengths and weaknesses. Also you can see the candidate's strengths and weaknesses.",
        className: "md:col-span-2 md:row-span-1",
        delay: "delay-400"
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px]" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Powerful Features for Modern Teams
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We replace manual resume screening with intelligent automation, helping you build your dream team 10x faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.className} ${feature.delay} p-8 rounded-3xl bg-background border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden flex flex-col justify-end animate-fade-in-up`}
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -inset-1 bg-linear-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="mb-auto p-4 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative corner element */}
                            <div className="absolute top-4 right-4 w-8 h-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-foreground">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

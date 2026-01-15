export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Post Your Job",
            description:
                "Create a job listing with detailed requirements. Our AI analyzes your description to understand exactly who you're looking for.",
        },
        {
            number: "02",
            title: "Upload Resumes",
            description:
                "Bulk upload hundreds of resumes in seconds, or let candidates apply directly. We support all major file formats.",
        },
        {
            number: "03",
            title: "Get Ranked Results",
            description:
                "Receive an instant leaderboard of candidates ranked by fit. Review detailed match insights and schedule interviews.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <div className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Workflow</div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        From Job Post to Interview in Minutes
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Our streamlined process removes the bottleneck of manual review.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center mb-8 rotate-3 hover:rotate-0 transition-transform duration-300">
                                <span className="text-4xl font-bold text-primary/80">{step.number}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

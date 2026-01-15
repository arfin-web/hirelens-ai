import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, PlayCircle02Icon } from "@hugeicons/core-free-icons";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40 dark:opacity-20">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
                <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-secondary/40 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-1000" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground mb-8 animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    New: Automate your 1st interview
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent max-w-4xl mx-auto">
                    Hire Top Talent <br className="hidden md:block" /> Faster with AI
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
                    Streamline your recruitment process with intelligent resume parsing, automated ranking, and smart candidate matching.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base">
                        Post a Job for Free
                        <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                        <HugeiconsIcon icon={PlayCircle02Icon} className="mr-2 w-4 h-4" />
                        Watch Demo
                    </Button>
                </div>

                {/* Dashboard Preview Mockup */}
                <div className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-border bg-card/50 shadow-2xl backdrop-blur-sm p-2 animate-fade-in-up delay-500">
                    <div className="rounded-lg border border-border/50 bg-background overflow-hidden aspect-[16/9] flex items-center justify-center text-muted-foreground relative">
                        {/* Abstract UI representation */}
                        <div className="absolute inset-x-0 top-0 h-10 border-b border-border/50 bg-muted/20 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-8 w-full h-full mt-10">
                            <div className="col-span-1 bg-muted/30 rounded-lg h-full animate-pulse"></div>
                            <div className="col-span-3 grid grid-rows-3 gap-4">
                                <div className="row-span-1 bg-primary/5 rounded-lg w-full h-full border border-primary/10 flex items-center p-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 mr-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-48 bg-primary/20 rounded"></div>
                                        <div className="h-3 w-32 bg-primary/10 rounded"></div>
                                    </div>
                                    <div className="ml-auto text-xl font-bold text-primary">98% Match</div>
                                </div>
                                <div className="row-span-1 bg-muted/20 rounded-lg w-full h-full flex items-center p-4">
                                    <div className="w-12 h-12 rounded-full bg-muted mr-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-48 bg-muted rounded"></div>
                                        <div className="h-3 w-32 bg-muted/50 rounded"></div>
                                    </div>
                                </div>
                                <div className="row-span-1 bg-muted/10 rounded-lg w-full h-full flex items-center p-4">
                                    <div className="w-12 h-12 rounded-full bg-muted mr-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-48 bg-muted rounded"></div>
                                        <div className="h-3 w-32 bg-muted/50 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10 opacity-50"></div>
                </div>
            </div>

        </section>
    );
}

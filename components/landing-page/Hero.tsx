import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, PlayCircle02Icon } from "@hugeicons/core-free-icons";
import { DashboardPreview } from "./DashboardPreview";
import { currentUser } from '@clerk/nextjs/server'
import Link from "next/link";

export async function Hero() {
    const user = await currentUser();
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

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100 bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent max-w-4xl mx-auto">
                    Hire Top Talent <br className="hidden md:block" /> Faster with AI
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
                    Streamline your recruitment process with intelligent resume parsing, automated ranking, and smart candidate matching.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    {
                        user ? <Button size="lg" className="rounded-full px-8 h-12 text-base">
                            <Link href="/dashboard">Go to Dashboard</Link>
                            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4" />
                        </Button> : <Button size="lg" className="rounded-full px-8 h-12 text-base">
                            <Link href="/signup">Get Started</Link>
                            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4" />
                        </Button>
                    }
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                        <HugeiconsIcon icon={PlayCircle02Icon} className="ml-2 w-4 h-4" />
                        <Link href="/coming-soon">Watch Demo</Link>
                    </Button>
                </div>

                {/* Dashboard Preview Mockup */}
                <DashboardPreview />
            </div>

        </section>
    );
}

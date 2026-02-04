import { DashboardPreview } from "./DashboardPreview";
import { currentUser } from '@clerk/nextjs/server'
import { HeroActions } from "./HeroActions";
import { HeroSocialProof } from "./HeroSocialProof";
import { HeroVisuals } from "./HeroVisuals";

export async function Hero() {
    const user = await currentUser();

    return (
        <section className="relative py-10 md:py-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40 dark:opacity-20">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
                <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-secondary/40 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-1000" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left Side */}
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center rounded-full border border-border bg-background mt-16 px-3 py-1 text-sm text-muted-foreground mb-8 animate-fade-in-up">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                            New: Automate your 1st interview
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100 bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                            Hire Top Talent <br className="hidden md:block" /> Faster with AI
                        </h1>

                        <p className="text-lg text-muted-foreground mb-10 max-w-xl animate-fade-in-up delay-200">
                            Streamline your recruitment process with intelligent resume parsing, automated ranking, and smart candidate matching.
                        </p>

                        <HeroActions user={user} />

                        <HeroSocialProof />
                    </div>

                    {/* Right Side */}
                    <HeroVisuals />
                </div>

                {/* Dashboard Preview Mockup */}
                <div className="lg:hidden -mt-20">
                    <DashboardPreview />
                </div>
            </div>

        </section>
    );
}

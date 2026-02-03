import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiBrain03Icon, ArrowLeft02Icon, Mail01Icon } from "@hugeicons/core-free-icons";

export function ComingSoon() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background px-4">
            {/* Background Mesh/Gradients */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 dark:opacity-10" />
            </div>

            {/* Navigation / Logo */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 animate-fade-in-up">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <HugeiconsIcon icon={AiBrain03Icon} size={20} />
                    </div>
                    <span className="bg-linear-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Hirelens AI
                    </span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
                <div className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm text-muted-foreground animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
                    Launching Spring 2026
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent animate-fade-in-up delay-100">
                    Something Big <br /> is Coming.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up delay-200 leading-relaxed max-w-lg mx-auto">
                    We're building the future of AI-driven recruitment.
                    Streamline your hiring process and find top talent effortlessly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-semibold">
                        <HugeiconsIcon icon={Mail01Icon} className="mr-2 w-5 h-5" />
                        Join the Waitlist
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                        Learn More
                    </Button>
                </div>

                <div className="pt-8 animate-fade-in-up delay-500">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <HugeiconsIcon icon={ArrowLeft02Icon} className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to homepage
                    </Link>
                </div>
            </div>

            {/* Footer shadow/blur */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-background to-transparent -z-10" />
        </div>
    );
}

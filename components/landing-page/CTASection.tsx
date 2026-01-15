import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-primary/5 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Ready to Modernize Your Hiring?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Join thousands of companies using Hirelens AI to find the best talent, faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-xl shadow-primary/20">
                        Start Your Free 14-Day Trial
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base bg-background/50 backdrop-blur-sm">
                        Schedule a Demo
                    </Button>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                    No credit card required. Cancel anytime.
                </p>
            </div>
        </section>
    );
}

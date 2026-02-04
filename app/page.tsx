import { Navbar } from "@/components/landing-page/Navbar";
import { Hero } from "@/components/landing-page/Hero";
import { Features } from "@/components/landing-page/Features";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { Testimonials } from "@/components/landing-page/Testimonials";
import { CTASection } from "@/components/landing-page/CTASection";
import { Footer } from "@/components/landing-page/Footer";
import { ImpactSection } from "@/components/landing-page/ImpactSection";

export default function Page() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />
            <main className="flex flex-col">
                <Hero />
                <ImpactSection />
                <HowItWorks />
                <Features />
                <Testimonials />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
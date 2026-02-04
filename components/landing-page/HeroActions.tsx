import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, PlayCircle02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

interface HeroActionsProps {
    user: any;
}

export function HeroActions({ user }: HeroActionsProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 animate-fade-in-up delay-300">
            {
                user ? (
                    <Button size="lg" className="rounded-full px-8 h-12 text-base">
                        <Link href="/dashboard">Go to Dashboard</Link>
                        <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4" />
                    </Button>
                ) : (
                    <Button size="lg" className="rounded-full px-8 h-12 text-base">
                        <Link href="/signup">Get Started</Link>
                        <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4" />
                    </Button>
                )
            }
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                <HugeiconsIcon icon={PlayCircle02Icon} className="ml-2 w-4 h-4" />
                <Link href="/coming-soon">Watch Demo</Link>
            </Button>
        </div>
    );
}

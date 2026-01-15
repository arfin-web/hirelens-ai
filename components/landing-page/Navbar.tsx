import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiBrain03Icon } from "@hugeicons/core-free-icons";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <HugeiconsIcon icon={AiBrain03Icon} size={20} />
                    </div>
                    <span className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Hirelens AI
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#features" className="transition-colors hover:text-foreground">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="transition-colors hover:text-foreground">
                        How It Works
                    </Link>
                    <Link href="#testimonials" className="transition-colors hover:text-foreground">
                        Testimonials
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                        Log in
                    </Button>
                    <Button size="sm" className="rounded-full px-6">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
}

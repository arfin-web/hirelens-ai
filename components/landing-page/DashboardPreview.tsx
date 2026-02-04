import Image from "next/image";

export function DashboardPreview() {
    return (
        <div className="relative mx-auto max-w-5xl h-64 rounded-xl border border-border bg-card/50 shadow-2xl backdrop-blur-sm p-2 animate-fade-in-up delay-500">
            <div className="rounded-lg border border-border/50 bg-background overflow-hidden aspect-video flex items-center justify-center text-muted-foreground relative">
                {/* Browser top bar */}
                <div className="absolute inset-x-0 top-0 h-10 border-b border-border/50 bg-muted/20 flex items-center px-4 gap-2 z-10 backdrop-blur-md">
                    <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                </div>

                <div className="relative w-full h-full mt-20">
                    <Image
                        src="/dashboard.png"
                        alt="Hirelens AI Dashboard Preview"
                        fill
                        priority
                        className="object-cover object-top"
                    />
                </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-xl bg-linear-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10 opacity-50"></div>
        </div>
    );
}
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

const testimonials = [
    {
        quote:
            "Hirelens AI cut our time-to-hire by 50%. The automated ranking is shockingly accurate.",
        author: "Sarah J.",
        role: "Head of Talent at TechCorp",
        avatar: "S",
    },
    {
        quote:
            "I used to spend hours reading resumes. Now I just check the top 10 matches. Game changer.",
        author: "Michael B.",
        role: "HR Director at StartupX",
        avatar: "M",
    },
    {
        quote:
            "The smart parsing handles formats that other tools choke on. Highly recommend.",
        author: "Emily R.",
        role: "Recruiting Manager at BigFirm",
        avatar: "E",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
                    Loved by Recruiters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-background p-8 rounded-2xl border border-border shadow-sm flex flex-col">
                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <HugeiconsIcon key={i} icon={StarIcon} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg mb-8 flex-grow leading-relaxed">&quot;{t.quote}&quot;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold">{t.author}</div>
                                    <div className="text-sm text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

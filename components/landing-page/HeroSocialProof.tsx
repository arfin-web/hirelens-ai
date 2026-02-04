import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@/components/ui/avatar"

export function HeroSocialProof() {
    return (
        <>
            {/* Founders who trust us */}
            <h2 className="text-sm text-foreground font-bold italic mt-5 md:mt-10 animate-fade-in-up delay-400">Founders who <span className="text-primary">trust us</span>:</h2>
            <div className="flex items-center justify-center md:justify-start">
                <AvatarGroup className="mt-3 animate-fade-in-up delay-500">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/maxleiter.png"
                            alt="@maxleiter"
                        />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount>+120</AvatarGroupCount>
                </AvatarGroup>
            </div>

            {/* Our Trusted Partners */}
            <h2 className="text-sm text-foreground font-bold italic mt-5 animate-fade-in-up delay-400">Our Trusted <span className="text-primary">Partners</span>:</h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-4 mt-3 animate-fade-in-up delay-500 grayscale opacity-40">
                <div className="text-xl font-black tracking-tighter hover:opacity-100 transition-opacity cursor-default uppercase">Google</div>
                <div className="text-xl font-bold tracking-[0.15em] hover:opacity-100 transition-opacity cursor-default uppercase">Airbnb</div>
                <div className="text-xl font-extrabold tracking-tight italic hover:opacity-100 transition-opacity cursor-default uppercase">Netflix</div>
                <div className="text-2xl font-bold tracking-tighter hover:opacity-100 transition-opacity cursor-default uppercase">stripe</div>
            </div>
            {/* Abstract Underlines */}
            <div className="relative mt-8 group flex flex-col items-center md:items-start justify-center md:justify-start">
                <div className="relative h-4 w-48 opacity-40 animate-fade-in-up delay-700">
                    <svg
                        viewBox="0 0 200 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary w-full h-full"
                    >
                        <path
                            d="M5 15C50 5 150 5 195 15"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="relative -mt-1 h-6 w-64 opacity-30 animate-fade-in-up delay-800">
                    <svg
                        viewBox="0 0 200 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary/50 w-full h-full"
                    >
                        <path
                            d="M5 18C60 2 140 2 195 18"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}

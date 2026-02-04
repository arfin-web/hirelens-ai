import Image from "next/image";

export function HeroVisuals() {
    return (
        <div className="relative">
            <div className="relative animate-fade-in-up delay-400 hidden lg:block">
                <Image
                    src="/heroImg.png"
                    alt="Hirelens AI Hero"
                    width={500}
                    height={500}
                    priority
                    className="object-cover rounded-2xl"
                />
            </div>
        </div>
    );
}

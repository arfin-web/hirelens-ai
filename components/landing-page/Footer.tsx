import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiBrain03Icon, Linkedin02Icon, TwitterIcon, InstagramIcon } from "@hugeicons/core-free-icons";

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/20 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <HugeiconsIcon icon={AiBrain03Icon} size={20} />
                            </div>
                            <span>Hirelens AI</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Empowering recruitment teams with next-generation AI tools. Find your perfect candidate match in seconds.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <HugeiconsIcon icon={TwitterIcon} size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <HugeiconsIcon icon={Linkedin02Icon} size={20} />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <HugeiconsIcon icon={InstagramIcon} size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground">Features</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Case Studies</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Reviews</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground">About Us</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Hirelens AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

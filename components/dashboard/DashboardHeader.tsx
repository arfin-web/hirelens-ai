import { UserButton } from "@clerk/nextjs";

export function DashboardHeader() {
    return (
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 px-8 backdrop-blur">
            <div className="flex items-center gap-4">
                {/* Placeholder for Breadcrumbs or Mobile Menu Trigger */}
            </div>
            <div className="flex items-center gap-4">
                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: "h-9 w-9"
                        }
                    }}
                />
            </div>
        </header>
    );
}

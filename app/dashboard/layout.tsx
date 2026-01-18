import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <div className="pl-64 flex flex-col min-h-screen">
                <DashboardHeader />
                <main className="flex-1">
                    <div className="container mx-auto p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

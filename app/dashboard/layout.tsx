import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <main className="pl-64">
                <div className="container mx-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

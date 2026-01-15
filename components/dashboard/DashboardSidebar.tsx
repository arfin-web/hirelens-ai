"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BriefcaseIcon,
  Home01Icon,
  Settings01Icon,
  LogoutSquare01Icon,
  AiBrain03Icon
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: Home01Icon },
  { name: "Jobs", href: "/dashboard/jobs", icon: BriefcaseIcon },
  { name: "Settings", href: "/dashboard/settings", icon: Settings01Icon },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-background flex flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <HugeiconsIcon icon={AiBrain03Icon} size={20} />
        </div>
        <span className="font-bold text-lg">Hirelens AI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <HugeiconsIcon icon={item.icon} size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="border-t border-border p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <HugeiconsIcon icon={LogoutSquare01Icon} size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}

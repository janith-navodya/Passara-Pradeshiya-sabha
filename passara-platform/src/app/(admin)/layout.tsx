"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  LayoutDashboard, AlertCircle, Building2, FolderKanban, Bell,
  Users, BarChart3, Menu, X, Sun, Moon, ChevronRight,
  LogOut, Settings, ChevronDown, Dot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Complaints", href: "/admin/complaints", icon: AlertCircle, badge: "47" },
  { label: "Departments", href: "/admin/departments", icon: Building2 },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Notices", href: "/admin/notices", icon: Bell },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Reports", href: "/admin/reports", icon: BarChart3 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-bold text-sm shadow">
            PS
          </div>
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden"
              >
                <div className="text-sm font-bold text-sidebar-foreground whitespace-nowrap">Passara PS</div>
                <div className="text-xs text-sidebar-foreground/60 whitespace-nowrap">Admin Portal</div>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Nav items */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className={cn("text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider mb-2 px-2", !sidebarOpen && "hidden")}>
          Main Menu
        </div>
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
              )}
            >
              <Icon className="w-4.5 h-4.5 shrink-0" />
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap flex-1"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {item.badge && sidebarOpen && (
                <Badge className="bg-red-500 text-white text-xs px-1.5 py-0 h-5">{item.badge}</Badge>
              )}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-400 rounded-r-full"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground transition-all">
          <Settings className="w-4.5 h-4.5 shrink-0" />
          {sidebarOpen && <span>Settings</span>}
        </Link>
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground transition-all">
          <LogOut className="w-4.5 h-4.5 shrink-0" />
          {sidebarOpen && <span>Back to Site</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 240 : 64 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="hidden lg:flex flex-col bg-sidebar border-r border-sidebar-border overflow-hidden shrink-0"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 top-0 h-full w-60 bg-sidebar z-50 lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <ChevronRight className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
            <div className="hidden sm:block text-sm font-semibold text-foreground">Admin Dashboard</div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-xs font-bold">
                LA
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-semibold">Lalith Bandara</div>
                <div className="text-xs text-muted-foreground">Administrator</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}

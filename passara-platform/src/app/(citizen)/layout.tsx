"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, AlertCircle, Bell, CalendarDays, User, Sun, Moon, Menu, LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const citizenNav = [
  { label: "Dashboard", href: "/citizen", icon: LayoutDashboard },
  { label: "My Complaints", href: "/citizen/complaints", icon: AlertCircle },
  { label: "Notifications", href: "/citizen/notifications", icon: Bell },
  { label: "Reservations", href: "/citizen/reservations", icon: CalendarDays },
  { label: "Profile", href: "/citizen/profile", icon: User },
];

export default function CitizenLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 h-14 bg-card border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a5276] to-[#1e8449] flex items-center justify-center text-white text-xs font-bold">PS</div>
            <span className="font-semibold text-sm hidden sm:block">Citizen Portal</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-xs font-bold">KP</div>
          <Link href="/"><Button variant="ghost" size="icon"><LogOut className="w-4 h-4" /></Button></Link>
        </div>
      </header>

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex flex-col w-52 min-h-[calc(100vh-3.5rem)] bg-card border-r border-border p-3 shrink-0">
          <nav className="space-y-1">
            {citizenNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}
                  className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}>
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-2 px-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-xs font-bold">KP</div>
              <div><div className="text-xs font-semibold">Kumara Perera</div><div className="text-xs text-muted-foreground">Citizen</div></div>
            </div>
          </div>
        </aside>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black z-40 md:hidden" onClick={() => setMobileOpen(false)} />
              <motion.aside initial={{ x: -220 }} animate={{ x: 0 }} exit={{ x: -220 }} className="fixed left-0 top-0 h-full w-52 bg-card z-50 p-3 md:hidden">
                <nav className="space-y-1 mt-4">
                  {citizenNav.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
                        <Icon className="w-4 h-4" />{item.label}
                      </Link>
                    );
                  })}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}

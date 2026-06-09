"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslations } from "next-intl";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Passara PS", href: "/about" },
      { label: "Chairman's Message", href: "/about#chairman" },
      { label: "Council Members", href: "/about#council" },
      { label: "Departments", href: "/departments" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Submit Complaint", href: "/complaints" },
      { label: "Hall Reservation", href: "/hall-reservation" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Notices", href: "/notices" },
  { label: "News", href: "/news" },
  { label: "Tourism", href: "/tourism" },
  { label: "Contact", href: "/contact" },
];

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const tNav = useTranslations("Navigation");

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-[#1a5276] text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> 055-222-2222</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> info@passara.ps.gov.lk</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> Mon–Fri: 8:00 AM – 4:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-yellow-300 transition-colors">Admin Portal</Link>
            <Link href="/citizen" className="hover:text-yellow-300 transition-colors">Citizen Portal</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
            : "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a5276] to-[#1e8449] flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                PS
              </div>
              <div>
                <div className="font-bold text-[#1a5276] dark:text-blue-400 text-sm leading-tight">Passara</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">Pradeshiya Sabha</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-[#1a5276] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#1a5276] dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    )}
                  >
                    {link.label === "Home" ? tNav("home") 
                      : link.label === "Services" ? tNav("services")
                      : link.label === "Projects" ? tNav("projects")
                      : link.label === "News" ? tNav("news")
                      : link.label === "Contact" ? tNav("contact")
                      : link.label}
                    {link.children && <ChevronDown className="w-3 h-3" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-[#1a5276] dark:hover:text-blue-400 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
              )}
              <Link href="/complaints">
                <Button size="sm" className="hidden sm:flex bg-[#1e8449] hover:bg-[#1a7040] text-white rounded-full px-4 shadow-md">
                  Submit Complaint
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "bg-blue-50 dark:bg-blue-900/30 text-[#1a5276] dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label === "Home" ? tNav("home") 
                        : link.label === "Services" ? tNav("services")
                        : link.label === "Projects" ? tNav("projects")
                        : link.label === "News" ? tNav("news")
                        : link.label === "Contact" ? tNav("contact")
                        : link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hover:text-[#1a5276] dark:hover:text-blue-400 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                  <Link href="/complaints" className="flex-1">
                    <Button size="sm" className="w-full bg-[#1e8449] hover:bg-[#1a7040] text-white">
                      Submit Complaint
                    </Button>
                  </Link>
                  <Link href="/citizen" className="flex-1">
                    <Button size="sm" variant="outline" className="w-full">
                      Citizen Portal
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

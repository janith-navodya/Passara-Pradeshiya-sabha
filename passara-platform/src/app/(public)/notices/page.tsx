"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notices } from "@/data/notices";
import { Search, Calendar, Bell, Download, AlertTriangle, Info, ShieldAlert, Award, Coffee, Clock } from "lucide-react";
import Link from "next/link";

const noticeTypes = ["All", "Tender", "Announcement", "Warning", "Information", "Holiday", "Meeting"];

export default function NoticesPage() {
  const [activeType, setActiveType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotices = notices.filter((notice) => {
    const matchesType = activeType === "All" || notice.type === activeType;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case "Warning": return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case "Tender": return <Award className="w-5 h-5 text-blue-500" />;
      case "Holiday": return <Coffee className="w-5 h-5 text-amber-500" />;
      case "Meeting": return <Clock className="w-5 h-5 text-purple-500" />;
      default: return <Info className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-950 dark:text-zinc-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a5276] via-[#154360] to-[#1e8449] py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-sm border border-white/10">
              <Bell className="w-3.5 h-3.5 animate-bounce" />
              <span>Sabha Announcements</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Public Notices Center
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Stay informed with the latest alerts, tenders, community notifications, and public meetings scheduled by Passara local authorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">Public Notices</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          {noticeTypes.map((type) => {
            const isActive = activeType === type;
            return (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#1a5276] text-white shadow-md"
                    : "bg-white dark:bg-zinc-900 text-zinc-650 dark:text-zinc-400 hover:bg-zinc-150 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Notices Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className={`bg-white dark:bg-zinc-900 rounded-3xl border p-6 flex flex-col justify-between shadow-sm relative overflow-hidden ${
                  notice.isUrgent
                    ? "border-red-200 dark:border-red-950 bg-gradient-to-br from-red-50/10 to-white dark:from-red-950/5 dark:to-zinc-900 shadow-red-50/10"
                    : "border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {notice.isUrgent && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl animate-pulse" />
                )}

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                        {getNoticeIcon(notice.type)}
                      </div>
                      <span className="text-xs font-bold text-zinc-550 dark:text-zinc-355 uppercase">
                        {notice.type}
                      </span>
                    </div>
                    {notice.isUrgent && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-55/80 dark:bg-red-950/40 px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse border border-red-200 dark:border-red-900">
                        <ShieldAlert className="w-3 h-3" />
                        <span>Urgent</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {notice.title}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {notice.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>Published: {notice.publishedDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Expires: {notice.expiryDate}</span>
                    </div>
                    <div className="w-full mt-1 font-semibold text-[10px] uppercase text-[#1e8449]">
                      Issued by: {notice.department}
                    </div>
                  </div>
                </div>

                {notice.downloadUrl && (
                  <div className="mt-6 pt-3 border-t border-zinc-150 dark:border-zinc-850 flex justify-end">
                    <a
                      href={notice.downloadUrl}
                      download
                      className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Attachments</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredNotices.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
              <Bell className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold">No Notices Found</h3>
              <p className="text-xs text-zinc-500 mt-1">Try selecting a different category or search query.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

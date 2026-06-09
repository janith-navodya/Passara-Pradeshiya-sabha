"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, FileText, ChevronRight, HelpCircle, HardHat, FileCode, Landmark, Droplets } from "lucide-react";
import { Link } from "@/i18n/routing";

const categories = [
  { id: "all", name: "All Documents" },
  { id: "applications", name: "Application Forms" },
  { id: "minutes", name: "Council Minutes" },
  { id: "tenders", name: "Tender Notices" },
  { id: "guidelines", name: "Guidelines & Rules" }
];

const documents = [
  { id: "d1", title: "Building Plan Approval Application (Form A)", category: "applications", size: "340 KB", type: "PDF", date: "2024-03-12" },
  { id: "d2", title: "Water Piped Connection Request Form", category: "applications", size: "280 KB", type: "PDF", date: "2024-04-01" },
  { id: "d3", title: "Trade License & Business Registration Pack", category: "applications", size: "640 KB", type: "ZIP", date: "2024-02-15" },
  { id: "d4", title: "Sabha Council Monthly Minutes - April 2024", category: "minutes", size: "1.2 MB", type: "PDF", date: "2024-04-30" },
  { id: "d5", title: "Sabha Council Monthly Minutes - March 2024", category: "minutes", size: "1.1 MB", type: "PDF", date: "2024-03-31" },
  { id: "d6", title: "Road Construction Resurfacing Tender Guidelines", category: "tenders", size: "850 KB", type: "PDF", date: "2024-05-20" },
  { id: "d7", title: "Water Pipeline Extension Project Bid Documents", category: "tenders", size: "1.5 MB", type: "ZIP", date: "2024-05-18" },
  { id: "d8", title: "Solid Waste Disposal Guidelines for Businesses", category: "guidelines", size: "450 KB", type: "PDF", date: "2024-01-10" },
  { id: "d9", title: "Environmental Protection License (EPL) Guidelines", category: "guidelines", size: "520 KB", type: "PDF", date: "2024-02-28" }
];

export default function DownloadsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocs = documents.filter((doc) => {
    const matchesTab = activeTab === "all" || doc.category === activeTab;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

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
              <Download className="w-3.5 h-3.5 animate-bounce" />
              <span>Downloads Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Resource & Downloads Center
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Access application forms, tender packages, official council minutes, and environmental guidelines in one convenient repository.
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
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">Downloads Center</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search documents..."
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
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#1a5276] text-white shadow-md"
                    : "bg-white dark:bg-zinc-900 text-zinc-650 dark:text-zinc-400 hover:bg-zinc-150 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Downloads Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredDocs.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                      {doc.category}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full uppercase">
                      {doc.type}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-55 group-hover:text-primary transition-colors leading-snug">
                        {doc.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[10px] text-zinc-450 mt-1.5 font-semibold">
                        <span>Size: {doc.size}</span>
                        <span>•</span>
                        <span>Updated: {doc.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                  <a
                    href="#"
                    download
                    className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredDocs.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
              <Download className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold">No Documents Found</h3>
              <p className="text-xs text-zinc-500 mt-1">Try searching for other terms or resetting the filter tabs.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

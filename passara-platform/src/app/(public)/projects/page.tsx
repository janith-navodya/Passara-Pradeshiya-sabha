"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Search, MapPin, Calendar, HardHat, FileText, ChevronRight, Landmark, Badge, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

const projectStatuses = ["All", "Planning", "In Progress", "Completed"];

export default function DevelopmentProjectsPage() {
  const [activeStatus, setActiveStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((proj) => {
    const matchesStatus = activeStatus === "All" || proj.status === activeStatus;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.ward.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900";
      case "In Progress": return "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-900";
      case "Planning": return "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-900";
      default: return "bg-zinc-100 text-zinc-650 border-zinc-200";
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
              <HardHat className="w-3.5 h-3.5" />
              <span>Public Welfare Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Development Projects
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Follow real-time progress on road connectivity, water supply infrastructure, market modernizations, and green energy street lights.
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
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">Development Projects</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          {projectStatuses.map((stat) => {
            const isActive = activeStatus === stat;
            return (
              <button
                key={stat}
                onClick={() => setActiveStatus(stat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#1a5276] text-white shadow-md"
                    : "bg-white dark:bg-zinc-900 text-zinc-650 dark:text-zinc-400 hover:bg-zinc-150 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {stat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((proj, index) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                      {proj.category}
                    </span>
                    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getStatusColor(proj.status)}`}>
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs font-semibold text-zinc-650 dark:text-zinc-350">
                      <span>Progress</span>
                      <span>{proj.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-850 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Meta facts */}
                  <div className="space-y-2 text-xs border-t border-zinc-100 dark:border-zinc-800 pt-3 text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Location: <strong className="font-semibold text-zinc-800 dark:text-zinc-200">{proj.ward}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Timeline: {proj.startDate} to {proj.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Landmark className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Budget: LKR {(proj.budget / 1000000).toFixed(1)} Million</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2 border-t border-zinc-50 dark:border-zinc-850">
                  <div className="flex justify-between items-center text-[10px] text-zinc-450 mt-4 uppercase tracking-wider font-semibold">
                    <span>Manager: {proj.manager}</span>
                    <span className="text-emerald-650 dark:text-emerald-400">Public Funds</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
              <HardHat className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold">No Projects Found</h3>
              <p className="text-xs text-zinc-500 mt-1">Try resetting the filters or searching for alternative terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

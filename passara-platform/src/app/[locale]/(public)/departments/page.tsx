"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { departments } from "@/data/departments";
import { Search, Phone, Mail, MapPin, Clock, Users, Building2, ChevronRight, Briefcase } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function PublicDepartmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDepts = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.sinhalaName.includes(searchQuery) ||
    dept.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <Building2 className="w-3.5 h-3.5" />
              <span>Municipal Divisions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Departments
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Find contact details, service portfolios, and operational hours of various divisions working tirelessly to develop Passara.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">Departments</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredDepts.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden"
              >
                {/* Accent line based on color index */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-emerald-500" />

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{dept.name}</h2>
                        <span className="text-xs text-primary font-semibold block mt-0.5">{dept.sinhalaName}</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                      {dept.description}
                    </p>

                    {/* Meta info list */}
                    <div className="space-y-2 text-xs border-t border-zinc-100 dark:border-zinc-800 pt-3">
                      <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                        <Users className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>Head: <strong className="font-semibold text-zinc-850 dark:text-zinc-200">{dept.head}</strong> ({dept.headTitle})</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{dept.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                        <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{dept.workingHours}</span>
                      </div>
                    </div>

                    {/* Services section */}
                    <div className="space-y-1.5 border-t border-zinc-100 dark:border-zinc-800 pt-3">
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Key Services</span>
                      <div className="flex flex-wrap gap-1.5">
                        {dept.services.slice(0, 3).map((srv, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-350 px-2 py-0.5 rounded-full"
                          >
                            {srv}
                          </span>
                        ))}
                        {dept.services.length > 3 && (
                          <span className="text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                            +{dept.services.length - 3} More
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-850">
                    <a
                      href={`tel:${dept.phone}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`mailto:${dept.email}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredDepts.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
              <Building2 className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold">No Departments Found</h3>
              <p className="text-xs text-zinc-500 mt-1">Try searching for alternative keywords.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tourismSpots } from "@/data/tourism";
import { Search, Compass, Star, MapPin, Navigation, Clock, Ticket, Calendar, Award } from "lucide-react";
import { Link } from "@/i18n/routing";

const tourismCategories = ["All", "Waterfall", "Scenic", "Nature", "Cultural", "Wildlife"];

export default function TourismPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpots = tourismSpots.filter((spot) => {
    const matchesCategory = activeCategory === "All" || spot.type === activeCategory;
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
              <Compass className="w-3.5 h-3.5" />
              <span>Explore Passara</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Tourism & Travel Information
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Discover majestic waterfalls, heritage temples, verdant Ceylon tea gardens, and rich wilderness hotspots hidden in our beautiful hills.
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
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">Tourism Spots</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          {tourismCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#1a5276] text-white shadow-md"
                    : "bg-white dark:bg-zinc-900 text-zinc-650 dark:text-zinc-400 hover:bg-zinc-150 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Spots Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="h-52 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {spot.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 text-amber-500 text-xs font-bold px-2 py-1 rounded-xl shadow-sm flex items-center gap-1 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{spot.rating}</span>
                    <span className="text-[10px] text-zinc-400">({spot.reviews})</span>
                  </div>
                  <Compass className="w-14 h-14 text-zinc-300 dark:text-zinc-700" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-primary transition-colors">
                        {spot.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{spot.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {spot.shortDescription}
                    </p>

                    {/* Highlights tag list */}
                    <div className="flex flex-wrap gap-1">
                      {spot.highlights.slice(0, 3).map((hl, hlIdx) => (
                        <span key={hlIdx} className="text-[9px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded-full">
                          {hl}
                        </span>
                      ))}
                    </div>

                    {/* Fact points */}
                    <div className="space-y-2 text-xs border-t border-zinc-100 dark:border-zinc-800 pt-3 text-zinc-650 dark:text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Navigation className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{spot.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Fee: {spot.entryFee}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>Hours: {spot.openingHours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                        <span>Best visit: {spot.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredSpots.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
              <Compass className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold">No Destinations Found</h3>
              <p className="text-xs text-zinc-500 mt-1">Try searching for other terms or resetting the filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

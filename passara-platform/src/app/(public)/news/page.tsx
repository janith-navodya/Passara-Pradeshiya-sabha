"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { newsArticles } from "@/data/news";
import { Search, Calendar, User, Tag, ArrowRight, Newspaper, Landmark, Award } from "lucide-react";
import Link from "next/link";

const newsCategories = ["All", "Environment", "Infrastructure", "Achievement", "Community", "Tourism"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredNews.filter(a => a.featured);
  const regularArticles = filteredNews.filter(a => !a.featured || activeCategory !== "All");

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
              <Newspaper className="w-3.5 h-3.5" />
              <span>Sabha Media Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              News & Announcements
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Follow real-time construction updates, environment conservation successes, and prestigious accolades awarded to the Passara Pradeshiya Sabha.
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
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">News & Events</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          {newsCategories.map((cat) => {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured News Section */}
        {activeCategory === "All" && featuredArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold tracking-tight mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500 animate-pulse" />
              <span>Featured Stories</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div className="h-60 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 flex items-center justify-center relative">
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      {article.category}
                    </div>
                    <Newspaper className="w-16 h-16 text-zinc-300 dark:text-zinc-700" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex gap-4 text-xs text-zinc-500">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.publishedDate}</span>
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{article.author}</span>
                      </div>
                      <h3 className="text-xl font-bold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="flex gap-1.5">
                        {article.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-semibold bg-zinc-150 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all">
                        <span>Read Full</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Regular News Section */}
        <section>
          <h2 className="text-xl font-bold tracking-tight mb-6 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-[#1a5276]" />
            <span>Latest Updates & Press Releases</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div className="h-44 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative">
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {article.category}
                    </div>
                    <Newspaper className="w-12 h-12 text-zinc-300 dark:text-zinc-650" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex gap-3 text-[10px] text-zinc-500 font-semibold">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.publishedDate}</span>
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{article.author}</span>
                      </div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-[#1a5276] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-zinc-500 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="flex gap-1">
                        {article.tags.slice(0, 2).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[9px] font-semibold bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:gap-1.5 transition-all">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredNews.length === 0 && (
              <div className="col-span-full text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
                <Newspaper className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold">No News Articles Found</h3>
                <p className="text-xs text-zinc-500 mt-1">Try resetting the filter or searching for another keyword.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

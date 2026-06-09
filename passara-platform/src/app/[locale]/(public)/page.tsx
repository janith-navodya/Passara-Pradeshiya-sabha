"use client";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  FileText, Search, Download, Phone, ArrowRight, Bell, CheckCircle,
  AlertTriangle, Construction, Droplets, Zap, Trash2, HeartPulse,
  TrendingUp, Users, Map, Star, ChevronRight, Calendar, Megaphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { newsArticles } from "@/data/news";
import { notices } from "@/data/notices";
import { projects } from "@/data/projects";
import { tourismSpots } from "@/data/tourism";
import { dashboardStats } from "@/data/statistics";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  const tIndex = useTranslations("Index");
  const tServices = useTranslations("Services");
  const tStats = useTranslations("Stats");
  const tCats = useTranslations("Categories");

  const quickServices = [
    { label: tServices("birth_death"), icon: FileText, color: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20" },
    { label: tServices("building"), icon: Construction, color: "bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-md shadow-orange-500/20" },
    { label: tServices("tax"), icon: TrendingUp, color: "bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-md shadow-emerald-500/20" },
    { label: tServices("public"), icon: Users, color: "bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white shadow-md shadow-purple-500/20" },
    { label: tServices("certificates"), icon: FileText, color: "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/20" },
    { label: tServices("hall"), icon: Calendar, color: "bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow-md shadow-pink-500/20" },
    { label: tServices("water"), icon: Droplets, color: "bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-md shadow-cyan-500/20" },
    { label: tServices("report"), icon: AlertTriangle, color: "bg-gradient-to-br from-red-500 to-rose-700 text-white shadow-md shadow-red-500/20" },
  ];

  const stats = [
    { label: tStats("citizens_served"), value: "52,400+", icon: Users, color: "text-blue-600" },
    { label: tStats("complaints_resolved"), value: "987", icon: CheckCircle, color: "text-green-600" },
    { label: tStats("active_projects"), value: "12", icon: Construction, color: "text-orange-600" },
    { label: tStats("public_notices"), value: "42", icon: Bell, color: "text-purple-600" },
  ];

  const complaintCategories = [
    { label: tCats("roads"), icon: Map, href: "/complaints?category=Roads" },
    { label: tCats("garbage"), icon: Trash2, href: "/complaints?category=Garbage" },
    { label: tCats("drainage"), icon: Droplets, href: "/complaints?category=Drainage" },
    { label: tCats("water_supply"), icon: Droplets, href: "/complaints?category=Water+Supply" },
    { label: tCats("public_health"), icon: HeartPulse, href: "/complaints?category=Public+Health" },
    { label: tCats("street_lights"), icon: Zap, href: "/complaints?category=Street+Lights" },
  ];

  return (
    <div>
      {/* Emergency Banner */}
      <div className="bg-amber-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Megaphone className="w-4 h-4 shrink-0" />
          <p className="flex-1"><strong>Notice:</strong> {tIndex("emergency_notice").replace("Notice: ", "").replace("නිවේදනයයි: ", "").replace("அறிவிப்பு: ", "")}</p>
          <Link href="/notices" className="underline shrink-0 hover:no-underline">{tIndex("view_details")}</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-overlay z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2137] via-[#1a5276] to-[#1e8449]" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4 backdrop-blur-sm">
                🇱🇰 Smart Digital Governance 2024
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {tIndex("title").split("Passara")[0] || "Welcome to"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                  Passara
                </span>
                <br />
                <span className="text-3xl lg:text-4xl font-semibold text-white/90">
                  {tIndex("title").split("Passara")[1] || "Pradeshiya Sabha"}
                </span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                {tIndex("description")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/complaints">
                  <Button size="lg" className="bg-[#1e8449] hover:bg-[#1a7040] text-white rounded-full px-6 shadow-xl shadow-green-900/40 gap-2">
                    <FileText className="w-4 h-4" /> {tIndex("submit_complaint_title")}
                  </Button>
                </Link>
                <Link href="/citizen/complaints">
                  <Button size="lg" className="bg-transparent border border-white/40 text-white hover:bg-white/10 rounded-full px-6 gap-2 backdrop-blur-sm">
                    <Search className="w-4 h-4" /> {tIndex("hero_card_track")}
                  </Button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { n: "52K+", l: tIndex("citizens_short") },
                  { n: "987", l: tIndex("resolved_short") },
                  { n: "12", l: tIndex("projects_short") },
                ].map((s) => (
                  <div key={s.l} className="text-center backdrop-blur-sm bg-white/10 rounded-2xl py-3 px-2 border border-white/20">
                    <div className="text-2xl font-bold text-white">{s.n}</div>
                    <div className="text-xs text-white/70">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FileText, label: tIndex("hero_card_complaint"), sub: tIndex("hero_card_complaint_sub"), href: "/complaints", color: "from-blue-500 to-blue-700" },
                  { icon: Search, label: tIndex("hero_card_track"), sub: tIndex("hero_card_track_sub"), href: "/citizen/complaints", color: "from-green-500 to-green-700" },
                  { icon: Download, label: tIndex("hero_card_downloads"), sub: tIndex("hero_card_downloads_sub"), href: "/downloads", color: "from-orange-500 to-orange-700" },
                  { icon: Phone, label: tIndex("hero_card_contact"), sub: tIndex("hero_card_contact_sub"), href: "/contact", color: "from-purple-500 to-purple-700" },
                ].map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <Link href={card.href}>
                      <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 cursor-pointer group hover:bg-black/50 transition-all shadow-xl">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 shadow-lg`}>
                          <card.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-white font-semibold text-sm">{card.label}</div>
                        <div className="text-white/80 text-xs mt-0.5">{card.sub}</div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path fill="currentColor" className="text-background" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-3">{tServices("title")}</Badge>
            <h2 className="text-3xl font-bold text-foreground">{tServices("title")}</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">{tServices("subtitle")}</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {quickServices.map((service, i) => (
              <motion.div key={service.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ scale: 1.05 }}>
                <Link href="/services">
                  <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group">
                    <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-foreground leading-tight">{service.label}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/services"><Button variant="outline" className="rounded-full gap-2">{tIndex("view_all_services")} <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gov-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-center bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complaint Categories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 mb-3">{tIndex("report_issues")}</Badge>
            <h2 className="text-3xl font-bold text-foreground">{tIndex("submit_complaint_title")}</h2>
            <p className="text-muted-foreground mt-2">{tIndex("submit_complaint_desc")}</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {complaintCategories.map((cat, i) => (
              <motion.div key={cat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
                <Link href={cat.href}>
                  <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-card border-2 border-border hover:border-red-300 dark:hover:border-red-700 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{cat.label}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/complaints"><Button className="rounded-full bg-[#1a5276] hover:bg-[#154360] text-white gap-2">{tIndex("submit_new_complaint")} <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* News + Notices + Chairman Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">{tIndex("latest_news")}</h2>
                <Link href="/news"><Button variant="ghost" size="sm" className="gap-1 text-primary">{tIndex("view_all")} <ChevronRight className="w-4 h-4" /></Button></Link>
              </div>
              <div className="space-y-4">
                {newsArticles.slice(0, 4).map((article, i) => (
                  <motion.div key={article.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="hover:shadow-md transition-all group cursor-pointer border-border">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 flex items-center justify-center shrink-0">
                            <Bell className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Badge variant="secondary" className="text-xs mb-1">{article.category}</Badge>
                            <h3 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {new Date(article.publishedDate).toLocaleDateString("en-LK", { year: "numeric", month: "short", day: "numeric" })}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Notices + Chairman */}
            <div className="space-y-6">
              {/* Chairman's Message */}
              <motion.div {...fadeUp}>
                <Card className="overflow-hidden border-border">
                  <div className="h-2 gov-gradient" />
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1a5276] to-[#1e8449] flex items-center justify-center text-white text-lg font-bold shadow">NR</div>
                      <div>
                        <div className="font-bold text-sm text-foreground">Nihal Rajapaksha</div>
                        <div className="text-xs text-muted-foreground">{tIndex("chairman_title")}</div>
                        <div className="flex text-yellow-400 mt-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                      {tIndex("chairman_quote")}
                    </p>
                    <Link href="/about#chairman"><Button variant="ghost" size="sm" className="mt-3 text-xs gap-1 pl-0">{tIndex("read_full_message")} <ChevronRight className="w-3 h-3" /></Button></Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Public Notices */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">{tIndex("public_notices")}</h3>
                  <Link href="/notices"><Button variant="ghost" size="sm" className="text-xs gap-1 text-primary">{tIndex("all")} <ChevronRight className="w-3 h-3" /></Button></Link>
                </div>
                <div className="space-y-2">
                  {notices.slice(0, 4).map((notice) => (
                    <div key={notice.id} className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/50 border border-border hover:bg-muted transition-colors cursor-pointer group">
                      <div className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${notice.isUrgent ? "bg-red-500" : "bg-blue-500"}`} />
                      <div>
                        <p className="text-xs font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">{notice.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{new Date(notice.publishedDate).toLocaleDateString("en-LK", { month: "short", day: "numeric" })}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Projects */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp} className="flex items-end justify-between mb-10">
            <div>
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 mb-2">{tIndex("infrastructure")}</Badge>
              <h2 className="text-3xl font-bold text-foreground">{tIndex("development_projects")}</h2>
              <p className="text-muted-foreground mt-1">{tIndex("development_desc")}</p>
            </div>
            <Link href="/projects" className="hidden md:block"><Button variant="outline" className="gap-2 rounded-full">{tIndex("view_all")} <ArrowRight className="w-4 h-4" /></Button></Link>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
                <Card className="overflow-hidden border-border hover:shadow-lg transition-all group">
                  <div className={`h-1.5 ${project.status === "Completed" ? "bg-green-500" : project.status === "In Progress" ? "bg-blue-500" : "bg-orange-400"}`} />
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"} className={`text-xs ${project.status === "Completed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : project.status === "In Progress" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-orange-100 text-orange-700"}`}>
                        {project.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.category}</span>
                    </div>
                    <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{tIndex("progress")}</span>
                        <span className="font-semibold text-foreground">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className={`h-full rounded-full ${project.status === "Completed" ? "bg-green-500" : "bg-blue-500"}`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                      <span>{tIndex("budget")}: LKR {(project.budget / 1000000).toFixed(0)}M</span>
                      <span>{project.beneficiaries.toLocaleString()} {tIndex("beneficiaries")}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Highlights */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 mb-3">{tIndex("explore_passara")}</Badge>
            <h2 className="text-3xl font-bold text-foreground">{tIndex("tourism_highlights")}</h2>
            <p className="text-muted-foreground mt-2">{tIndex("tourism_desc")}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourismSpots.slice(0, 3).map((spot, i) => (
              <motion.div key={spot.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}>
                <Card className="overflow-hidden border-border hover:shadow-xl transition-all cursor-pointer group">
                  <div className="h-44 bg-gradient-to-br from-green-400 to-blue-600 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="relative text-white text-center p-4">
                      <div className="text-5xl mb-2">🏞️</div>
                      <Badge className="bg-white/30 text-white border-white/30">{spot.type}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{spot.name}</h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-semibold">{spot.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{spot.shortDescription}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">📍 {spot.distance}</span>
                      <span className="text-green-600 font-medium">{spot.entryFee === "Free" ? "Free Entry" : spot.entryFee.split("(")[0]}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/tourism"><Button variant="outline" className="rounded-full gap-2">{tIndex("explore_all_attractions")} <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gov-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold text-white mb-4">{tIndex("ready_to_connect")}</h2>
            <p className="text-white/80 mb-8 text-lg">{tIndex("cta_desc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/complaints"><Button size="lg" className="bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 rounded-full px-8 shadow-xl gap-2 font-semibold"><FileText className="w-4 h-4" /> {tIndex("hero_card_complaint")}</Button></Link>
              <Link href="/citizen"><Button size="lg" className="bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 rounded-full px-8 gap-2"><Users className="w-4 h-4" /> {tIndex("citizen_portal")}</Button></Link>
              <Link href="/contact"><Button size="lg" className="bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 rounded-full px-8 gap-2"><Phone className="w-4 h-4" /> {tIndex("hero_card_contact")}</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

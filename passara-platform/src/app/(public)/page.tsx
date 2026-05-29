"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText, Search, Download, Phone, ArrowRight, Bell, CheckCircle,
  AlertTriangle, Construction, Droplets, Zap, Trash2, HeartPulse,
  TrendingUp, Users, Map, Star, ChevronRight, Calendar, Megaphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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

const quickServices = [
  { label: "Birth, Death & Marriage", icon: FileText, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { label: "Building Approvals", icon: Construction, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  { label: "Tax & Fee Payments", icon: TrendingUp, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  { label: "Public Services", icon: Users, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  { label: "Certificates & Docs", icon: FileText, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
  { label: "Hall Booking", icon: Calendar, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
  { label: "Water Supply", icon: Droplets, color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400" },
  { label: "Report an Issue", icon: AlertTriangle, color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
];

const stats = [
  { label: "Citizens Served", value: "52,400+", icon: Users, color: "text-blue-600" },
  { label: "Complaints Resolved", value: "987", icon: CheckCircle, color: "text-green-600" },
  { label: "Active Projects", value: "12", icon: Construction, color: "text-orange-600" },
  { label: "Public Notices", value: "42", icon: Bell, color: "text-purple-600" },
];

const complaintCategories = [
  { label: "Roads", icon: Map, href: "/complaints?category=Roads" },
  { label: "Garbage", icon: Trash2, href: "/complaints?category=Garbage" },
  { label: "Drainage", icon: Droplets, href: "/complaints?category=Drainage" },
  { label: "Water Supply", icon: Droplets, href: "/complaints?category=Water+Supply" },
  { label: "Public Health", icon: HeartPulse, href: "/complaints?category=Public+Health" },
  { label: "Street Lights", icon: Zap, href: "/complaints?category=Street+Lights" },
];

export default function HomePage() {
  return (
    <div>
      {/* Emergency Banner */}
      <div className="bg-amber-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Megaphone className="w-4 h-4 shrink-0" />
          <p className="flex-1"><strong>Notice:</strong> Water supply interruption in Passara Town area on 25th–26th May. Please store adequate water.</p>
          <Link href="/notices" className="underline shrink-0 hover:no-underline">View Details</Link>
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
                Welcome to<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                  Passara
                </span>
                <br />
                <span className="text-3xl lg:text-4xl font-semibold text-white/90">Pradeshiya Sabha</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                Serving the people of Passara Division with modern digital services, 
                transparent governance, and a commitment to sustainable community development.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/complaints">
                  <Button size="lg" className="bg-[#1e8449] hover:bg-[#1a7040] text-white rounded-full px-6 shadow-xl shadow-green-900/40 gap-2">
                    <FileText className="w-4 h-4" /> Submit a Complaint
                  </Button>
                </Link>
                <Link href="/citizen/complaints">
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-6 gap-2 backdrop-blur-sm">
                    <Search className="w-4 h-4" /> Track Complaint
                  </Button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { n: "52K+", l: "Citizens" },
                  { n: "987", l: "Resolved" },
                  { n: "12", l: "Projects" },
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
                  { icon: FileText, label: "Submit Complaint", sub: "Report issues online", href: "/complaints", color: "from-blue-500 to-blue-700" },
                  { icon: Search, label: "Track Status", sub: "Check your complaint", href: "/citizen/complaints", color: "from-green-500 to-green-700" },
                  { icon: Download, label: "Downloads", sub: "Get forms & docs", href: "/downloads", color: "from-orange-500 to-orange-700" },
                  { icon: Phone, label: "Contact Us", sub: "Get in touch", href: "/contact", color: "from-purple-500 to-purple-700" },
                ].map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <Link href={card.href}>
                      <div className="glass-card rounded-2xl p-5 cursor-pointer group border border-white/30">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 shadow-lg`}>
                          <card.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-white font-semibold text-sm">{card.label}</div>
                        <div className="text-white/60 text-xs mt-0.5">{card.sub}</div>
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
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-3">Our Services</Badge>
            <h2 className="text-3xl font-bold text-foreground">What We Offer</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Access all Pradeshiya Sabha services online quickly and conveniently</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
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
            <Link href="/services"><Button variant="outline" className="rounded-full gap-2">View All Services <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gov-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-center glass-card rounded-2xl p-6 border border-white/20">
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
            <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 mb-3">Report Issues</Badge>
            <h2 className="text-3xl font-bold text-foreground">Submit a Complaint</h2>
            <p className="text-muted-foreground mt-2">Select a category to report an issue in your area</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complaintCategories.map((cat, i) => (
              <motion.div key={cat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
                <Link href={cat.href}>
                  <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-card border-2 border-border hover:border-red-300 dark:hover:border-red-700 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{cat.label}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/complaints"><Button className="rounded-full bg-[#1a5276] hover:bg-[#154360] text-white gap-2">Submit New Complaint <ArrowRight className="w-4 h-4" /></Button></Link>
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
                <h2 className="text-2xl font-bold text-foreground">Latest News</h2>
                <Link href="/news"><Button variant="ghost" size="sm" className="gap-1 text-primary">View All <ChevronRight className="w-4 h-4" /></Button></Link>
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
                        <div className="text-xs text-muted-foreground">Chairman, Passara PS</div>
                        <div className="flex text-yellow-400 mt-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                      "Our vision is a digitally empowered, environmentally sustainable and economically vibrant Passara. We remain committed to transparent governance and serving every citizen with dignity."
                    </p>
                    <Link href="/about#chairman"><Button variant="ghost" size="sm" className="mt-3 text-xs gap-1 pl-0">Read Full Message <ChevronRight className="w-3 h-3" /></Button></Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Public Notices */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Public Notices</h3>
                  <Link href="/notices"><Button variant="ghost" size="sm" className="text-xs gap-1 text-primary">All <ChevronRight className="w-3 h-3" /></Button></Link>
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
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 mb-2">Infrastructure</Badge>
              <h2 className="text-3xl font-bold text-foreground">Development Projects</h2>
              <p className="text-muted-foreground mt-1">Ongoing and completed infrastructure projects in your area</p>
            </div>
            <Link href="/projects" className="hidden md:block"><Button variant="outline" className="gap-2 rounded-full">View All <ArrowRight className="w-4 h-4" /></Button></Link>
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
                        <span className="text-muted-foreground">Progress</span>
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
                      <span>Budget: LKR {(project.budget / 1000000).toFixed(0)}M</span>
                      <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
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
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 mb-3">Explore Passara</Badge>
            <h2 className="text-3xl font-bold text-foreground">Tourism Highlights</h2>
            <p className="text-muted-foreground mt-2">Discover the natural beauty and cultural heritage of Passara</p>
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
            <Link href="/tourism"><Button variant="outline" className="rounded-full gap-2">Explore All Attractions <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gov-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Connect with Your Local Government?</h2>
            <p className="text-white/80 mb-8 text-lg">Submit complaints, track projects, access services — all in one place.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/complaints"><Button size="lg" className="bg-white text-[#1a5276] hover:bg-gray-100 rounded-full px-8 shadow-xl gap-2 font-semibold"><FileText className="w-4 h-4" /> Submit Complaint</Button></Link>
              <Link href="/citizen"><Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 gap-2"><Users className="w-4 h-4" /> Citizen Portal</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 gap-2"><Phone className="w-4 h-4" /> Contact Us</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

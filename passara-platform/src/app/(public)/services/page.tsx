"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, Clock, DollarSign, ArrowRight, ShieldCheck, HelpCircle, HeartPulse, HardHat, FileText, Droplets, Landmark } from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  { id: "all", name: "All Services", icon: Landmark },
  { id: "technical", name: "Building & Technical", icon: HardHat },
  { id: "health", name: "Public Health", icon: HeartPulse },
  { id: "finance", name: "Finance & Taxes", icon: FileText },
  { id: "water", name: "Water Supply", icon: Droplets },
];

const services = [
  {
    id: "s1",
    title: "Building Plan Approval",
    category: "technical",
    division: "Technical Division",
    duration: "14 Working Days",
    fee: "LKR 2,500 + Tax",
    description: "Submit and acquire approval for residential or commercial building plans within Passara Pradeshiya Sabha limits.",
    requirements: ["Duly filled application form", "3 copies of building plan certified by draftsman", "Copy of land deed & survey plan", "Clearance certificates"],
    downloadLink: "/downloads/building-plan-app.pdf"
  },
  {
    id: "s2",
    title: "Street Line & Boundary Certificates",
    category: "technical",
    division: "Technical Division",
    duration: "7 Working Days",
    fee: "LKR 1,200",
    description: "Get certificates defining street lines and boundary margins before commencing construction or land partitioning.",
    requirements: ["Application form", "Copy of survey plan", "Copy of deed", "Assessment tax receipt"],
    downloadLink: "/downloads/street-line-app.pdf"
  },
  {
    id: "s3",
    title: "New Water Connection Request",
    category: "water",
    division: "Water Supply Division",
    duration: "10 Working Days",
    fee: "LKR 15,000 (Approx)",
    description: "Apply for a new household or commercial piped water connection from the Sabha's water supply network.",
    requirements: ["Connection request form", "Copy of deed", "Proof of address", "Water supply feasibility clearance"],
    downloadLink: "/downloads/water-conn-app.pdf"
  },
  {
    id: "s4",
    title: "Trade License Registration",
    category: "finance",
    division: "Revenue Division",
    duration: "5 Working Days",
    fee: "Varies based on business",
    description: "Acquire a valid trade license or business registration certificate for operating any commercial venture inside Sabha limits.",
    requirements: ["Business registration application", "MOH health report (for food businesses)", "Land ownership proof or lease agreement"],
    downloadLink: "/downloads/trade-license-app.pdf"
  },
  {
    id: "s5",
    title: "Public Hall & Playground Booking",
    category: "technical",
    division: "Technical / Admin Division",
    duration: "2 Working Days",
    fee: "Varies (See Hall Booking)",
    description: "Book municipal halls, auditoriums, or public parks for weddings, private gatherings, exhibitions, or sports tournaments.",
    requirements: ["Hall booking request form", "NIC of the applicant", "Refundable security deposit"],
    downloadLink: "/downloads/hall-booking-app.pdf",
    onlineLink: "/hall-reservation"
  },
  {
    id: "s6",
    title: "Environmental Protection License (EPL)",
    category: "health",
    division: "Environmental Division",
    duration: "21 Working Days",
    fee: "LKR 5,000",
    description: "Acquire environmental protection licenses for small-scale businesses, factories, or animal husbandry ventures.",
    requirements: ["Duly filled EPL application", "Business plan outline", "Waste disposal plan", "MOH clearance"],
    downloadLink: "/downloads/epl-app.pdf"
  },
  {
    id: "s7",
    title: "Property & Assessment Tax Payment",
    category: "finance",
    division: "Revenue Division",
    duration: "Immediate",
    fee: "Free",
    description: "Pay or assess yearly/quarterly properties tax. Avoid penalties and check current outstanding taxes.",
    requirements: ["Previous tax assessment bill", "Assessment number"],
    downloadLink: "/downloads/tax-payment-app.pdf"
  },
  {
    id: "s8",
    title: "Clinical & Health Approvals",
    category: "health",
    division: "Public Health Division",
    duration: "5 Working Days",
    fee: "LKR 1,000",
    description: "Health clearances for hotels, restaurants, bakeries, grocery stores, and meat stalls to guarantee hygiene standards.",
    requirements: ["Application", "Sanitary inspection report from PHI", "Medical certificates for employees"],
    downloadLink: "/downloads/health-clear-app.pdf"
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const filteredServices = services.filter((srv) => {
    const matchesTab = activeTab === "all" || srv.category === activeTab;
    const matchesSearch = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.division.toLowerCase().includes(searchQuery.toLowerCase());
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Smart E-Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Public Services Center
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Access applications, licensing forms, and connection requests. Process municipal services quickly online or in-person.
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
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">Services</span>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search services..."
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
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#1a5276] text-white shadow-md shadow-blue-500/10"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-150 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((srv, index) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {srv.division}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{srv.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{srv.description}</p>

                  <div className="flex gap-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                    <div className="flex items-center gap-1.5 text-zinc-500">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span>{srv.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-500">
                      <DollarSign className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{srv.fee}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6 pt-3 border-t border-zinc-150 dark:border-zinc-850">
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold transition-colors"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                  <a
                    href={srv.downloadLink}
                    download
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors shrink-0"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  {srv.onlineLink && (
                    <Link
                      href={srv.onlineLink}
                      className="inline-flex items-center justify-center px-4 rounded-xl bg-[#1e8449] hover:bg-emerald-700 text-white text-xs font-semibold transition-colors gap-1"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
              <HelpCircle className="w-12 h-12 text-zinc-355 mx-auto mb-4" />
              <h3 className="text-lg font-bold">No Services Found</h3>
              <p className="text-xs text-zinc-500 mt-1">Try another category or search term.</p>
            </div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden border border-zinc-250 dark:border-zinc-800 z-10"
            >
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full uppercase">
                      {selectedService.division}
                    </span>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-zinc-400 hover:text-zinc-700 text-sm font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mt-2 text-zinc-900 dark:text-zinc-100">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl border border-zinc-150 dark:border-zinc-850">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-semibold">Processing Duration</span>
                    <div className="flex items-center gap-1.5 mt-1 font-semibold text-zinc-800 dark:text-zinc-200">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{selectedService.duration}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-semibold">Service Fee</span>
                    <div className="flex items-center gap-1.5 mt-1 font-semibold text-zinc-800 dark:text-zinc-200">
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">{selectedService.fee}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-zinc-450 uppercase tracking-wider block">Requirements & Attachments</span>
                  <ul className="space-y-2">
                    {selectedService.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                        <span className="text-primary font-bold shrink-0">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-zinc-150 dark:border-zinc-800">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Close Dialog
                  </button>
                  <a
                    href={selectedService.downloadLink}
                    download
                    onClick={() => setSelectedService(null)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-750 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Application</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

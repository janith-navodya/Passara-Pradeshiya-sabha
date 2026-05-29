"use client";
import { motion } from "framer-motion";
import { Shield, Target, Eye, Users, Landmark, History, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const councilMembers = [
  { name: "Hon. Lalith Bandara Ekanayake", role: "Chairman / Mayor", ward: "Ward 1 - Passara Town", status: "Active" },
  { name: "Hon. K. M. Abdul Rahman", role: "Vice Chairman", ward: "Ward 4 - Raththala", status: "Active" },
  { name: "Hon. Sandya Gunasekara", role: "Council Member", ward: "Ward 3 - Gonabokka", status: "Active" },
  { name: "Hon. Suresh Perera", role: "Council Member", ward: "Ward 8 - Passara South", status: "Active" },
  { name: "Hon. Niluka Jayawardana", role: "Council Member", ward: "Ward 12 - Medawela", status: "Active" },
  { name: "Hon. Ranjith Dissanayake", role: "Council Member", ward: "Ward 15 - Hopton", status: "Active" },
];

export default function AboutPage() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a5276] via-[#154360] to-[#1e8449] py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-sm border border-white/10">
              <Landmark className="w-3.5 h-3.5" />
              <span>Know Our Roots</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About Passara Pradeshiya Sabha
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl">
              Serving the citizens of Passara with transparency, dedication, and technological innovation to build a smarter community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">About Us</span>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              To become the most efficient local government body in Sri Lanka by providing state-of-the-art infrastructure, sustainable environment practices, and digital governance to uplift the socio-economic status of Passara's community.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              To deploy innovative and sustainable systems in waste management, physical planning, utilities, and emergency response, while fostering public participation through transparent digital channels for continuous local development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History and Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                <History className="w-3.5 h-3.5" />
                <span>Our Heritage</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Our Historical Background</h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Passara, located in the Badulla District of Uva Province, is a region blessed with beautiful mountains, tea plantations, and waterfalls. Established as a local governing body, the Passara Pradeshiya Sabha oversees public infrastructure, health, and wellness for over 50,000 residents across 18 administrative wards.
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Over the years, we have transitioned from traditional governance to a progressive local council that prioritizes sustainability, public well-being, and modern electronic services. We take pride in our rich tea-growing history and strive to support our agricultural community while upgrading town centers with modern amenities.
              </p>
            </div>
            <div className="flex flex-col gap-4 bg-zinc-50 dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-150 dark:border-zinc-850">
              <div className="text-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="text-4xl font-extrabold text-[#1a5276] dark:text-blue-400">18</div>
                <div className="text-sm font-medium text-zinc-500">Wards Supervised</div>
              </div>
              <div className="text-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="text-4xl font-extrabold text-[#1e8449] dark:text-emerald-400">52K+</div>
                <div className="text-sm font-medium text-zinc-500">Local Citizens</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-[#f39c12] dark:text-amber-400">100%</div>
                <div className="text-sm font-medium text-zinc-500">Digital Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-zinc-900 dark:to-zinc-900 border border-blue-100 dark:border-zinc-800 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 flex-shrink-0 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
              LB
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                <Trophy className="w-3.5 h-3.5" />
                <span>Chairman's Address</span>
              </div>
              <h2 className="text-3xl font-bold">"Stepping into the Future"</h2>
              <blockquote className="text-lg italic text-zinc-700 dark:text-zinc-300">
                "Welcome to the smart digital governance portal of Passara. Our goal is to break the distance between citizens and municipal operations. Through this platform, you can submit public complaints, apply for hall bookings, access public notices, and witness our budget spending in real-time. We are committed to transparency and growth."
              </blockquote>
              <div>
                <div className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Hon. Lalith Bandara Ekanayake</div>
                <div className="text-sm text-zinc-500">Chairman, Passara Pradeshiya Sabha</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council Members */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Governing Body</span>
          </div>
          <h2 className="text-3xl font-bold">Sabha Council Members</h2>
          <p className="text-zinc-500 mt-2 text-sm">
            Meet our dedicated local leaders who represent the wards of Passara and work towards municipal development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {councilMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {member.name.split(" ").pop()?.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-0.5 rounded-full">
                  {member.status}
                </span>
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{member.name}</h3>
              <div className="text-sm text-primary font-medium mt-1">{member.role}</div>
              <div className="text-xs text-zinc-500 mt-2 border-t border-zinc-100 dark:border-zinc-800 pt-2">
                Representing: {member.ward}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

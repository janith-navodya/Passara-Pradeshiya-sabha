"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Search, Send, Landmark, HelpCircle, CheckCircle } from "lucide-react";
import { Link } from "@/i18n/routing";

const contactDeptDetails = [
  { division: "Administration", person: "Mr. Lalith Bandara Ekanayake", role: "Secretary", phone: "055-222-2201", email: "admin@passara.ps.gov.lk" },
  { division: "Finance & Tax", person: "Ms. Chamari Dissanayake", role: "Chief Accountant", phone: "055-222-2202", email: "finance@passara.ps.gov.lk" },
  { division: "Technical & Road Approvals", person: "Eng. Ranjith Dissanayake", role: "Chief Engineer", phone: "055-222-2203", email: "technical@passara.ps.gov.lk" },
  { division: "Public Health / Sanitization", person: "Dr. Pradeep Weerasinghe", role: "MOH Officer", phone: "055-222-2204", email: "health@passara.ps.gov.lk" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
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
              <Landmark className="w-3.5 h-3.5" />
              <span>Connect With Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contact Sabha Headquarters
            </h1>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto">
              Get in touch with our divisional representatives, send feedback, submit formal inquiries, or plan your visit to our headquarters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">Contact Us</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold">Office Information</h2>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-800 dark:text-zinc-200">Headquarters Address</h3>
                    <p className="text-zinc-550 dark:text-zinc-400 mt-1">
                      Main Street, Passara,<br />Badulla District, Sri Lanka.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-800 dark:text-zinc-200">Phone Numbers</h3>
                    <p className="text-zinc-550 dark:text-zinc-400 mt-1">
                      055-222-2201 (General)<br />055-222-2222 (Emergency Line)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-800 dark:text-zinc-200">Email Addresses</h3>
                    <p className="text-zinc-550 dark:text-zinc-400 mt-1">
                      info@passara.ps.gov.lk<br />support@passara.ps.gov.lk
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-800 dark:text-zinc-200">Working Hours</h3>
                    <p className="text-zinc-550 dark:text-zinc-400 mt-1">
                      Mon – Fri: 8:00 AM – 4:00 PM<br />Weekends & Holidays: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Division Contacts */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 shadow-sm">
              <h2 className="text-lg font-bold">Key Officers</h2>
              <div className="space-y-3">
                {contactDeptDetails.map((dept, dIdx) => (
                  <div key={dIdx} className="text-xs pb-3 border-b border-zinc-100 dark:border-zinc-800 last:border-b-0 last:pb-0">
                    <div className="font-bold text-zinc-900 dark:text-zinc-150">{dept.division}</div>
                    <div className="text-zinc-500 mt-0.5">{dept.person} ({dept.role})</div>
                    <div className="flex gap-3 text-primary font-semibold mt-1">
                      <a href={`tel:${dept.phone}`} className="hover:underline">Call</a>
                      <span className="text-zinc-300">|</span>
                      <a href={`mailto:${dept.email}`} className="hover:underline">Email</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Send a Message</h2>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                If you have quick inquiries regarding services, licenses or community problems, please fill this form. A municipal support executive will get back to you shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-900 flex items-center gap-3 text-emerald-700 dark:text-emerald-300 text-sm font-semibold"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Your message has been successfully transmitted! We will reply within 24 hours.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Kumara Perera"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="kumara@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="e.g. Assessment tax query"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Write your detailed inquiry here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-750 transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm h-64 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center">
                <div className="text-center space-y-2 z-10 p-4">
                  <MapPin className="w-10 h-10 text-red-500 mx-auto animate-bounce" />
                  <h3 className="font-bold text-zinc-800 dark:text-zinc-200">Interactive Sabha Location Map</h3>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                    Main Street, Passara. Accessible via the Badulla-Chenkaladi Highway (A5).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

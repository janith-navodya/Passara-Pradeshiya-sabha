"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Landmark, AlertCircle, CalendarDays, Bell, User, ArrowRight, ShieldAlert, CheckCircle2, Star, Clock } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function CitizenDashboardPage() {
  const [complaints] = useState([
    { id: "COM-842901", title: "Main town road deep pot holes near bank", status: "In Progress", date: "2024-05-28", category: "Road Infrastructure" },
    { id: "COM-540192", title: "Water pipe pressure low in Hopton", status: "Resolved", date: "2024-05-15", category: "Water Supply" },
  ]);

  const [reservations] = useState([
    { id: "RES-401290", hall: "Passara Town Hall Auditorium", date: "2024-06-12", status: "Approved", fee: "LKR 25,000" }
  ]);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#1a5276] to-[#1e8449] p-6 md:p-8 rounded-3xl text-white shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-44 h-44 bg-white/5 rounded-full blur-2xl" />
        <div className="space-y-2 relative z-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ayubowan, Kumara!</h1>
          <p className="text-xs text-zinc-100 max-w-md">
            Welcome to your smart citizen digital workspace. Monitor public services, follow complaints and book public reservations.
          </p>
        </div>
        <div className="flex gap-2 relative z-10">
          <Link href="/complaints" className="px-4 py-2 bg-white text-[#1a5276] hover:bg-zinc-50 rounded-xl text-xs font-bold transition-all shadow-sm">
            File Grievance
          </Link>
          <Link href="/hall-reservation" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm">
            Book Venues
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-card p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-primary flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block">Active Complaints</span>
            <div className="text-xl font-extrabold text-foreground mt-0.5">1 Grievance</div>
            <Link href="/citizen/complaints" className="text-[10px] text-primary hover:underline font-semibold block mt-1">Track details</Link>
          </div>
        </div>

        <div className="bg-card p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-650 flex items-center justify-center shrink-0">
            <CalendarDays className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block">Upcoming Bookings</span>
            <div className="text-xl font-extrabold text-foreground mt-0.5">1 Venue Reservation</div>
            <Link href="/citizen/reservations" className="text-[10px] text-[#1e8449] hover:underline font-semibold block mt-1">View booking pass</Link>
          </div>
        </div>

        <div className="bg-card p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-650 flex items-center justify-center shrink-0">
            <Bell className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider block">System Alerts</span>
            <div className="text-xl font-extrabold text-foreground mt-0.5">2 New Notifications</div>
            <Link href="/citizen/notifications" className="text-[10px] text-purple-650 hover:underline font-semibold block mt-1">Mark all as read</Link>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: complaints list */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-base font-bold tracking-tight flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-primary" />
            <span>My Active Grievances</span>
          </h2>

          <div className="space-y-3">
            {complaints.map((c) => (
              <div key={c.id} className="bg-card p-5 rounded-2xl border border-border flex justify-between items-center shadow-sm">
                <div className="space-y-1.5 max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{c.id}</span>
                    <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      c.status === "Resolved" ? "bg-emerald-500/10 text-[#1e8449]" : "bg-blue-500/10 text-blue-500"
                    }`}>{c.status}</span>
                  </div>
                  <h4 className="text-xs font-bold text-foreground leading-snug">{c.title}</h4>
                  <p className="text-[10px] text-muted-foreground">Category: {c.category} | Filed on: {c.date}</p>
                </div>
                <Link href="/citizen/complaints" className="p-2 rounded-xl bg-muted/60 hover:bg-muted text-muted-foreground transition-all">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right: active reservations */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-base font-bold tracking-tight flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-emerald-600" />
            <span>My Hall Reservations</span>
          </h2>

          <div className="space-y-3">
            {reservations.map((r) => (
              <div key={r.id} className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-bold bg-[#1e8449]/10 text-[#1e8449] px-2 py-0.5 rounded-full">{r.status}</span>
                  <span className="text-[10px] font-semibold text-muted-foreground">{r.id}</span>
                </div>
                <h4 className="text-xs font-bold leading-snug">{r.hall}</h4>
                <div className="text-[10px] text-muted-foreground space-y-1">
                  <div>Date: <strong className="font-semibold text-foreground">{r.date}</strong></div>
                  <div>Rental: <strong className="font-semibold text-[#1e8449]">{r.fee}</strong></div>
                </div>
                <Link href="/citizen/reservations" className="block text-center text-[10px] font-bold py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-all">
                  Download Booking Pass
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

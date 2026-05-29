"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Landmark, Download, CheckCircle, Clock, MapPin, Users, Ticket } from "lucide-react";

export default function CitizenReservationsPage() {
  const [activeRes, setActiveRes] = useState([
    {
      id: "RES-401290",
      hallName: "Passara Town Hall Auditorium",
      date: "2024-06-12",
      purpose: "Wedding Banquet reception",
      duration: "1 Day",
      fee: "LKR 25,000",
      status: "Approved",
      amenities: ["Air Conditioned", "Premium Audio Setup"],
      attendees: 350
    }
  ]);

  const [pastRes] = useState([
    {
      id: "RES-281090",
      hallName: "Passara South Community Center Hall",
      date: "2023-11-20",
      purpose: "Cooperative General Meet",
      duration: "1 Day",
      fee: "LKR 10,000",
      status: "Completed",
      attendees: 150
    }
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Rental Reservations</h1>
        <p className="text-xs text-muted-foreground">Manage and download entry passes/receipts for your public hall and auditorium reservations.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Active Reservations */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold flex items-center gap-2">
            <Ticket className="w-5 h-5 text-emerald-600" />
            <span>Active Reservations</span>
          </h3>

          <div className="space-y-3">
            {activeRes.map((res) => (
              <motion.div
                key={res.id}
                whileHover={{ y: -1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground">{res.hallName}</h4>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <MapPin className="w-3 h-3 text-red-500" />
                      <span>Main Street, Passara Town Center</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold bg-[#1e8449]/10 text-[#1e8449] border border-emerald-500/25 px-2.5 py-0.5 rounded-full uppercase">
                    {res.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-muted/30 p-4 rounded-xl text-[11px]">
                  <div>
                    <span className="text-muted-foreground block">Event Date</span>
                    <strong className="text-foreground">{res.date}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Rental Fee</span>
                    <strong className="text-[#1e8449] font-bold">{res.fee}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Duration</span>
                    <strong className="text-foreground">{res.duration}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Expected Attendees</span>
                    <strong className="text-foreground">{res.attendees} guests</strong>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <div className="flex gap-1">
                    {res.amenities.map((am, idx) => (
                      <span key={idx} className="text-[9px] font-semibold bg-muted px-2 py-0.5 rounded-full">
                        ✓ {am}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-1 text-[10px] font-bold py-1.5 px-3 bg-primary hover:bg-blue-750 text-white rounded-xl shadow-sm transition-all">
                    <Download className="w-3 h-3" />
                    <span>Download Invoice Pass</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Past Reservations */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-sm font-bold flex items-center gap-2">
            <Clock className="w-5 h-5 text-zinc-550" />
            <span>Past History</span>
          </h3>

          <div className="space-y-3">
            {pastRes.map((res) => (
              <div key={res.id} className="bg-card p-4 rounded-2xl border border-border shadow-sm text-xs space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-bold bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-full">{res.status}</span>
                  <span className="text-[10px] text-muted-foreground">{res.id}</span>
                </div>
                <h4 className="font-bold text-foreground">{res.hallName}</h4>
                <div className="text-[10px] text-muted-foreground space-y-1">
                  <div>Date: {res.date}</div>
                  <div>Purpose: {res.purpose}</div>
                  <div>Paid: <strong className="text-[#1e8449]">{res.fee}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Calendar, CheckCircle2, ShieldAlert, Clock, ArrowRight, UserCheck, HardHat } from "lucide-react";

export default function CitizenComplaintsTrackingPage() {
  const [activeTab, setActiveTab] = useState("timeline");

  const timelineSteps = [
    { title: "Complaint Registered Successfully", desc: "Your complaint was queued and a verification ID was generated (COM-842901).", date: "May 28, 2024 - 09:12 AM", completed: true },
    { title: "Grievance Routed to Division Engineer", desc: "Assigned to Chief Engineer Ranjith Dissanayake (Technical Division) for field review.", date: "May 28, 2024 - 11:30 AM", completed: true },
    { title: "Technical Field Inspection Scheduled", desc: "Sabha technical inspector K. Wickramasinghe scheduled to inspect the location coordinates.", date: "May 29, 2024 - 08:30 AM", completed: true },
    { title: "Resolution & Repair Works Commenced", desc: "Contractor dispatched to fill road craters and fix underlaying drainage structure.", date: "May 30, 2024 - 10:00 AM", completed: false, active: true },
    { title: "Verification and Resolution Signing", desc: "Final inspect and signing off by ward councillor after positive feedback confirmation.", date: "Pending", completed: false }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Personal Grievance Tracking</h1>
        <p className="text-xs text-muted-foreground">Monitor the routing, field inspection schedules and resolution logs for your submitted complaints.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Complaint details card */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-[9px] font-bold bg-blue-500/10 text-blue-500 px-2.5 py-0.5 rounded-full uppercase">In Progress</span>
              <span className="text-[10px] text-muted-foreground font-semibold">Ref: COM-842901</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-foreground">Main town road deep pot holes near bank</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                There are deep craters on the Library road just in front of the Hatton National Bank branch. Craters are filling with water during rains, posing heavy threats to motorbikes and school children.
              </p>
            </div>

            <div className="space-y-2 text-[11px] border-t border-border pt-3 text-muted-foreground">
              <div>Category: <strong className="font-semibold text-foreground">Road Infrastructure</strong></div>
              <div>Location Ward: <strong className="font-semibold text-foreground">Ward 1 - Town Area</strong></div>
              <div>Assigned to: <strong className="font-semibold text-foreground">Eng. Ranjith Dissanayake</strong></div>
              <div>Target Resolution: <strong className="font-semibold text-foreground">June 2, 2024</strong></div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Stepper Timeline */}
        <div className="lg:col-span-2">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-6">
            <h3 className="text-base font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Real-Time Resolution Progress Timeline</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-4">
                  {/* Indicator Dot */}
                  <div className={`absolute -left-[20px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-white ${
                    step.completed ? "bg-[#1e8449] border-[#1e8449]" :
                    step.active ? "bg-blue-500 border-blue-500 animate-pulse" : "bg-card border-border"
                  }`}>
                    {step.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {step.active && <HardHat className="w-3 h-3" />}
                  </div>

                  <div className="space-y-1">
                    <h4 className={`text-xs font-bold ${step.active ? "text-blue-500 font-extrabold" : "text-foreground"}`}>{step.title}</h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{step.desc}</p>
                    <div className="text-[9px] font-semibold text-muted-foreground flex gap-1 items-center">
                      <Calendar className="w-3 h-3 text-primary" />
                      <span>{step.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

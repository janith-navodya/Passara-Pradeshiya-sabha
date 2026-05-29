"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Download, Calendar, Filter, Users, ShieldAlert, Award, FileText } from "lucide-react";

export default function AdminReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");

  const complaintStats = [
    { label: "Road Infrastructure", count: 48, percentage: 65 },
    { label: "Water Leakages", count: 32, percentage: 45 },
    { label: "Waste Management", count: 24, percentage: 35 },
    { label: "Street Lighting", count: 18, percentage: 25 },
    { label: "Public Health", count: 12, percentage: 15 }
  ];

  const taxCollectionStats = [
    { label: "Q1 - Assessment Tax", target: 4.5, collected: 4.2 },
    { label: "Q2 - Trade Licenses", target: 2.8, collected: 2.1 },
    { label: "Q3 - Public Booking Fees", target: 1.5, collected: 1.6 },
    { label: "Q4 - Road Tolls & Waste Fees", target: 3.2, collected: 2.9 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Reports & Analytical Insights</h1>
          <p className="text-xs text-muted-foreground">Monitor citizen satisfaction, tax collections, waste management metrics, and project expenditure.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5276] hover:bg-blue-750 text-white rounded-xl text-xs font-semibold shadow transition-colors shrink-0">
          <Download className="w-4 h-4" />
          <span>Export Executive PDF</span>
        </button>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>Reporting Period: <strong>May 1, 2024 – May 30, 2024</strong></span>
        </div>

        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="px-3 py-1.5 rounded-xl bg-background border border-border text-xs focus:outline-none"
        >
          <option value="This Month">This Month</option>
          <option value="Last Quarter">Last Quarter</option>
          <option value="Year 2024">Year 2024</option>
        </select>
      </div>

      {/* KPI Overviews */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card p-5 rounded-2xl border border-border space-y-2 shadow-sm">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Grievance Resolution Speed</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-foreground">3.2 Days</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">-18% Faster</span>
          </div>
          <p className="text-[10px] text-muted-foreground">Compared to last month's 3.9 days.</p>
        </div>

        <div className="bg-card p-5 rounded-2xl border border-border space-y-2 shadow-sm">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Sabha Tax Collection Rate</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-foreground">92.4%</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">+2.4% Up</span>
          </div>
          <p className="text-[10px] text-muted-foreground">LKR 10.8M collected out of 11.7M.</p>
        </div>

        <div className="bg-card p-5 rounded-2xl border border-border space-y-2 shadow-sm">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Infrastructure Milestones</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-foreground">8 / 12</span>
            <span className="text-[10px] text-blue-500 font-bold bg-blue-50 px-1.5 py-0.2 rounded">On Target</span>
          </div>
          <p className="text-[10px] text-muted-foreground">4 projects currently in pipeline.</p>
        </div>

        <div className="bg-card p-5 rounded-2xl border border-border space-y-2 shadow-sm">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Citizen Satisfaction Score</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-foreground">4.6 / 5.0</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">+0.2 Improvement</span>
          </div>
          <p className="text-[10px] text-muted-foreground">Based on post-resolution feedback.</p>
        </div>
      </div>

      {/* Two core reports */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Grievance Categories Card */}
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-6">
          <div>
            <h3 className="font-bold text-base flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              <span>Grievances Filed by Category</span>
            </h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">Distribution of 134 complaints received in the current reporting cycle.</p>
          </div>

          <div className="space-y-4">
            {complaintStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-foreground">
                  <span>{stat.label}</span>
                  <span>{stat.count} Complaints ({stat.percentage}%)</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.percentage}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Collection Card */}
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-6">
          <div>
            <h3 className="font-bold text-base flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              <span>Revenue Target vs Collections (LKR Millions)</span>
            </h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">Budgeted vs actual income from local taxes, licenses, and hall rentals.</p>
          </div>

          <div className="space-y-5">
            {taxCollectionStats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-foreground">
                  <span>{stat.label}</span>
                  <span className="text-[10px] text-muted-foreground">Target: {stat.target}M | Collected: <strong className="text-emerald-600">{stat.collected}M</strong></span>
                </div>
                <div className="relative h-6 bg-muted rounded-lg overflow-hidden flex items-center px-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(stat.collected / stat.target) * 100}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="absolute inset-0 bg-emerald-500/20 border-r border-emerald-500"
                  />
                  <span className="relative z-10 font-bold text-[10px] text-emerald-700 dark:text-emerald-400">
                    {((stat.collected / stat.target) * 100).toFixed(0)}% Target Achieved
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import {
  AlertCircle, CheckCircle, Clock, TrendingUp, Users, Building2,
  FolderKanban, Bell, ArrowUp, ArrowDown, Eye, MoreHorizontal,
  Activity, Zap, Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import {
  dashboardStats, complaintTrend, revenueData,
  complaintsByCategory, projectStatusData, recentActivities
} from "@/data/statistics";
import { complaints } from "@/data/complaints";
import { projects } from "@/data/projects";
import Link from "next/link";

const kpiCards = [
  {
    title: "Total Complaints", value: dashboardStats.totalComplaints.toLocaleString(),
    sub: "+24 this week", trend: "up", icon: AlertCircle, color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20", border: "border-orange-200 dark:border-orange-800",
  },
  {
    title: "Resolved", value: dashboardStats.resolvedComplaints.toLocaleString(),
    sub: "76.8% resolution rate", trend: "up", icon: CheckCircle, color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-200 dark:border-green-800",
  },
  {
    title: "Pending", value: dashboardStats.pendingComplaints.toLocaleString(),
    sub: "-12 from last week", trend: "down", icon: Clock, color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20", border: "border-red-200 dark:border-red-800",
  },
  {
    title: "Active Projects", value: dashboardStats.activeProjects.toLocaleString(),
    sub: "3 near completion", trend: "neutral", icon: FolderKanban, color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-200 dark:border-blue-800",
  },
  {
    title: "Registered Citizens", value: dashboardStats.registeredUsers.toLocaleString(),
    sub: "+145 this month", trend: "up", icon: Users, color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20", border: "border-purple-200 dark:border-purple-800",
  },
  {
    title: "Monthly Revenue", value: `LKR ${(dashboardStats.monthlyRevenue / 1000000).toFixed(2)}M`,
    sub: "+8.2% vs last month", trend: "up", icon: TrendingUp, color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800",
  },
];

const statusColor: Record<string, string> = {
  "Pending": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "In Progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Resolved": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Rejected": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

const priorityColor: Record<string, string> = {
  "Low": "bg-gray-100 text-gray-600",
  "Medium": "bg-orange-100 text-orange-700",
  "High": "bg-red-100 text-red-700",
  "Critical": "bg-red-600 text-white",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Welcome back, Lalith Bandara · {new Date().toLocaleDateString("en-LK", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Calendar className="w-4 h-4" /> May 2024</Button>
          <Link href="/admin/reports"><Button size="sm" className="gap-2 bg-primary"><Activity className="w-4 h-4" /> Reports</Button></Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpiCards.map((card, i) => (
          <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
            <Card className={`border ${card.border} hover:shadow-md transition-all`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center`}>
                    <card.icon className={`w-4.5 h-4.5 ${card.color}`} />
                  </div>
                  {card.trend === "up" && <ArrowUp className="w-4 h-4 text-green-500" />}
                  {card.trend === "down" && <ArrowDown className="w-4 h-4 text-red-500" />}
                </div>
                <div className="text-xl font-bold text-foreground">{card.value}</div>
                <div className="text-xs font-medium text-muted-foreground mt-0.5">{card.title}</div>
                <div className="text-xs text-muted-foreground/70 mt-1">{card.sub}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Complaint Trend Area Chart */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Complaint Trends (2024)</CardTitle>
              <Badge variant="secondary">Annual</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={complaintTrend}>
                <defs>
                  <linearGradient id="submitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1a5276" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#1a5276" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="resolveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e8449" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#1e8449" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid var(--border)" }} />
                <Legend />
                <Area type="monotone" dataKey="submitted" stroke="#1a5276" fill="url(#submitGrad)" strokeWidth={2} name="Submitted" />
                <Area type="monotone" dataKey="resolved" stroke="#1e8449" fill="url(#resolveGrad)" strokeWidth={2} name="Resolved" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Complaint by Category Pie */}
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">By Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={complaintsByCategory} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="count" paddingAngle={3}>
                  {complaintsByCategory.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {complaintsByCategory.map((c) => (
                <div key={c.category} className="flex items-center gap-1.5 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                  <span className="text-muted-foreground truncate">{c.category}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="border-border">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Monthly Revenue vs Target (LKR)</CardTitle>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">+8.2% YoY</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-border" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: any) => [`LKR ${(Number(v) / 1000000).toFixed(2)}M`]} contentStyle={{ borderRadius: "12px" }} />
              <Legend />
              <Bar dataKey="revenue" fill="#1a5276" radius={[4, 4, 0, 0]} name="Revenue" />
              <Bar dataKey="target" fill="#1e8449" radius={[4, 4, 0, 0]} name="Target" opacity={0.6} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Complaints + Activity Feed */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Complaints Table */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Recent Complaints</CardTitle>
              <Link href="/admin/complaints"><Button variant="ghost" size="sm" className="text-xs gap-1">View All <Eye className="w-3 h-3" /></Button></Link>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground">ID</th>
                    <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground">Issue</th>
                    <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground hidden md:table-cell">Category</th>
                    <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground">Priority</th>
                    <th className="text-left py-2.5 px-4 text-xs font-semibold text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.slice(0, 6).map((c) => (
                    <tr key={c.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-2.5 px-4 text-xs text-muted-foreground font-mono">{c.trackingId}</td>
                      <td className="py-2.5 px-4"><span className="text-xs font-medium line-clamp-1">{c.title}</span></td>
                      <td className="py-2.5 px-4 hidden md:table-cell"><Badge variant="secondary" className="text-xs">{c.category}</Badge></td>
                      <td className="py-2.5 px-4"><Badge className={`text-xs ${priorityColor[c.priority]}`}>{c.priority}</Badge></td>
                      <td className="py-2.5 px-4"><Badge className={`text-xs ${statusColor[c.status]}`}>{c.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Zap className={`w-3.5 h-3.5 ${activity.color}`} />
                </div>
                <div>
                  <p className="text-xs text-foreground leading-relaxed">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Projects Progress */}
      <Card className="border-border">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Active Projects Progress</CardTitle>
            <Link href="/admin/projects"><Button variant="ghost" size="sm" className="text-xs">View All</Button></Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.filter(p => p.status === "In Progress").map((project) => (
              <div key={project.id} className="p-4 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-medium text-foreground line-clamp-1 flex-1">{project.title}</h4>
                  <span className="text-xs font-bold text-primary shrink-0">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2 mb-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{project.category}</span>
                  <span>Due: {new Date(project.endDate).toLocaleDateString("en-LK", { month: "short", year: "numeric" })}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

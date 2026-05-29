"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Filter, AlertCircle, Clock, CheckCircle, XCircle,
  Eye, Download, ChevronDown, Trash2, Droplets, Map, Zap,
  HeartPulse, Construction, Plus, Calendar, User
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { complaints, type Complaint } from "@/data/complaints";

const statusConfig: Record<string, { color: string; icon: typeof CheckCircle }> = {
  "Pending": { color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400", icon: Clock },
  "In Progress": { color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", icon: AlertCircle },
  "Resolved": { color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", icon: CheckCircle },
  "Rejected": { color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400", icon: XCircle },
};

const priorityConfig: Record<string, string> = {
  "Low": "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  "Medium": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "High": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "Critical": "bg-red-600 text-white",
};

const categoryIcons: Record<string, typeof Map> = {
  "Roads": Map, "Garbage": Trash2, "Drainage": Droplets,
  "Water Supply": Droplets, "Public Health": HeartPulse,
  "Street Lights": Zap, "Illegal Construction": Construction,
};

const statCards = [
  { label: "Total", value: complaints.length, color: "text-foreground", bg: "bg-muted" },
  { label: "Pending", value: complaints.filter(c => c.status === "Pending").length, color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
  { label: "In Progress", value: complaints.filter(c => c.status === "In Progress").length, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { label: "Resolved", value: complaints.filter(c => c.status === "Resolved").length, color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
];

export default function AdminComplaintsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selected, setSelected] = useState<Complaint | null>(null);
  const [view, setView] = useState<"table" | "cards">("table");

  const filtered = complaints.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.trackingId.toLowerCase().includes(search.toLowerCase()) ||
      c.submittedBy.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || c.status === statusFilter;
    const matchCat = categoryFilter === "all" || c.category === categoryFilter;
    return matchSearch && matchStatus && matchCat;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Complaint Management</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Manage and resolve all citizen complaints</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Download className="w-4 h-4" /> Export</Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((s) => (
          <Card key={s.label} className={`border-border ${s.bg}`}>
            <CardContent className="p-4 text-center">
              <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="border-border">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search by ID, title, or citizen..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-44"><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-44"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {["Roads","Garbage","Drainage","Water Supply","Public Health","Street Lights","Illegal Construction"].map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Tabs value={view} onValueChange={(v) => setView(v as "table"|"cards")}>
              <TabsList>
                <TabsTrigger value="table">Table</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Table View */}
      {view === "table" && (
        <Card className="border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  {["Tracking ID","Title","Category","Submitted By","Priority","Status","Date","Action"].map(h => (
                    <th key={h} className="text-left py-3 px-4 text-xs font-semibold text-muted-foreground whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => {
                  const StatusIcon = statusConfig[c.status]?.icon || Clock;
                  const CatIcon = categoryIcons[c.category] || AlertCircle;
                  return (
                    <motion.tr key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                      className="border-t border-border hover:bg-muted/30 transition-colors cursor-pointer"
                      onClick={() => setSelected(c)}>
                      <td className="py-3 px-4 font-mono text-xs text-muted-foreground">{c.trackingId}</td>
                      <td className="py-3 px-4 max-w-[200px]"><span className="line-clamp-1 text-xs font-medium">{c.title}</span></td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          <CatIcon className="w-3.5 h-3.5 text-muted-foreground" />
                          <Badge variant="secondary" className="text-xs whitespace-nowrap">{c.category}</Badge>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground whitespace-nowrap">{c.submittedBy}</td>
                      <td className="py-3 px-4"><Badge className={`text-xs ${priorityConfig[c.priority]}`}>{c.priority}</Badge></td>
                      <td className="py-3 px-4">
                        <Badge className={`text-xs gap-1 ${statusConfig[c.status]?.color}`}>
                          <StatusIcon className="w-3 h-3" />{c.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground whitespace-nowrap">{new Date(c.submittedDate).toLocaleDateString("en-LK", { month:"short", day:"numeric" })}</td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="ghost" className="h-7 px-2 gap-1 text-xs" onClick={(e) => { e.stopPropagation(); setSelected(c); }}>
                          <Eye className="w-3.5 h-3.5" /> View
                        </Button>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <AlertCircle className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p>No complaints match your filters</p>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Cards View */}
      {view === "cards" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c, i) => {
            const StatusIcon = statusConfig[c.status]?.icon || Clock;
            return (
              <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Card className="border-border hover:shadow-md transition-all cursor-pointer" onClick={() => setSelected(c)}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="font-mono text-xs text-muted-foreground">{c.trackingId}</span>
                      <Badge className={`text-xs ${statusConfig[c.status]?.color}`}>{c.status}</Badge>
                    </div>
                    <h3 className="text-sm font-semibold mb-2 line-clamp-2">{c.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{c.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">{c.category}</Badge>
                        <Badge className={`text-xs ${priorityConfig[c.priority]}`}>{c.priority}</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{new Date(c.submittedDate).toLocaleDateString("en-LK", { month:"short", day:"numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                      <User className="w-3 h-3" />{c.submittedBy}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className="font-mono text-sm text-muted-foreground">{selected.trackingId}</span>
                  <Badge className={statusConfig[selected.status]?.color}>{selected.status}</Badge>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <h2 className="text-lg font-bold">{selected.title}</h2>
                <p className="text-sm text-muted-foreground">{selected.description}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    ["Category", selected.category],
                    ["Priority", selected.priority],
                    ["Location", selected.location],
                    ["Department", selected.department],
                    ["Submitted By", selected.submittedBy],
                    ["Assigned To", selected.assignedTo],
                    ["Date", new Date(selected.submittedDate).toLocaleDateString()],
                    ...(selected.resolvedDate ? [["Resolved", new Date(selected.resolvedDate).toLocaleDateString()]] : []),
                  ].map(([k, v]) => (
                    <div key={k} className="p-3 bg-muted/40 rounded-xl">
                      <div className="text-xs text-muted-foreground mb-0.5">{k}</div>
                      <div className="font-medium text-sm">{v}</div>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="font-semibold text-sm mb-3">Timeline</h3>
                  <div className="space-y-3">
                    {selected.timeline.map((event, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${i === selected.timeline.length - 1 ? "bg-primary" : "bg-muted-foreground/40"}`} />
                          {i < selected.timeline.length - 1 && <div className="w-0.5 flex-1 bg-muted-foreground/20 mt-1" />}
                        </div>
                        <div className="pb-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">{event.action}</Badge>
                            <span className="text-xs text-muted-foreground">{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{event.note}</p>
                          <p className="text-xs text-muted-foreground">By: {event.by}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2 border-t border-border">
                  <Select><SelectTrigger className="flex-1"><SelectValue placeholder="Update Status" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Mark Pending</SelectItem>
                      <SelectItem value="inprogress">Mark In Progress</SelectItem>
                      <SelectItem value="resolved">Mark Resolved</SelectItem>
                      <SelectItem value="rejected">Reject</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-primary">Update</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notices as initialNotices, Notice } from "@/data/notices";
import { Plus, Search, Trash2, Edit2, Bell, AlertTriangle, CheckCircle, Info, Calendar, Megaphone } from "lucide-react";

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // Form states
  const [formState, setFormState] = useState({
    title: "",
    type: "Information" as Notice["type"],
    description: "",
    isUrgent: false,
    department: "",
    expiryDate: ""
  });

  const filteredNotices = notices.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = activeType === "All" || n.type === activeType;
    return matchesSearch && matchesType;
  });

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    const newNotice: Notice = {
      id: "NTC-" + Math.floor(1000 + Math.random() * 9000),
      title: formState.title,
      type: formState.type,
      description: formState.description,
      publishedDate: new Date().toISOString().split("T")[0],
      expiryDate: formState.expiryDate || "2024-12-31",
      isUrgent: formState.isUrgent,
      department: formState.department || "General Administration"
    };

    setNotices([newNotice, ...notices]);
    setIsCreateOpen(false);
    resetForm();
  };

  const handleToggleUrgent = (id: string) => {
    setNotices(notices.map(n => n.id === id ? { ...n, isUrgent: !n.isUrgent } : n));
  };

  const handleDelete = (id: string) => {
    setNotices(notices.filter(n => n.id !== id));
  };

  const resetForm = () => {
    setFormState({
      title: "",
      type: "Information",
      description: "",
      isUrgent: false,
      department: "",
      expiryDate: ""
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Public Notice Board Management</h1>
          <p className="text-xs text-muted-foreground">Publish and moderate alerts, tenders, community notifications, and public holidays.</p>
        </div>
        <button
          onClick={() => { resetForm(); setIsCreateOpen(true); }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5276] hover:bg-blue-750 text-white rounded-xl text-xs font-semibold shadow transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Publish Notice</span>
        </button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notices, departments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 shrink-0">
          {["All", "Tender", "Announcement", "Warning", "Information", "Holiday"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                activeType === t
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "bg-card border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Table view */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/40 font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="p-4">Notice Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Department</th>
                <th className="p-4">Status</th>
                <th className="p-4">Published Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredNotices.map((notice) => (
                <tr key={notice.id} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4 font-semibold text-foreground max-w-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {notice.isUrgent && (
                          <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase animate-pulse">Urgent</span>
                        )}
                        <span>{notice.title}</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground font-normal line-clamp-2 leading-relaxed">{notice.description}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-350">
                      {notice.type}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{notice.department}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleToggleUrgent(notice.id)}
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full border transition-colors ${
                        notice.isUrgent
                          ? "bg-red-50 text-red-500 border-red-200"
                          : "bg-zinc-50 text-zinc-500 border-zinc-200"
                      }`}
                    >
                      {notice.isUrgent ? "De-escalate" : "Escalate"}
                    </button>
                  </td>
                  <td className="p-4 text-muted-foreground">{notice.publishedDate}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button onClick={() => handleDelete(notice.id)} className="text-red-500 hover:text-red-700 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12 space-y-2">
            <Bell className="w-10 h-10 text-muted-foreground mx-auto" />
            <h3 className="font-bold text-foreground">No Notices Found</h3>
            <p className="text-xs text-muted-foreground">Adjust filters or search parameters.</p>
          </div>
        )}
      </div>

      {/* CREATE MODAL */}
      <AnimatePresence>
        {isCreateOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setIsCreateOpen(false)} className="absolute inset-0 bg-black" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-lg bg-card rounded-2xl border border-border p-6 shadow-xl z-10 space-y-4">
              <h3 className="text-lg font-bold">Publish New Notice</h3>
              <form onSubmit={handleCreateNotice} className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase">Notice Title</label>
                  <input
                    type="text"
                    required
                    value={formState.title}
                    onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-1"
                    placeholder="e.g. Special COVID Booster Campaign"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Category</label>
                    <select
                      value={formState.type}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value as Notice["type"] })}
                      className="w-full px-2.5 py-1.5 bg-background border border-border rounded-xl text-xs focus:outline-none"
                    >
                      <option value="Information">Information</option>
                      <option value="Tender">Tender</option>
                      <option value="Announcement">Announcement</option>
                      <option value="Warning">Warning</option>
                      <option value="Holiday">Holiday</option>
                      <option value="Meeting">Meeting</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Expiry Date</label>
                    <input
                      type="date"
                      value={formState.expiryDate}
                      onChange={(e) => setFormState({ ...formState, expiryDate: e.target.value })}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Department</label>
                    <input
                      type="text"
                      value={formState.department}
                      onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                      placeholder="e.g. Public Health Division"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-6">
                    <input
                      type="checkbox"
                      id="urg"
                      checked={formState.isUrgent}
                      onChange={(e) => setFormState({ ...formState, isUrgent: e.target.checked })}
                      className="w-4 h-4 rounded text-primary focus:ring-primary/20"
                    />
                    <label htmlFor="urg" className="text-xs font-semibold cursor-pointer">Mark as Urgent Alert</label>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase">Description</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.description}
                    onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                    placeholder="Provide description of notice body..."
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-border">
                  <button
                    type="button"
                    onClick={() => setIsCreateOpen(false)}
                    className="px-4 py-2 border border-border text-xs rounded-xl hover:bg-muted"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white text-xs rounded-xl hover:bg-primary-dark font-semibold animate-pulse"
                  >
                    Publish
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

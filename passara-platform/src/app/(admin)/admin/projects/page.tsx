"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects as initialProjects, Project } from "@/data/projects";
import { Plus, Search, Filter, Kanban, List, Calendar, MapPin, Landmark, Edit, Trash2, HardHat, CheckCircle2 } from "lucide-react";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    ward: "",
    budget: "",
    spent: "",
    progress: "0",
    status: "Planning" as Project["status"],
    description: "",
    startDate: "",
    endDate: "",
    contractor: "",
    manager: ""
  });

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.contractor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.manager.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleStatusChange = (projId: string, newStatus: Project["status"]) => {
    setProjects(projects.map(p => p.id === projId ? { ...p, status: newStatus, progress: newStatus === "Completed" ? 100 : p.progress } : p));
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    const newProj: Project = {
      id: "PROJ-" + Math.floor(1000 + Math.random() * 9000),
      title: formState.title,
      description: formState.description,
      category: formState.category || "Infrastructure",
      status: formState.status,
      progress: Number(formState.progress),
      budget: Number(formState.budget) || 0,
      spent: Number(formState.spent) || 0,
      startDate: formState.startDate || "2024-06-01",
      endDate: formState.endDate || "2025-06-01",
      contractor: formState.contractor || "N/A",
      ward: formState.ward || "All Wards",
      beneficiaries: 5000,
      manager: formState.manager || "Sabha Engineering Dept",
      images: []
    };
    setProjects([newProj, ...projects]);
    setIsCreateModalOpen(false);
    resetForm();
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const resetForm = () => {
    setFormState({
      title: "",
      category: "",
      ward: "",
      budget: "",
      spent: "",
      progress: "0",
      status: "Planning",
      description: "",
      startDate: "",
      endDate: "",
      contractor: "",
      manager: ""
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Development Projects</h1>
          <p className="text-xs text-muted-foreground">Manage and track Sabha infrastructure, road development and water supply projects.</p>
        </div>
        <button
          onClick={() => { resetForm(); setIsCreateModalOpen(true); }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5276] hover:bg-blue-750 text-white rounded-xl text-xs font-semibold shadow transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* Filters & Toggles */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border">
        <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
          <div className="relative flex-1 md:flex-none md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, contractors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:ring-1 focus:ring-primary/20"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-background border border-border text-xs focus:outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Road Infrastructure">Road Infrastructure</option>
            <option value="Water Supply">Water Supply</option>
            <option value="Education">Education</option>
            <option value="Recreation">Recreation</option>
            <option value="Electrification">Electrification</option>
            <option value="Commercial">Commercial</option>
            <option value="Environment">Environment</option>
          </select>
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => setViewMode("kanban")}
            className={`p-2 rounded-xl border transition-all ${viewMode === "kanban" ? "bg-primary/10 text-primary border-primary/20" : "bg-card border-border text-muted-foreground"}`}
          >
            <Kanban className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-xl border transition-all ${viewMode === "list" ? "bg-primary/10 text-primary border-primary/20" : "bg-card border-border text-muted-foreground"}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* View Mode content */}
      {viewMode === "kanban" ? (
        <div className="grid md:grid-cols-3 gap-6">
          {/* PLANNING COLUMN */}
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-[#f39c12]/10 dark:bg-amber-950/20 p-3 rounded-2xl border border-amber-200/20">
              <span className="text-xs font-bold text-[#f39c12]">Planning / Pipeline</span>
              <span className="text-[10px] font-bold bg-[#f39c12] text-white px-2 py-0.5 rounded-full">
                {filteredProjects.filter(p => p.status === "Planning").length}
              </span>
            </div>
            <div className="space-y-3 min-h-[500px]">
              {filteredProjects.filter(p => p.status === "Planning").map(proj => (
                <ProjectKanbanCard key={proj.id} project={proj} onStatusChange={handleStatusChange} onDelete={handleDeleteProject} />
              ))}
            </div>
          </div>

          {/* IN PROGRESS COLUMN */}
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-blue-500/10 dark:bg-blue-950/20 p-3 rounded-2xl border border-blue-200/20">
              <span className="text-xs font-bold text-blue-500">In Progress</span>
              <span className="text-[10px] font-bold bg-blue-500 text-white px-2 py-0.5 rounded-full">
                {filteredProjects.filter(p => p.status === "In Progress" || p.status === "On Hold").length}
              </span>
            </div>
            <div className="space-y-3 min-h-[500px]">
              {filteredProjects.filter(p => p.status === "In Progress" || p.status === "On Hold").map(proj => (
                <ProjectKanbanCard key={proj.id} project={proj} onStatusChange={handleStatusChange} onDelete={handleDeleteProject} />
              ))}
            </div>
          </div>

          {/* COMPLETED COLUMN */}
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-emerald-500/10 dark:bg-emerald-950/20 p-3 rounded-2xl border border-emerald-200/20">
              <span className="text-xs font-bold text-[#1e8449]">Completed</span>
              <span className="text-[10px] font-bold bg-[#1e8449] text-white px-2 py-0.5 rounded-full">
                {filteredProjects.filter(p => p.status === "Completed").length}
              </span>
            </div>
            <div className="space-y-3 min-h-[500px]">
              {filteredProjects.filter(p => p.status === "Completed").map(proj => (
                <ProjectKanbanCard key={proj.id} project={proj} onStatusChange={handleStatusChange} onDelete={handleDeleteProject} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* LIST VIEW */
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40 font-semibold text-muted-foreground uppercase tracking-wider">
                  <th className="p-4">Project Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Progress</th>
                  <th className="p-4">Budget / Spent</th>
                  <th className="p-4">Ward</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredProjects.map(p => (
                  <tr key={p.id} className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 font-semibold text-foreground max-w-xs">{p.title}</td>
                    <td className="p-4">{p.category}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                        p.status === "Completed" ? "bg-emerald-500/10 text-[#1e8449]" :
                        p.status === "In Progress" ? "bg-blue-500/10 text-blue-500" : "bg-amber-500/10 text-[#f39c12]"
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden shrink-0">
                          <div className="h-full bg-primary" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="font-bold">{p.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-foreground">LKR {(p.budget / 1000000).toFixed(1)}M</div>
                      <div className="text-[10px] text-muted-foreground">Spent: LKR {(p.spent / 1000000).toFixed(1)}M</div>
                    </td>
                    <td className="p-4 text-muted-foreground">{p.ward}</td>
                    <td className="p-4">
                      <button onClick={() => handleDeleteProject(p.id)} className="text-red-500 hover:text-red-700 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CREATE MODAL */}
      <AnimatePresence>
        {isCreateModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setIsCreateModalOpen(false)} className="absolute inset-0 bg-black" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-xl bg-card rounded-2xl border border-border p-6 shadow-xl z-10 space-y-4">
              <h3 className="text-lg font-bold">Launch New Municipal Project</h3>
              <form onSubmit={handleCreateProject} className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase">Project Title</label>
                  <input
                    type="text"
                    required
                    value={formState.title}
                    onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-1"
                    placeholder="e.g. Gonabokka Bridge Reconstruction"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Category</label>
                    <select
                      value={formState.category}
                      onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                      className="w-full px-2.5 py-1.5 bg-background border border-border rounded-xl text-xs focus:outline-none"
                    >
                      <option value="Road Infrastructure">Road Infrastructure</option>
                      <option value="Water Supply">Water Supply</option>
                      <option value="Education">Education</option>
                      <option value="Recreation">Recreation</option>
                      <option value="Electrification">Electrification</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Ward Limits</label>
                    <input
                      type="text"
                      value={formState.ward}
                      onChange={(e) => setFormState({ ...formState, ward: e.target.value })}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                      placeholder="e.g. Ward 3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Budget (LKR)</label>
                    <input
                      type="number"
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                      placeholder="85000000"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Spent (LKR)</label>
                    <input
                      type="number"
                      value={formState.spent}
                      onChange={(e) => setFormState({ ...formState, spent: e.target.value })}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                      placeholder="12000000"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Progress (%)</label>
                    <input
                      type="number"
                      value={formState.progress}
                      onChange={(e) => setFormState({ ...formState, progress: e.target.value })}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                      placeholder="25"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase">Description</label>
                  <textarea
                    rows={3}
                    value={formState.description}
                    onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                    placeholder="Short description of technical scope..."
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-border">
                  <button
                    type="button"
                    onClick={() => setIsCreateModalOpen(false)}
                    className="px-4 py-2 border border-border text-xs rounded-xl hover:bg-muted"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white text-xs rounded-xl hover:bg-primary-dark font-semibold"
                  >
                    Save Project
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

function ProjectKanbanCard({ project, onStatusChange, onDelete }: { project: Project, onStatusChange: (id: string, stat: Project["status"]) => void, onDelete: (id: string) => void }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -2 }}
      className="bg-card p-4 rounded-2xl border border-border shadow-sm space-y-3 relative group"
    >
      <div className="flex justify-between items-start">
        <span className="text-[9px] font-semibold text-muted-foreground uppercase">{project.category}</span>
        <button onClick={() => onDelete(project.id)} className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-750 transition-opacity p-0.5">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      <h4 className="text-xs font-bold leading-snug">{project.title}</h4>
      <p className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>

      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] font-semibold text-muted-foreground">
          <span>Complete</span>
          <span>{project.progress}%</span>
        </div>
        <div className="h-1.5 bg-muted w-full rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500" style={{ width: `${project.progress}%` }} />
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
        <span className="truncate">{project.ward}</span>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="text-[10px] font-bold">LKR {(project.budget / 1000000).toFixed(1)}M</div>
        <select
          value={project.status}
          onChange={(e) => onStatusChange(project.id, e.target.value as Project["status"])}
          className="text-[10px] font-semibold px-2 py-0.5 rounded-lg border border-border bg-background"
        >
          <option value="Planning">Planning</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </motion.div>
  );
}

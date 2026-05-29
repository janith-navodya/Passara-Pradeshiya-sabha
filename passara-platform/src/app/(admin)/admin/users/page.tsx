"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { users as initialUsers, User } from "@/data/users";
import { Plus, Search, UserCheck, Shield, Users, Mail, Phone, MapPin, Trash2, ShieldAlert } from "lucide-react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRole, setActiveRole] = useState("All");
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Citizen" as User["role"],
    ward: "",
    department: ""
  });

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.phone.includes(searchQuery);
    const matchesRole = activeRole === "All" || u.role === activeRole;
    return matchesSearch && matchesRole;
  });

  const handleInviteUser = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: "USR-" + Math.floor(1000 + Math.random() * 9000),
      name: formState.name,
      email: formState.email,
      phone: formState.phone || "077-123-4567",
      role: formState.role,
      status: "Active",
      joinedDate: new Date().toISOString().split("T")[0],
      lastLogin: "Never",
      avatar: "",
      address: "Passara",
      ward: formState.ward || "Ward 1",
      department: formState.role !== "Citizen" ? (formState.department || "General Administration") : "N/A"
    };
    setUsers([newUser, ...users]);
    setIsInviteOpen(false);
    resetForm();
  };

  const handleToggleStatus = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" } : u));
  };

  const handleDelete = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      phone: "",
      role: "Citizen",
      ward: "",
      department: ""
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Access Control & Users Management</h1>
          <p className="text-xs text-muted-foreground">Manage accounts, approve registrations, configure roles and audit staff access parameters.</p>
        </div>
        <button
          onClick={() => { resetForm(); setIsInviteOpen(true); }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5276] hover:bg-blue-750 text-white rounded-xl text-xs font-semibold shadow transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Invite User</span>
        </button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search users, email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-background border border-border text-xs focus:outline-none focus:ring-1 focus:ring-primary/20"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 shrink-0">
          {["All", "Admin", "Staff", "Citizen"].map((r) => (
            <button
              key={r}
              onClick={() => setActiveRole(r)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                activeRole === r
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "bg-card border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {r === "All" ? "All Users" : r + "s"}
            </button>
          ))}
        </div>
      </div>

      {/* Users table */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/40 font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="p-4">User Details</th>
                <th className="p-4">System Role</th>
                <th className="p-4">Access Level</th>
                <th className="p-4">Affiliation</th>
                <th className="p-4">Registered Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {user.name.split(" ").pop()?.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{user.name}</div>
                        <div className="text-[10px] text-muted-foreground flex gap-3 mt-0.5">
                          <span className="flex items-center gap-0.5"><Mail className="w-3 h-3 text-primary" />{user.email}</span>
                          <span className="flex items-center gap-0.5"><Phone className="w-3 h-3 text-emerald-600" />{user.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                      user.role === "Admin" ? "bg-red-500/10 text-red-500 border border-red-200/20" :
                      user.role === "Staff" ? "bg-blue-500/10 text-blue-500 border border-blue-200/20" : "bg-zinc-100 text-zinc-650"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-semibold border ${
                      user.status === "Active" ? "bg-emerald-50 text-emerald-600 border-emerald-250" : "bg-red-50 text-red-500 border-red-250"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">
                    {user.role === "Citizen" ? (
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary shrink-0" />{user.ward || "All Wards"}</span>
                    ) : (
                      <span>{user.department || "Headquarters"}</span>
                    )}
                  </td>
                  <td className="p-4 text-muted-foreground">{user.joinedDate}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleToggleStatus(user.id)}
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-lg border transition-colors ${
                          user.status === "Active" ? "text-red-500 border-red-200 bg-red-50/10" : "text-emerald-600 border-emerald-200 bg-emerald-50/10"
                        }`}
                      >
                        {user.status === "Active" ? "Suspend" : "Activate"}
                      </button>
                      <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-750 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12 space-y-2">
            <Users className="w-10 h-10 text-muted-foreground mx-auto" />
            <h3 className="font-bold text-foreground">No Users Found</h3>
            <p className="text-xs text-muted-foreground">Adjust filters or search parameters.</p>
          </div>
        )}
      </div>

      {/* INVITE MODAL */}
      <AnimatePresence>
        {isInviteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setIsInviteOpen(false)} className="absolute inset-0 bg-black" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-md bg-card rounded-2xl border border-border p-6 shadow-xl z-10 space-y-4">
              <h3 className="text-lg font-bold">Invite Municipal Officer / Citizen</h3>
              <form onSubmit={handleInviteUser} className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-1"
                    placeholder="e.g. Nihal Jayewardene"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                      placeholder="nihal@passara.ps.gov.lk"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">Phone</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                      placeholder="077-123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase">System Role</label>
                    <select
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value as User["role"] })}
                      className="w-full px-2.5 py-1.5 bg-background border border-border rounded-xl text-xs focus:outline-none"
                    >
                      <option value="Citizen">Citizen</option>
                      <option value="Staff">Staff</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  {formState.role === "Citizen" ? (
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase">Ward</label>
                      <input
                        type="text"
                        value={formState.ward}
                        onChange={(e) => setFormState({ ...formState, ward: e.target.value })}
                        className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                        placeholder="e.g. Ward 3"
                      />
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase">Department</label>
                      <input
                        type="text"
                        value={formState.department}
                        onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                        className="w-full px-3 py-1.5 bg-background border border-border rounded-xl text-xs"
                        placeholder="e.g. Technical Division"
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-border">
                  <button
                    type="button"
                    onClick={() => setIsInviteOpen(false)}
                    className="px-4 py-2 border border-border text-xs rounded-xl hover:bg-muted"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white text-xs rounded-xl hover:bg-primary-dark font-semibold"
                  >
                    Send Invitation
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

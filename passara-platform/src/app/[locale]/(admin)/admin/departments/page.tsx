"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Edit2, Phone, Mail, Users, Building2, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { departments } from "@/data/departments";

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

export default function AdminDepartmentsPage() {
  const [search, setSearch] = useState("");
  const filtered = departments.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.head.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Department Management</h1>
          <p className="text-sm text-muted-foreground">Manage all 9 departments of Passara Pradeshiya Sabha</p>
        </div>
        <Button size="sm" className="gap-2"><Plus className="w-4 h-4" /> Add Department</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Departments", value: departments.length },
          { label: "Total Staff", value: departments.reduce((a, d) => a + d.staffCount, 0) },
          { label: "Services Offered", value: departments.reduce((a, d) => a + d.services.length, 0) },
        ].map((s) => (
          <Card key={s.label} className="border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search departments..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((dept, i) => (
          <motion.div key={dept.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <Card className="border-border hover:shadow-lg transition-all group">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${colorMap[dept.color]} flex items-center justify-center`}>
                    <Building2 className="w-5 h-5" />
                  </div>
                  <Button size="icon" variant="ghost" className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity"><Edit2 className="w-3.5 h-3.5" /></Button>
                </div>
                <h3 className="font-bold text-sm mb-0.5">{dept.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 italic">{dept.sinhalaName}</p>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{dept.description}</p>

                <div className="space-y-2 text-xs border-t border-border pt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Users className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-muted-foreground">Head: </span>
                      <span className="font-medium">{dept.head}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-3 h-3" />{dept.phone}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-3 h-3" />{dept.email}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" /> {dept.staffCount} staff
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {dept.services.slice(0, 2).map(s => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                    {dept.services.length > 2 && <Badge variant="secondary" className="text-xs">+{dept.services.length - 2}</Badge>}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

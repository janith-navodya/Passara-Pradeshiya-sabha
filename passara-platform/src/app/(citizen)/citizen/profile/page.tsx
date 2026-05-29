"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, CheckCircle, ShieldAlert, Award, Lock, Save } from "lucide-react";

export default function CitizenProfilePage() {
  const [profile, setProfile] = useState({
    name: "Kumara Perera",
    email: "kumara@example.com",
    phone: "077-123-4567",
    nic: "921982701V",
    ward: "Ward 1 - Passara Town",
    address: "12, Main Street, Passara",
    registeredDate: "2023-05-12"
  });

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Citizen Profile Settings</h1>
        <p className="text-xs text-muted-foreground">Manage your contact details, verify your local municipal ward credentials, and audit security settings.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Quick overview card */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center space-y-4 relative overflow-hidden">
            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-extrabold mx-auto border border-primary/20 shadow shadow-primary/5">
              KP
            </div>

            <div>
              <h3 className="text-base font-bold">{profile.name}</h3>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 dark:bg-emerald-950 font-bold px-2.5 py-0.5 rounded-full uppercase border border-emerald-250 mt-1 inline-block">Verified Citizen</span>
            </div>

            <div className="text-left text-xs space-y-2 border-t border-border pt-4 text-muted-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4 text-primary shrink-0" /><span>NIC: <strong className="text-foreground">{profile.nic}</strong></span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-500 shrink-0" /><span>Ward: <strong className="text-foreground">{profile.ward}</strong></span></div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-amber-500 shrink-0" /><span>Joined: <strong className="text-foreground">{profile.registeredDate}</strong></span></div>
            </div>
          </div>
        </div>

        {/* Right: Profile edit form */}
        <div className="lg:col-span-2">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="text-base font-bold mb-4">Edit Personal Information</h3>

            {saved && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-900 flex items-center gap-2 text-emerald-700 dark:text-emerald-350 text-xs font-semibold"
              >
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Your profile information has been successfully saved.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    required
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-1"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">NIC (Read Only)</label>
                  <input
                    type="text"
                    disabled
                    value={profile.nic}
                    className="w-full px-4 py-2 bg-muted/40 border border-border rounded-xl text-xs text-muted-foreground cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    required
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-1"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-1"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">Physical Home Address</label>
                <input
                  type="text"
                  required
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-1"
                />
              </div>

              <div className="flex justify-end pt-4 border-t border-border">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary hover:bg-blue-750 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{saving ? "Saving Changes..." : "Save Profile"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Info, AlertTriangle, Calendar, CheckCircle2, CheckSquare } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  body: string;
  type: "System" | "Grievance" | "Reservation" | "Public";
  date: string;
  read: boolean;
}

export default function CitizenNotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "n1",
      title: "Town Hall Booking Confirmed!",
      body: "Good news. Your venue rental reservation request RES-401290 has been formally verified and approved by the finance division.",
      type: "Reservation",
      date: "May 29, 2024 - 10:45 AM",
      read: false
    },
    {
      id: "n2",
      title: "Inspection Scheduled for Grievance COM-842901",
      body: "Technical officer K. Wickramasinghe is scheduled to conduct a physical survey of the reported town road potholes today.",
      type: "Grievance",
      date: "May 29, 2024 - 08:30 AM",
      read: false
    },
    {
      id: "n3",
      title: "Property Tax Payment Due Warning",
      body: "This is a general system reminder. The final deadline for annual property tax assessments is June 30, 2024. Pay online to avoid late fee penalties.",
      type: "Public",
      date: "May 25, 2024 - 09:00 AM",
      read: true
    },
    {
      id: "n4",
      title: "Grievance COM-540192 Resolved",
      body: "The water pipe leakage in Hopton division has been fully fixed. The technical crew replaced the rusted pipeline connections.",
      type: "Grievance",
      date: "May 15, 2024 - 04:30 PM",
      read: true
    }
  ]);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleToggleRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: !n.read } : n));
  };

  const getNotifIcon = (type: Notification["type"]) => {
    switch (type) {
      case "Grievance": return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "Reservation": return <Calendar className="w-4 h-4 text-emerald-600" />;
      case "Public": return <Info className="w-4 h-4 text-blue-500" />;
      default: return <Bell className="w-4 h-4 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Alerts & Notifications</h1>
          <p className="text-xs text-muted-foreground">Receive real-time progress updates on your bookings, submitted complaints, and general Sabha circulars.</p>
        </div>
        <button
          onClick={handleMarkAllRead}
          className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-muted text-foreground rounded-xl text-xs font-semibold shadow-sm transition-colors shrink-0"
        >
          <CheckSquare className="w-4 h-4" />
          <span>Mark All Read</span>
        </button>
      </div>

      {/* Notifications listing */}
      <div className="space-y-3">
        <AnimatePresence>
          {notifications.map((notif) => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={() => handleToggleRead(notif.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex gap-4 ${
                notif.read
                  ? "bg-card border-border shadow-sm text-muted-foreground"
                  : "bg-white dark:bg-zinc-900 border-primary/20 shadow-md text-foreground shadow-primary/5"
              }`}
            >
              {!notif.read && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              )}

              <div className="w-9 h-9 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                {getNotifIcon(notif.type)}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex justify-between items-start">
                  <h4 className={`text-xs font-bold ${notif.read ? "text-muted-foreground font-semibold" : "text-foreground"}`}>{notif.title}</h4>
                  <span className="text-[9px] text-muted-foreground">{notif.date}</span>
                </div>
                <p className="text-[10px] leading-relaxed max-w-2xl">{notif.body}</p>
                <div className="flex items-center gap-2 pt-1 text-[9px] font-semibold uppercase">
                  <span>Type: {notif.type}</span>
                  <span>•</span>
                  <span className={notif.read ? "text-zinc-400" : "text-primary"}>
                    {notif.read ? "Marked Read" : "New Notice"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

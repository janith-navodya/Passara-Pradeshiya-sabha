export const dashboardStats = {
  totalComplaints: 1284,
  resolvedComplaints: 987,
  pendingComplaints: 247,
  inProgressComplaints: 50,
  totalProjects: 38,
  activeProjects: 12,
  completedProjects: 23,
  totalRevenue: 45680000,
  monthlyRevenue: 3840000,
  totalCitizens: 52400,
  registeredUsers: 3210,
  departments: 9,
  publicNotices: 42,
  hallBookings: 18,
};

export const complaintTrend = [
  { month: "Jan", submitted: 95, resolved: 78 },
  { month: "Feb", submitted: 110, resolved: 95 },
  { month: "Mar", submitted: 132, resolved: 118 },
  { month: "Apr", submitted: 88, resolved: 76 },
  { month: "May", submitted: 145, resolved: 130 },
  { month: "Jun", submitted: 162, resolved: 149 },
  { month: "Jul", submitted: 178, resolved: 160 },
  { month: "Aug", submitted: 134, resolved: 125 },
  { month: "Sep", submitted: 156, resolved: 140 },
  { month: "Oct", submitted: 189, resolved: 172 },
  { month: "Nov", submitted: 201, resolved: 185 },
  { month: "Dec", submitted: 168, resolved: 155 },
];

export const revenueData = [
  { month: "Jan", revenue: 3200000, target: 3500000 },
  { month: "Feb", revenue: 3450000, target: 3500000 },
  { month: "Mar", revenue: 3800000, target: 3500000 },
  { month: "Apr", revenue: 3100000, target: 3500000 },
  { month: "May", revenue: 4100000, target: 3500000 },
  { month: "Jun", revenue: 3900000, target: 3500000 },
  { month: "Jul", revenue: 4300000, target: 4000000 },
  { month: "Aug", revenue: 3750000, target: 4000000 },
  { month: "Sep", revenue: 4050000, target: 4000000 },
  { month: "Oct", revenue: 4200000, target: 4000000 },
  { month: "Nov", revenue: 3840000, target: 4000000 },
  { month: "Dec", revenue: 4500000, target: 4000000 },
];

export const complaintsByCategory = [
  { category: "Roads", count: 312, color: "#1a5276" },
  { category: "Garbage", count: 245, color: "#1e8449" },
  { category: "Drainage", count: 198, color: "#f39c12" },
  { category: "Water Supply", count: 167, color: "#2980b9" },
  { category: "Public Health", count: 134, color: "#e74c3c" },
  { category: "Street Lights", count: 128, color: "#8e44ad" },
  { category: "Illegal Construction", count: 100, color: "#d35400" },
];

export const projectStatusData = [
  { status: "Completed", value: 23, color: "#1e8449" },
  { status: "In Progress", value: 12, color: "#f39c12" },
  { status: "Planning", value: 3, color: "#1a5276" },
];

export const recentActivities = [
  { id: 1, type: "complaint", message: "New road complaint submitted from Passara Town", time: "5 min ago", icon: "AlertCircle", color: "text-orange-500" },
  { id: 2, type: "project", message: "Mahaweli Road Development Project progress updated to 75%", time: "23 min ago", icon: "Construction", color: "text-blue-500" },
  { id: 3, type: "notice", message: "New public notice published: Water Supply Interruption", time: "1 hr ago", icon: "Bell", color: "text-purple-500" },
  { id: 4, type: "user", message: "New citizen registered: Kumara Perera", time: "2 hrs ago", icon: "UserPlus", color: "text-green-500" },
  { id: 5, type: "complaint", message: "Drainage complaint #C-1089 resolved by Technical Division", time: "3 hrs ago", icon: "CheckCircle", color: "text-green-600" },
  { id: 6, type: "revenue", message: "Tax payment received - LKR 125,000", time: "4 hrs ago", icon: "DollarSign", color: "text-emerald-500" },
  { id: 7, type: "booking", message: "Council Hall booked for 15th June event", time: "5 hrs ago", icon: "Calendar", color: "text-indigo-500" },
];

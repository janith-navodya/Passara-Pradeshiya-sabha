export type ComplaintStatus = "Pending" | "In Progress" | "Resolved" | "Rejected";
export type ComplaintCategory = "Roads" | "Garbage" | "Drainage" | "Water Supply" | "Public Health" | "Street Lights" | "Illegal Construction";
export type ComplaintPriority = "Low" | "Medium" | "High" | "Critical";

export interface Complaint {
  id: string;
  trackingId: string;
  title: string;
  description: string;
  category: ComplaintCategory;
  status: ComplaintStatus;
  priority: ComplaintPriority;
  submittedBy: string;
  submittedDate: string;
  location: string;
  assignedTo: string;
  department: string;
  images: string[];
  timeline: { date: string; action: string; by: string; note: string }[];
  resolvedDate?: string;
}

export const complaints: Complaint[] = [
  {
    id: "1",
    trackingId: "C-2024-1089",
    title: "Large Pothole on Passara-Badulla Road Near Temple",
    description: "There is a dangerous pothole on the main road near Sri Sanghamitta Temple causing accidents and vehicle damage. The pothole is approximately 1.5 feet wide and needs urgent repair.",
    category: "Roads",
    status: "In Progress",
    priority: "High",
    submittedBy: "Kumara Perera",
    submittedDate: "2024-05-20",
    location: "Passara-Badulla Road, Near Sri Sanghamitta Temple",
    assignedTo: "Eng. Ranjith Dissanayake",
    department: "Technical Division",
    images: [],
    timeline: [
      { date: "2024-05-20", action: "Submitted", by: "Kumara Perera", note: "Complaint submitted online" },
      { date: "2024-05-21", action: "Acknowledged", by: "Admin Staff", note: "Complaint registered and assigned to Technical Division" },
      { date: "2024-05-22", action: "In Progress", by: "Eng. Ranjith Dissanayake", note: "Site inspection completed. Repair scheduled for 25th May." },
    ],
  },
  {
    id: "2",
    trackingId: "C-2024-1090",
    title: "Illegal Garbage Dumping Near Passara Market",
    description: "Residents are illegally dumping garbage near the main market area creating health hazards and foul smell. Immediate intervention required from Public Health Division.",
    category: "Garbage",
    status: "Pending",
    priority: "Medium",
    submittedBy: "Anura Silva",
    submittedDate: "2024-05-21",
    location: "Passara Market Area, Main Street",
    assignedTo: "Unassigned",
    department: "Public Health Division",
    images: [],
    timeline: [
      { date: "2024-05-21", action: "Submitted", by: "Anura Silva", note: "Complaint submitted via mobile app" },
      { date: "2024-05-22", action: "Acknowledged", by: "Admin Staff", note: "Forwarded to Public Health Division" },
    ],
  },
  {
    id: "3",
    trackingId: "C-2024-1085",
    title: "Blocked Drainage Causing Road Flooding",
    description: "The main drainage channel near Passara Junction is blocked with debris causing severe flooding during rain. Multiple houses affected. Road becomes impassable.",
    category: "Drainage",
    status: "Resolved",
    priority: "Critical",
    submittedBy: "Nimali Fernando",
    submittedDate: "2024-05-15",
    resolvedDate: "2024-05-19",
    location: "Passara Junction, Near Bus Stand",
    assignedTo: "Technical Team B",
    department: "Technical Division",
    images: [],
    timeline: [
      { date: "2024-05-15", action: "Submitted", by: "Nimali Fernando", note: "Emergency complaint submitted" },
      { date: "2024-05-15", action: "Acknowledged", by: "Admin Staff", note: "Marked as critical and escalated" },
      { date: "2024-05-16", action: "In Progress", by: "Technical Team B", note: "Crew dispatched for drainage clearing" },
      { date: "2024-05-19", action: "Resolved", by: "Technical Team B", note: "Drainage fully cleared and repaired" },
    ],
  },
  {
    id: "4",
    trackingId: "C-2024-1091",
    title: "No Water Supply for 3 Days - Raththala Area",
    description: "Raththala village has had no piped water supply for the past 3 days. Approximately 150 families are affected. Children and elderly are severely inconvenienced.",
    category: "Water Supply",
    status: "In Progress",
    priority: "Critical",
    submittedBy: "Saman Rajapaksha",
    submittedDate: "2024-05-22",
    location: "Raththala Village, Passara Division",
    assignedTo: "Water Supply Team",
    department: "Water Supply Division",
    images: [],
    timeline: [
      { date: "2024-05-22", action: "Submitted", by: "Saman Rajapaksha", note: "Group complaint from 15 residents" },
      { date: "2024-05-22", action: "Acknowledged", by: "Admin Staff", note: "Escalated to Water Supply Division immediately" },
      { date: "2024-05-23", action: "In Progress", by: "Water Supply Team", note: "Pipe burst identified at main junction. Temporary supply arranged." },
    ],
  },
  {
    id: "5",
    trackingId: "C-2024-1078",
    title: "Street Lights Not Working - Hospital Road",
    description: "Street lights along Hospital Road have been non-functional for 2 weeks creating safety hazards especially for night commuters and hospital visitors.",
    category: "Street Lights",
    status: "Resolved",
    priority: "Medium",
    submittedBy: "Dr. Priya Wickramasinghe",
    submittedDate: "2024-05-08",
    resolvedDate: "2024-05-14",
    location: "Hospital Road, Passara",
    assignedTo: "Electrical Team",
    department: "Technical Division",
    images: [],
    timeline: [
      { date: "2024-05-08", action: "Submitted", by: "Dr. Priya Wickramasinghe", note: "Submitted with location photos" },
      { date: "2024-05-09", action: "Acknowledged", by: "Admin Staff", note: "Forwarded to Technical Division" },
      { date: "2024-05-11", action: "In Progress", by: "Electrical Team", note: "Fault identified: damaged transformer" },
      { date: "2024-05-14", action: "Resolved", by: "Electrical Team", note: "Transformer replaced. All 12 lights operational." },
    ],
  },
  {
    id: "6",
    trackingId: "C-2024-1093",
    title: "Unauthorized Construction Without Permit",
    description: "A three-story building is being constructed without proper permits near Passara Town. The construction violates local building bylaws and encroaches on a public footpath.",
    category: "Illegal Construction",
    status: "Pending",
    priority: "High",
    submittedBy: "Ranjith Kumara",
    submittedDate: "2024-05-23",
    location: "No.45, Main Street, Passara Town",
    assignedTo: "Unassigned",
    department: "Technical Division",
    images: [],
    timeline: [
      { date: "2024-05-23", action: "Submitted", by: "Ranjith Kumara", note: "Submitted with photographic evidence" },
    ],
  },
  {
    id: "7",
    trackingId: "C-2024-1066",
    title: "Public Health Risk - Mosquito Breeding in Abandoned Site",
    description: "An abandoned construction site in Ward 4 has stagnant water creating mosquito breeding grounds. Dengue risk is high and fumigation is urgently needed.",
    category: "Public Health",
    status: "Resolved",
    priority: "High",
    submittedBy: "Chamara Bandara",
    submittedDate: "2024-04-28",
    resolvedDate: "2024-05-05",
    location: "Ward 04, Near Passara Hospital",
    assignedTo: "Public Health Inspector",
    department: "Public Health Division",
    images: [],
    timeline: [
      { date: "2024-04-28", action: "Submitted", by: "Chamara Bandara", note: "Submitted online" },
      { date: "2024-04-29", action: "Acknowledged", by: "Admin Staff", note: "Assigned to PHI" },
      { date: "2024-05-02", action: "In Progress", by: "PHI Sunil Karunaratne", note: "Site inspection done. Fumigation scheduled." },
      { date: "2024-05-05", action: "Resolved", by: "PHI Sunil Karunaratne", note: "Fumigation completed. Site owner warned." },
    ],
  },
  {
    id: "8",
    trackingId: "C-2024-1094",
    title: "Road Damage After Heavy Rain - Haldummulla Road",
    description: "Landslide debris has partially blocked Haldummulla Road after recent heavy rains. Urgent clearing needed for emergency vehicle access.",
    category: "Roads",
    status: "In Progress",
    priority: "Critical",
    submittedBy: "Kavinda Rathnayake",
    submittedDate: "2024-05-24",
    location: "Haldummulla Road, KM 12",
    assignedTo: "Emergency Response Team",
    department: "Technical Division",
    images: [],
    timeline: [
      { date: "2024-05-24", action: "Submitted", by: "Kavinda Rathnayake", note: "Emergency complaint" },
      { date: "2024-05-24", action: "Acknowledged", by: "Admin Staff", note: "Dispatched emergency response team" },
      { date: "2024-05-24", action: "In Progress", by: "Emergency Response Team", note: "Clearing operation underway" },
    ],
  },
];

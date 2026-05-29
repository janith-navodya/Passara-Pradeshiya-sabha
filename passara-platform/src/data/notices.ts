export interface Notice {
  id: string;
  title: string;
  type: "Tender" | "Announcement" | "Warning" | "Information" | "Holiday" | "Meeting";
  description: string;
  publishedDate: string;
  expiryDate: string;
  isUrgent: boolean;
  department: string;
  downloadUrl?: string;
}

export const notices: Notice[] = [
  {
    id: "1",
    title: "Water Supply Interruption – Passara Town Area (25th - 26th May 2024)",
    type: "Warning",
    description: "Water supply to Passara Town and surrounding areas will be temporarily interrupted from 25th May 8:00 AM to 26th May 5:00 PM due to urgent pipe repair works on the main supply line. Residents are advised to store adequate water before the interruption. We apologize for the inconvenience.",
    publishedDate: "2024-05-23",
    expiryDate: "2024-05-27",
    isUrgent: true,
    department: "Water Supply Division",
  },
  {
    id: "2",
    title: "Tender Notice – Road Resurfacing Project Ward 5 & 7",
    type: "Tender",
    description: "Sealed bids are invited from registered contractors for the resurfacing of roads in Ward 5 (Passara Town) and Ward 7 (Gonabokka). Tender documents available from Technical Division. Deadline for submission: 15th June 2024.",
    publishedDate: "2024-05-20",
    expiryDate: "2024-06-15",
    isUrgent: false,
    department: "Technical Division",
    downloadUrl: "#",
  },
  {
    id: "3",
    title: "Public Holiday Notice – Poson Poya Day",
    type: "Holiday",
    description: "The Passara Pradeshiya Sabha office will be closed on Poson Poya Day (22nd June 2024). All services will resume on the following working day. For emergencies, contact 055-222-2222.",
    publishedDate: "2024-05-18",
    expiryDate: "2024-06-23",
    isUrgent: false,
    department: "Administration Division",
  },
  {
    id: "4",
    title: "Annual Property Tax Payment – Final Notice (Deadline: 30th June 2024)",
    type: "Announcement",
    description: "All property owners within the Passara Pradeshiya Sabha area are reminded that the deadline for annual property tax payment is 30th June 2024. Payments can be made at the Finance Division counter or online. Late payments will attract penalties as per by-laws.",
    publishedDate: "2024-05-15",
    expiryDate: "2024-06-30",
    isUrgent: true,
    department: "Finance Division",
  },
  {
    id: "5",
    title: "Dengue Prevention Campaign – Free Fumigation Available",
    type: "Information",
    description: "The Public Health Division is conducting free fumigation services for residential and commercial properties as part of the Dengue Prevention Campaign. Contact the Public Health Office to schedule your free fumigation. Available through June 2024.",
    publishedDate: "2024-05-12",
    expiryDate: "2024-06-30",
    isUrgent: false,
    department: "Public Health Division",
  },
  {
    id: "6",
    title: "Council Monthly Meeting – Agenda Published",
    type: "Meeting",
    description: "The monthly council meeting of Passara Pradeshiya Sabha will be held on 30th May 2024 at 9:00 AM at the Council Chambers. All elected members are requested to attend. Agenda documents available from Administration Division.",
    publishedDate: "2024-05-10",
    expiryDate: "2024-05-30",
    isUrgent: false,
    department: "Administration Division",
    downloadUrl: "#",
  },
  {
    id: "7",
    title: "New Business License Application Process – Updated Guidelines",
    type: "Information",
    description: "Businesses operating within the Passara Pradeshiya Sabha area are informed of updated guidelines for business license applications effective from 1st June 2024. New application forms available from Revenue Division and on the official website.",
    publishedDate: "2024-05-08",
    expiryDate: "2024-12-31",
    isUrgent: false,
    department: "Revenue Division",
    downloadUrl: "#",
  },
  {
    id: "8",
    title: "Garbage Collection Schedule Change – May Holidays",
    type: "Announcement",
    description: "Due to public holidays in May, the garbage collection schedule has been revised. Ward 1-6: Collection on 25th May instead of 22nd May. Ward 7-18: Collection on 28th May instead of 25th May. Regular schedule resumes from June.",
    publishedDate: "2024-05-05",
    expiryDate: "2024-05-31",
    isUrgent: false,
    department: "Environmental Division",
  },
];

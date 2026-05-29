export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "Admin" | "Staff" | "Citizen" | "Manager";
  department: string;
  status: "Active" | "Inactive" | "Suspended";
  joinedDate: string;
  lastLogin: string;
  avatar: string;
  address: string;
  ward: string;
}

export const users: User[] = [
  { id: "1", name: "Lalith Bandara Ekanayake", email: "lalith@passara.ps.gov.lk", phone: "055-222-2201", role: "Admin", department: "Administration Division", status: "Active", joinedDate: "2019-01-15", lastLogin: "2024-05-24", avatar: "", address: "12, Temple Road, Passara", ward: "Ward 1" },
  { id: "2", name: "Chamari Dissanayake", email: "chamari@passara.ps.gov.lk", phone: "055-222-2202", role: "Manager", department: "Finance Division", status: "Active", joinedDate: "2020-03-10", lastLogin: "2024-05-24", avatar: "", address: "45, Hospital Road, Passara", ward: "Ward 2" },
  { id: "3", name: "Ranjith Dissanayake", email: "ranjith@passara.ps.gov.lk", phone: "055-222-2203", role: "Manager", department: "Technical Division", status: "Active", joinedDate: "2018-06-01", lastLogin: "2024-05-23", avatar: "", address: "78, Main Street, Passara", ward: "Ward 3" },
  { id: "4", name: "Kumara Perera", email: "kumara.perera@gmail.com", phone: "071-234-5678", role: "Citizen", department: "N/A", status: "Active", joinedDate: "2024-01-20", lastLogin: "2024-05-22", avatar: "", address: "23, Mahaweli Road, Passara", ward: "Ward 4" },
  { id: "5", name: "Anura Silva", email: "anura.silva@gmail.com", phone: "077-345-6789", role: "Citizen", department: "N/A", status: "Active", joinedDate: "2024-02-14", lastLogin: "2024-05-21", avatar: "", address: "56, Market Street, Passara", ward: "Ward 1" },
  { id: "6", name: "Niluka Jayawardana", email: "niluka@passara.ps.gov.lk", phone: "055-222-2205", role: "Manager", department: "Environmental Division", status: "Active", joinedDate: "2021-08-15", lastLogin: "2024-05-24", avatar: "", address: "34, School Road, Passara", ward: "Ward 5" },
  { id: "7", name: "Saman Rajapaksha", email: "saman.r@gmail.com", phone: "070-456-7890", role: "Citizen", department: "N/A", status: "Active", joinedDate: "2023-11-05", lastLogin: "2024-05-20", avatar: "", address: "89, Gonabokka Road, Passara", ward: "Ward 8" },
  { id: "8", name: "Nimali Fernando", email: "nimali.f@gmail.com", phone: "076-567-8901", role: "Citizen", department: "N/A", status: "Active", joinedDate: "2024-03-22", lastLogin: "2024-05-19", avatar: "", address: "12, Junction Road, Passara", ward: "Ward 2" },
  { id: "9", name: "Priya Wickramasinghe", email: "priya.w@gmail.com", phone: "072-678-9012", role: "Citizen", department: "N/A", status: "Active", joinedDate: "2023-09-10", lastLogin: "2024-05-18", avatar: "", address: "45, Hospital Road, Passara", ward: "Ward 3" },
  { id: "10", name: "Asanka Kumara", email: "asanka@passara.ps.gov.lk", phone: "055-222-2206", role: "Staff", department: "Revenue Division", status: "Active", joinedDate: "2022-05-01", lastLogin: "2024-05-23", avatar: "", address: "67, Library Road, Passara", ward: "Ward 1" },
  { id: "11", name: "Kumudini Rathnayake", email: "kumudini@passara.ps.gov.lk", phone: "055-222-2207", role: "Manager", department: "Community Development Division", status: "Active", joinedDate: "2020-11-15", lastLogin: "2024-05-22", avatar: "", address: "23, Temple Road, Passara", ward: "Ward 6" },
  { id: "12", name: "Chamara Bandara", email: "chamara.b@gmail.com", phone: "078-789-0123", role: "Citizen", department: "N/A", status: "Active", joinedDate: "2023-06-28", lastLogin: "2024-05-15", avatar: "", address: "90, Ward 4, Passara", ward: "Ward 4" },
];

export const reservations = [
  { id: "1", hallName: "Council Chamber", bookedBy: "Samith Perera", purpose: "Wedding Reception", date: "2024-06-15", startTime: "4:00 PM", endTime: "10:00 PM", status: "Confirmed", guests: 200, fee: 25000, contactPhone: "077-111-2222", submittedDate: "2024-05-10" },
  { id: "2", hallName: "Main Hall", bookedBy: "Sinhala Cultural Association", purpose: "Annual Cultural Show", date: "2024-06-22", startTime: "2:00 PM", endTime: "8:00 PM", status: "Pending", guests: 350, fee: 35000, contactPhone: "055-333-4444", submittedDate: "2024-05-15" },
  { id: "3", hallName: "Conference Room", bookedBy: "Passara Business Forum", purpose: "Business Seminar", date: "2024-05-30", startTime: "9:00 AM", endTime: "5:00 PM", status: "Confirmed", guests: 80, fee: 12000, contactPhone: "071-555-6666", submittedDate: "2024-05-05" },
  { id: "4", hallName: "Main Hall", bookedBy: "Ranjith Kumara", purpose: "Birthday Party", date: "2024-06-08", startTime: "6:00 PM", endTime: "11:00 PM", status: "Cancelled", guests: 150, fee: 20000, contactPhone: "076-777-8888", submittedDate: "2024-04-28" },
  { id: "5", hallName: "Council Chamber", bookedBy: "Passara Teachers' Association", purpose: "Annual Prize Giving", date: "2024-07-10", startTime: "2:00 PM", endTime: "7:00 PM", status: "Pending", guests: 250, fee: 28000, contactPhone: "072-999-0000", submittedDate: "2024-05-20" },
];

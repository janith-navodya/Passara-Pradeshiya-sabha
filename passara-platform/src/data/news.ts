export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedDate: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Clean Passara Program – Community Awareness Campaign Successfully Completed",
    slug: "clean-passara-program-2024",
    excerpt: "The Passara Pradeshiya Sabha successfully concluded its month-long Clean Passara awareness campaign with participation from over 2,000 residents across all wards.",
    content: "The Passara Pradeshiya Sabha successfully concluded its month-long Clean Passara awareness campaign with participation from over 2,000 residents across all 18 wards. The program focused on solid waste management, plastic reduction, and community cleanliness standards.",
    category: "Environment",
    author: "Media Unit, Passara PS",
    publishedDate: "2024-05-20",
    image: "/images/news-1.jpg",
    featured: true,
    tags: ["Environment", "Community", "Cleanliness"],
  },
  {
    id: "2",
    title: "Mahaweli Road Development Project – Phase II Update",
    slug: "mahaweli-road-phase-2",
    excerpt: "Major progress reported on the Mahaweli Road Development Project Phase II. Construction is now 75% complete with the target completion date set for August 2024.",
    content: "Significant progress has been made on the Mahaweli Road Development Project Phase II. The project, funded jointly by the Provincial Council and Pradeshiya Sabha, aims to upgrade 12.5 km of road surface to improve connectivity for over 8,000 residents.",
    category: "Infrastructure",
    author: "Technical Division",
    publishedDate: "2024-05-18",
    image: "/images/news-2.jpg",
    featured: true,
    tags: ["Roads", "Infrastructure", "Development"],
  },
  {
    id: "3",
    title: "Passara Pradeshiya Sabha Wins Provincial Award for Best Governance",
    slug: "provincial-award-best-governance",
    excerpt: "Passara Pradeshiya Sabha has been awarded the Provincial Council's Best Local Governance Award for 2024, recognizing excellence in public service delivery and citizen engagement.",
    content: "The Passara Pradeshiya Sabha has been honoured with the Uva Provincial Council's Best Local Governance Award for 2024. The award recognizes the Sabha's outstanding performance in complaint management, infrastructure development, and digital service delivery.",
    category: "Achievement",
    author: "Chairman's Office",
    publishedDate: "2024-05-15",
    image: "/images/news-3.jpg",
    featured: false,
    tags: ["Award", "Governance", "Achievement"],
  },
  {
    id: "4",
    title: "New Water Supply System Commissioned for Raththala and Surrounding Villages",
    slug: "water-supply-raththala",
    excerpt: "A brand new piped water supply system serving 450 households in Raththala, Gonabokka, and surrounding villages was officially commissioned by the Chairman.",
    content: "Chairman Nihal Rajapaksha officially commissioned the new piped water supply system serving 450 households across Raththala, Gonabokka, Meegahapelessa and surrounding villages. The project cost LKR 35 million and was completed ahead of schedule.",
    category: "Infrastructure",
    author: "Water Supply Division",
    publishedDate: "2024-05-10",
    image: "/images/news-4.jpg",
    featured: false,
    tags: ["Water Supply", "Infrastructure", "Villages"],
  },
  {
    id: "5",
    title: "Passara Youth Development Program – Applications Now Open",
    slug: "youth-development-program-2024",
    excerpt: "The Community Development Division is accepting applications for the 2024 Youth Development Program offering vocational training, leadership development, and entrepreneurship support.",
    content: "The Community Development Division is now accepting applications for the 2024 Youth Development Program. The program offers three months of vocational training in areas including IT, culinary arts, agriculture, and handicrafts, along with entrepreneurship mentoring.",
    category: "Community",
    author: "Community Development Division",
    publishedDate: "2024-05-08",
    image: "/images/news-5.jpg",
    featured: false,
    tags: ["Youth", "Training", "Community"],
  },
  {
    id: "6",
    title: "Passara Tourism Festival 2024 – Celebrating Nature and Culture",
    slug: "tourism-festival-2024",
    excerpt: "The annual Passara Tourism Festival draws thousands of visitors to explore the stunning landscapes, waterfalls, and cultural heritage of the Passara division.",
    content: "The Passara Tourism Festival 2024 successfully attracted over 15,000 visitors during the three-day event. Highlights included guided tours to Dunhinda Falls vicinity areas, cultural performances, local food stalls, and photography competitions showcasing the region's natural beauty.",
    category: "Tourism",
    author: "Media Unit, Passara PS",
    publishedDate: "2024-04-28",
    image: "/images/news-6.jpg",
    featured: false,
    tags: ["Tourism", "Culture", "Festival"],
  },
];

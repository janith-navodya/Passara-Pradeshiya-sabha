export interface TourismSpot {
  id: string;
  name: string;
  type: "Waterfall" | "Nature" | "Cultural" | "Scenic" | "Wildlife";
  description: string;
  shortDescription: string;
  location: string;
  distance: string;
  entryFee: string;
  openingHours: string;
  bestTime: string;
  highlights: string[];
  image: string;
  rating: number;
  reviews: number;
}

export const tourismSpots: TourismSpot[] = [
  {
    id: "1",
    name: "Dunhinda Falls Viewpoint Trail",
    type: "Waterfall",
    description: "Located near Badulla, the trail to Dunhinda Falls passes through lush Passara division territory. The 'Bridal Veil' waterfall drops 64 meters into a stunning pool below. The trek through the jungle offers breathtaking views of the surrounding hills and valleys. This is one of Sri Lanka's most magnificent waterfalls and a must-visit destination.",
    shortDescription: "Sri Lanka's most magnificent waterfall with a 64-meter drop, accessible via jungle trail from Passara.",
    location: "Dunhinda, Near Passara-Badulla Border",
    distance: "8 km from Passara Town",
    entryFee: "LKR 200 (Local), USD 10 (Foreign)",
    openingHours: "6:00 AM – 6:00 PM",
    bestTime: "November to April",
    highlights: ["64m waterfall", "Jungle trekking", "Natural swimming pool", "Bird watching"],
    image: "/images/tourism-dunhinda.jpg",
    rating: 4.8,
    reviews: 2340,
  },
  {
    id: "2",
    name: "Passara Scenic Viewpoint – Ella Gap View",
    type: "Scenic",
    description: "The Passara hill region offers spectacular panoramic views toward the Ella Gap and the southern plains. During clear weather, visitors can see all the way to the southern coast. The viewpoint is easily accessible by road and offers stunning sunrise and sunset views over the misty mountain ranges.",
    shortDescription: "Panoramic viewpoint with breathtaking views of Ella Gap, mountains, and southern plains.",
    location: "Passara Hill Road, Ward 12",
    distance: "5 km from Passara Town",
    entryFee: "Free",
    openingHours: "Open 24 hours",
    bestTime: "Year round (best: December to March)",
    highlights: ["Panoramic mountain views", "Sunrise watching", "Photography", "Cool climate"],
    image: "/images/tourism-viewpoint.jpg",
    rating: 4.6,
    reviews: 1580,
  },
  {
    id: "3",
    name: "Passara Tea Estate Walking Trails",
    type: "Nature",
    description: "The lush green tea estates surrounding Passara offer guided walking trails through manicured tea gardens. Visitors can observe tea plucking, visit tea factories to see the production process, and enjoy fresh Ceylon tea with spectacular mountain backdrops. A truly immersive Sri Lankan experience.",
    shortDescription: "Guided walks through beautiful tea estates with factory tours and fresh Ceylon tea tasting.",
    location: "Passara Estate Area, Multiple Locations",
    distance: "2–6 km from Passara Town",
    entryFee: "LKR 500 per person (includes tea tasting)",
    openingHours: "7:00 AM – 5:00 PM",
    bestTime: "Year round",
    highlights: ["Tea plucking experience", "Factory tours", "Tea tasting", "Mountain scenery"],
    image: "/images/tourism-tea.jpg",
    rating: 4.7,
    reviews: 1890,
  },
  {
    id: "4",
    name: "Gonabokka Ancient Temple Complex",
    type: "Cultural",
    description: "The Gonabokka Raja Maha Viharaya is an ancient Buddhist temple complex dating back over 500 years. The temple features stunning traditional murals, ancient rock inscriptions, and a sacred Bodhi tree. The peaceful forested setting makes it a spiritual retreat as well as a historical treasure.",
    shortDescription: "Ancient 500-year-old Buddhist temple with traditional murals, inscriptions, and sacred grounds.",
    location: "Gonabokka Village, Passara",
    distance: "12 km from Passara Town",
    entryFee: "Free (donations welcome)",
    openingHours: "5:30 AM – 7:00 PM",
    bestTime: "Poya days for ceremonies",
    highlights: ["Ancient murals", "Rock inscriptions", "Sacred Bodhi tree", "Peaceful atmosphere"],
    image: "/images/tourism-temple.jpg",
    rating: 4.5,
    reviews: 890,
  },
  {
    id: "5",
    name: "Passara Forest Reserve – Biodiversity Trail",
    type: "Wildlife",
    description: "The Passara Forest Reserve is a pristine natural forest area rich in biodiversity. Guided trails lead visitors through native forests home to various bird species, endemic plants, butterflies, and small mammals. The reserve is part of the Knuckles-Horton Plains biodiversity corridor.",
    shortDescription: "Pristine forest reserve with guided biodiversity trails, endemic birds, and native flora.",
    location: "Passara Forest Reserve, Eastern Boundary",
    distance: "10 km from Passara Town",
    entryFee: "LKR 300 (Local), USD 15 (Foreign)",
    openingHours: "6:00 AM – 4:00 PM (guided tours only)",
    bestTime: "November to March",
    highlights: ["Endemic bird species", "Native flora", "Butterfly garden", "Nature photography"],
    image: "/images/tourism-forest.jpg",
    rating: 4.4,
    reviews: 650,
  },
  {
    id: "6",
    name: "Passara Market Heritage Walk",
    type: "Cultural",
    description: "Explore the vibrant cultural heart of Passara through a guided heritage walk covering the traditional market, colonial-era buildings, local craft shops, and street food stalls. Experience authentic Sri Lankan upcountry life, local cuisine, and the warm hospitality of the Passara community.",
    shortDescription: "Guided heritage walk through traditional market, colonial buildings, and local craft shops.",
    location: "Passara Town Center",
    distance: "Town Center",
    entryFee: "Free (guide: LKR 500)",
    openingHours: "7:00 AM – 6:00 PM",
    bestTime: "Morning hours (market days: Tuesday, Saturday)",
    highlights: ["Traditional market", "Local cuisine", "Craft shopping", "Colonial architecture"],
    image: "/images/tourism-market.jpg",
    rating: 4.3,
    reviews: 1120,
  },
];

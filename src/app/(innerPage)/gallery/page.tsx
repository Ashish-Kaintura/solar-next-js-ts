import GalleryPageClient from "@/components/sections/gallery/GalleryPageClient";
import { Metadata } from "next";

// 1. Next.js processes this perfectly on the server side
export const metadata: Metadata = {
  title: "Gallery | Solar Company in Lucknow | Vasudhaiv Enterprises",
  description:
    "Explore our visual gallery showcasing successful solar panel installations, residential rooftop systems, and commercial solar projects by Vasudhaiv Enterprises in Lucknow, Uttar Pradesh.",
  keywords: [
    "Solar gallery Lucknow",
    "solar panel installation images",
    "Vasudhaiv Enterprises projects",
  ],
};

export default function GalleryPage() {
  // 2. Safely renders the interactive client layout
  return <GalleryPageClient />;
}

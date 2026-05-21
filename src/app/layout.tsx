import type { Metadata } from "next";
import { Montserrat_Alternates, Plus_Jakarta_Sans } from "next/font/google"; // <--- Google Fonts Imported
import "@/assets/css/all.min.css";
import "@/assets/scss/main.scss";
import "@/assets/css/animate.css";
import "react-modal-video/scss/modal-video.scss";
import AddAnimation from "@/components/ui/addAnimation";
import CustomMouseCursor from "@/components/ui/customMouseCursor";

// 1. Montserrat Alternates Font Initialize kiya (Headings & Body ke liye)
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates", // Agar future me variable use karna ho
});

// 2. Plus Jakarta Sans Font Initialize kiya (Backup/Secondary font template ka)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Sungo  - Ecology & Solar Energy Next.js Template",
  description: "Sungo  - Ecology & Solar Energy Next.js and Bootstrap Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Dono fonts ki classes ko html/body par inject kar diya */}
      <body
        className={`${montserratAlternates.className} ${plusJakartaSans.className}`}
      >
        <AddAnimation />
        <CustomMouseCursor />
        {children}
      </body>
    </html>
  );
}

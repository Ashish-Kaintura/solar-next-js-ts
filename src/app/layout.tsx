import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // <--- Sirf clean font rakha hai
import "@/assets/css/all.min.css";
import "@/assets/scss/main.scss";
import "@/assets/css/animate.css";
import "react-modal-video/scss/modal-video.scss";
import AddAnimation from "@/components/ui/addAnimation";
import CustomMouseCursor from "@/components/ui/customMouseCursor";

// Sirf Plus Jakarta Sans ko initialize kiya
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Solar Company in Lucknow | Vasudhaiv Enterprises",
  description:
    "Trusted solar company in Lucknow offering rooftop solar installation, AMC, solar pump, street light & atta chakki for homes and businesses. Book free survey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Ab pooray body aur website par sirf yehi ek font apply hoga */}
      <body
        className={`${plusJakartaSans.variable} ${plusJakartaSans.className}`}
      >
        <AddAnimation />
        <CustomMouseCursor />
        {children}
      </body>
    </html>
  );
}

"use client";
import PageTitle from "@/components/sections/pageTitle";
import React, { useState } from "react";

// Mock data for the gallery
interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
    title: "Valley of Light",
    category: "Nature",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60",
    title: "Misty Mountains",
    category: "Nature",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&auto=format&fit=crop&q=60",
    title: "Forest Path",
    category: "Woodland",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1472214222541-d510753a4707?w=600&auto=format&fit=crop&q=60",
    title: "Serene Lake",
    category: "Water",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60",
    title: "Minimal Tech",
    category: "Workplace",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&auto=format&fit=crop&q=60",
    title: "Abstract Skies",
    category: "Abstract",
  },
];

export default function GalleryPage() {
  // Track hovered item ID to simulate CSS :hover via inline styles
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // --- Inline Styles object ---
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      padding: "2rem",
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    title: {
      fontSize: "2.5rem",
      color: "#212529",
      marginBottom: "0.5rem",
      fontWeight: 700,
    },
    subtitle: {
      color: "#6c757d",
      fontSize: "1.1rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    imageWrapper: {
      position: "relative",
      overflow: "hidden",
      paddingTop: "66.67%", // 3:2 Aspect Ratio
      backgroundColor: "#e9ecef",
    },
    image: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },
    infoContainer: {
      padding: "1.25rem",
    },
    category: {
      textTransform: "uppercase",
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "1px",
      color: "#0d6efd",
      marginBottom: "0.25rem",
    },
    itemTitle: {
      fontSize: "1.25rem",
      margin: 0,
      color: "#212529",
      fontWeight: 600,
    },
  };

  return (
    <>
      <PageTitle title="Gallery" currentPage="Gallery" />
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Visual Gallery</h1>
          <p style={styles.subtitle}>
            A curated collection of beautiful moments
          </p>
        </header>

        <main style={styles.grid}>
          {GALLERY_DATA.map((item) => {
            const isHovered = hoveredId === item.id;

            // Dynamic styles combining base styles with hover states
            const dynamicCardStyle = {
              ...styles.card,
              transform: isHovered ? "translateY(-8px)" : "translateY(0)",
              boxShadow: isHovered
                ? "0 12px 20px rgba(0, 0, 0, 0.1)"
                : "0 4px 6px rgba(0, 0, 0, 0.05)",
            };

            const dynamicImageStyle = {
              ...styles.image,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            };

            return (
              <div
                key={item.id}
                style={dynamicCardStyle}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div style={styles.imageWrapper}>
                  <img
                    src={item.url}
                    alt={item.title}
                    style={dynamicImageStyle}
                  />
                </div>
                <div style={styles.infoContainer}>
                  <div style={styles.category}>{item.category}</div>
                  <h3 style={styles.itemTitle}>{item.title}</h3>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}

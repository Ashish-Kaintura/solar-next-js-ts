"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageTitle from "@/components/sections/pageTitle";

interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    url: "/img/gallery/unnamed (1).jpg.jpeg",
    title: "On-Grid Residential Solar System",
    category: "Residential Solar",
  },
  {
    id: 2,
    url: "/img/gallery/unnamed (2).jpg.jpeg",
    title: "Commercial Rooftop Solar Plant",
    category: "Commercial Solar",
  },
  {
    id: 3,
    url: "/img/gallery/unnamed (3).jpg.jpeg",
    title: "Agricultural Solar Water Pump System",
    category: "Solar Irrigation",
  },
  {
    id: 4,
    url: "/img/gallery/unnamed (4).jpg.jpeg",
    title: "Solar Powered Atta Chakki Setup",
    category: "Industrial Solar",
  },
  {
    id: 5,
    url: "/img/gallery/unnamed (5).jpg.jpeg",
    title: "Integrated Solar Street Lighting",
    category: "Public Lighting",
  },
  {
    id: 6,
    url: "/img/gallery/unnamed (6).jpg.jpeg",
    title: "Rooftop Solar with Subsidy Support",
    category: "Residential Solar",
  },
  // {
  //   id: 7,
  //   url: "/img/gallery/unnamed (7).jpg.jpeg",
  //   title: "High-Capacity Industrial Solar Array",
  //   category: "Commercial Solar",
  // },
  {
    id: 8,
    url: "/img/gallery/unnamed (8).jpg.jpeg",
    title: "Solar Panel Cleaning & Maintenance",
    category: "Solar AMC",
  },
  {
    id: 9,
    url: "/img/gallery/unnamed (9).jpg.jpeg",
    title: "Off-Grid Solar System with Battery Backup",
    category: "Residential Solar",
  },
  {
    id: 10,
    url: "/img/gallery/unnamed (10).jpg.jpeg",
    title: "High-Efficiency Monocrystalline Panels",
    category: "Solar Products",
  },
  {
    id: 11,
    url: "/img/gallery/unnamed (11).jpg.jpeg",
    title: "On-Grid Solar Inverter Setup",
    category: "Technical Installation",
  },
  {
    id: 12,
    url: "/img/gallery/unnamed (12).webp",
    title: "Warehouse Rooftop Solar Installation",
    category: "Commercial Solar",
  },
  {
    id: 13,
    url: "/img/gallery/unnamed (13).webp",
    title: "Net Metering Compliant Solar Setup",
    category: "Technical Installation",
  },
];

export default function GalleryPageClient() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
      /* Changed minmax from 300px to 250px to make square layouts fit nicer on medium desktop screens */
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
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
      width: "100%",
      paddingTop: "100%", // CHANGED: Forces a strict 1:1 square box layout matching 200x200
      backgroundColor: "#e9ecef",
    },
    image: {
      transition: "transform 0.5s ease",
      objectFit: "cover",
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
            Explore our professional solar panel installations across Lucknow
          </p>
        </header>

        <main style={styles.grid}>
          {GALLERY_DATA.map((item) => {
            const isHovered = hoveredId === item.id;

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
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={item.id <= 3}
                    style={dynamicImageStyle}
                  />
                </div>
                <div style={styles.infoContainer}>
                  <div style={styles.category}>{item.category}</div>
                  {/* <h3 style={styles.itemTitle}>{item.title}</h3> */}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}

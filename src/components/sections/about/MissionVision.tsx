"use client";

import React, { CSSProperties } from "react";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";

const MissionVision: React.FC = () => {
  // Typescript styles
  const cardStyle: CSSProperties = {
    background: "#ffffff",
    padding: "50px 40px",
    borderRadius: "24px",
    border: "1px solid #f1f1f1",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
    height: "100%",
    transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    position: "relative",
    bottom: "0",
    overflow: "hidden",
  };

  const iconCircle: CSSProperties = {
    width: "70px",
    height: "70px",
    borderRadius: "16px", // Changed to squircles for a modern look
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 177, 41, 0.12)",
    marginBottom: "30px",
  };

  return (
    <section
      className="mission-vision-section section-padding fix"
      style={{
        background: "#f9fbff",
        position: "relative",
        backgroundImage: `radial-gradient(#e5e7eb 0.5px, transparent 0.5px)`,
        backgroundSize: `24px 24px`, // Subtle dot pattern background
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Mission Column */}
          <div className="col-lg-6 col-md-10 wow fadeInUp" data-delay=".3s">
            <div style={cardStyle} className="hover-card">
              {/* Corner Accent */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "120px",
                  height: "120px",
                  background:
                    "radial-gradient(circle at top right, rgba(255,165,0,0.08), transparent 70%)",
                }}
              />

              <div style={iconCircle}>
                <Image
                  src="/img/about/icon-mission.svg"
                  width={38}
                  height={38}
                  alt="Mission Icon"
                />
              </div>

              <SectionTitle>
                <SectionTitle.SubTitle>Our Purpose</SectionTitle.SubTitle>
                <SectionTitle.Title>
                  Our <span>Mission</span>
                </SectionTitle.Title>
              </SectionTitle>

              <div className="mt-4">
                <p
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    lineHeight: "1.5",
                  }}
                >
                  Empowering Uttar Pradesh with affordable, eco-friendly solar
                  energy.
                </p>
                <p
                  className="text-muted mt-3"
                  style={{ lineHeight: "1.8", fontSize: "1rem" }}
                >
                  We provide solar plants that assist your switch to sustainable
                  energy and long-term savings. Our goal is to make the
                  transition seamless and financially rewarding for every
                  rooftop.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Column */}
          <div className="col-lg-6 col-md-10 wow fadeInUp" data-delay=".5s">
            <div style={cardStyle} className="hover-card">
              {/* Corner Accent */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "120px",
                  height: "120px",
                  background:
                    "radial-gradient(circle at top right, rgba(0,123,255,0.08), transparent 70%)",
                }}
              />

              <div style={iconCircle} className="vision-icon-bg">
                <Image
                  src="/img/about/icon-vision.svg"
                  width={38}
                  height={38}
                  alt="Vision Icon"
                />
              </div>

              <SectionTitle>
                <SectionTitle.SubTitle>Our Future</SectionTitle.SubTitle>
                <SectionTitle.Title>
                  Our <span>Vision</span>
                </SectionTitle.Title>
              </SectionTitle>

              <div className="mt-4">
                <p
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    lineHeight: "1.5",
                  }}
                >
                  Envisioning a greener, energy-independent Uttar Pradesh.
                </p>
                <p
                  className="text-muted mt-3"
                  style={{ lineHeight: "1.8", fontSize: "1rem" }}
                >
                  Innovation for new generations starts with renewable energy.
                  By reducing reliance on traditional sources, we build a future
                  of environmental harmony and energy independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08) !important;
          border-color: #ffb129 !important;
          background: #fff !important;
        }
        .vision-icon-bg {
          background: rgba(0, 123, 255, 0.1) !important;
        }
        span {
          color: #ffb129; /* Match your brand orange */
        }
      `}</style>
    </section>
  );
};

export default MissionVision;

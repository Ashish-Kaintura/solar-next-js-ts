import React from "react";

// Accept the single 'service' object as a prop
export default function HeroBanner({ service }: { service: any }) {
  // Safety check: if no service data is passed, don't render anything to avoid errors
  if (!service) return null;

  return (
    <section
      style={{
        width: "100%",
        height: "70vh",
        minHeight: "520px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${service.bannerImage || "/img/breadcrumb.jpg"}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.82), rgba(0,0,0,0.35))",
          zIndex: 2,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 6%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          {/* Tagline */}
          {service.bannertagline && (
            <span
              style={{
                display: "inline-block",
                background: "var(--theme)", // Using your global color!
                color: "white",
                padding: "8px 18px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "22px",
              }}
            >
              {service.bannertagline}
            </span>
          )}

          {/* Dynamic Title */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 2vw, 5rem)",
              lineHeight: "1.05",
              fontWeight: "800",
              color: "#ffffff",
              margin: "0 0 24px 0",
              wordBreak: "break-word",
            }}
          >
            {service.bannerTitle || service.title}
          </h1>

          {/* Dynamic Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
              lineHeight: "1.7",
              color: "#e2e8f0",
              marginBottom: "34px",
            }}
          >
            {service.bannerSubTitle}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              style={{
                background: "var(--theme)",
                color: "white",
                border: "none",
                padding: "15px 32px",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Get Free Quote
            </button>

            <button
              style={{
                background: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.35)",
                padding: "15px 32px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

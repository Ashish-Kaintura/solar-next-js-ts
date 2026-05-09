"use client";
import React from "react";
import SectionTitle from "@/components/ui/sectionTitle";
import { CheckCircle2, MapPin } from "lucide-react";

const AreaService = () => {
  const lucknowAreas = [
    "Gomti Nagar",
    "Indira Nagar",
    "Hazratganj",
    "Alambagh",
    "Chinhat",
    "Rajajipuram",
    "Aashiyana",
  ];
  const otherAreas = [
    "Kanpur",
    "Ayodhya",
    "Barabanki",
    "Unnao",
    "Sitapur",
    "Raebareli",
    "Prayagraj",
    "Varanasi",
  ];

  const installationSteps = [
    { title: "Free Site Survey", delay: ".3s" },
    { title: "Design & Planning", delay: ".5s" },
    { title: "Installation by Experts", delay: ".7s" },
    { title: "Net Metering & Activation", delay: ".9s" },
  ];

  return (
    <section
      className="service-area-section fix section-padding d-flex justify-content-center align-items-center  bg-cover vh-100  py-5 overflow-hidden"
      style={{ backgroundImage: 'url("/img/service/service-bg.jpg")' }}
    >
      <div className="container">
        <div className="row g-5">
          {/* Left Column: Service Areas */}
          <div className="col-lg-7 wow slideInLeft" data-wow-delay=".2s">
            <SectionTitle className="mb-4">
              <SectionTitle.SubTitle>Locations We Cover</SectionTitle.SubTitle>
              <SectionTitle.Title>
                Areas of Service for <br /> Solar Installation
              </SectionTitle.Title>
            </SectionTitle>

            <p
              className="text-muted mb-5 lead wow slideUp"
              data-wow-delay=".4s"
            >
              We currently provide solar panel installation services across the
              City of Lucknow and the neighboring districts.
            </p>

            <div className="row">
              {/* Lucknow Column */}
              <div className="col-md-6 mb-4 wow slideUp" data-wow-delay=".5s">
                <div className="d-flex align-items-center mb-3">
                  <MapPin className="text-primary me-2" size={20} />
                  <h5 className="fw-bold mb-0">Lucknow Areas</h5>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {lucknowAreas.map((area, index) => (
                    <span
                      key={index}
                      className="badge bg-light text-dark border px-3 py-2 fw-normal rounded-pill"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other Districts Column */}
              <div className="col-md-6 mb-4 wow slideUp" data-wow-delay=".7s">
                <div className="d-flex align-items-center mb-3">
                  <MapPin className="text-primary me-2" size={20} />
                  <h5 className="fw-bold mb-0">Other Areas</h5>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {otherAreas.map((area, index) => (
                    <span
                      key={index}
                      className="badge bg-light text-dark border px-3 py-2 fw-normal rounded-pill"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Installation System */}
          <div className="col-lg-5">
            <div
              className="p-4 p-xl-5 bg-white shadow-sm border rounded-4 h-100 wow slideInRight"
              data-wow-delay=".3s"
            >
              <SectionTitle className="mb-4">
                <SectionTitle.SubTitle>Our Workflow</SectionTitle.SubTitle>
                <SectionTitle.Title style={{ fontSize: "28px" }}>
                  Installation System
                </SectionTitle.Title>
              </SectionTitle>

              <div className="installation-steps mt-4">
                {installationSteps.map((step, index) => (
                  <div
                    className="d-flex align-items-center mb-4 wow slideUp"
                    data-wow-delay={step.delay}
                    key={index}
                  >
                    <div className="step-icon me-3">
                      <CheckCircle2 className="text-success" size={24} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0">{step.title}</h6>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 pt-3 border-top wow fadeIn"
                data-wow-delay="1.1s"
              >
                <p className="small text-muted mb-0">
                  <strong>Hassle-free Experience:</strong> We ensure a smooth
                  installation from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .badge {
          transition: transform 0.3s ease;
        }
        .badge:hover {
          transform: translateY(-3px);
          background-color: var(--bs-primary) !important;
          color: white !important;
        }
      `}</style>
    </section>
  );
};

export default AreaService;

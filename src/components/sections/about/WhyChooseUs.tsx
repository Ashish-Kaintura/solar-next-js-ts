"use client";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";

const whyChooseData = [
  {
    title: "Solar installation knowledge",
    icon: "/img/icon/check.svg", // Aap apne icons ka path yahan daal sakte hain
    delay: ".3",
  },
  {
    title: "Durable and optimum solar products",
    icon: "/img/icon/check.svg",
    delay: ".4",
  },
  {
    title: "Affordability of a site excursion",
    icon: "/img/icon/check.svg",
    delay: ".5",
  },
  {
    title: "Awareness of allowances",
    icon: "/img/icon/check.svg",
    delay: ".6",
  },
  {
    title: "Policy of openness",
    icon: "/img/icon/check.svg",
    delay: ".7",
  },
  {
    title: "Assurity in care, support and service",
    icon: "/img/icon/check.svg",
    delay: ".8",
  },
];

const brands = [
  "Adani Solar",
  "Tata Power Solar",
  "Waaree Solar",
  "Vikram Solar",
  "Luminous",
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section section-padding fix bg-light">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="why-choose-content">
              {/* Aapka SubTitle aur Title pattern */}
              <SectionTitle>
                <SectionTitle.SubTitle>Our Advantages</SectionTitle.SubTitle>
                <SectionTitle.Title>
                  Why Choose Vasudhaiv Enterprises
                </SectionTitle.Title>
              </SectionTitle>

              <p className="mt-3 mt-md-0 wow slideUp" data-delay=".4">
                We are a corporation that considers reliability, in all aspects,
                when it comes to solar solutions, in conjunction with
                excellence.
              </p>

              <div className="why-choose-list-wrapper mt-4">
                <div className="row g-3">
                  {whyChooseData.map((item, index) => (
                    <div
                      className="col-md-6 wow slideUp"
                      data-delay={item.delay}
                      key={index}
                    >
                      <div className="why-choose-list-item d-flex align-items-center">
                        {/* Checkmark Icon */}
                        <div className="icon me-2">
                          <span className="text-primary">✔</span>
                        </div>
                        <p className="mb-0 fw-bold">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="trusted-brands-box p-4 p-md-5 bg-white shadow rounded wow slideUp"
              data-delay=".5"
            >
              <SectionTitle className="mb-4">
                <SectionTitle.SubTitle>⚡ Solar Partners</SectionTitle.SubTitle>
                <SectionTitle.Title>
                  Trusted Solar Brands We Use
                </SectionTitle.Title>
              </SectionTitle>

              <div className="brand-tags d-flex flex-wrap gap-2">
                {brands.map((brand, index) => (
                  <span
                    key={index}
                    className="badge bg-light text-dark border p-3 fs-6"
                    style={{ transition: "0.3s" }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

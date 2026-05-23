import { serviceOneData } from "@/db/serviceOneData";
import { notFound } from "next/navigation";
import PageTitle from "@/components/sections/pageTitle";
import ServiceDetailsVideoPopup from "@/components/sections/services/serviceDetailsVideoPopup";
import ServiceSidebar from "@/components/sections/services/serviceSidebar";
import Image from "next/image";
import ServiceFAQ from "@/components/sections/services/ServiceFAQ";
import HeroBanner from "@/components/sections/services/HeroBanner";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

// Generates dynamic metadata based on the specific service data
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = serviceOneData.find(
    (item) => item.id.toString() === params.id,
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.metatitle || "Service Details"} |vasudhaivaentserprises`,
    description:
      service.metadesc || "Learn more about our professional services.",
    openGraph: {
      title: service.title,
      description: service.metadesc,
      images: [
        {
          url: service.mainimg || "/img/service/details-1.jpg",
          alt: service.subtitle || service.metatitle,
        },
      ],
    },
  };
}

// Generates static paths for better performance (SSG)
export async function generateStaticParams() {
  return serviceOneData.map((service) => ({
    id: service.id.toString(),
  }));
}

const ServiceDetails = ({ params }: PageProps) => {
  // Find the specific service based on the URL ID
  const service: any = serviceOneData.find(
    (item) => item.id.toString() === params.id,
  );

  // If service is not found, trigger 404
  if (!service) {
    notFound();
  }

  return (
    <>
      {/* <PageTitle title={service.title} currentPage={service.title} /> */}
      <HeroBanner service={service} />
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              {/* Sidebar */}
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <ServiceSidebar service={service} />
              </div>

              {/* Main Content */}
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  {/* Hero Image & Intro */}
                  <div className="details-image mb-4">
                    <Image
                      width={856}
                      height={529}
                      sizes="100vw"
                      src={service.mainimg || "/img/service/details-1.jpg"}
                      alt={service.subtitle}
                      className="rounded shadow-sm w-100 h-50"
                    />
                  </div>

                  <div className="details-content">
                    <h3 className="mb-3" style={{ color: "var(--header)" }}>
                      {service.subtitle}
                    </h3>
                    <p style={{ color: "var(--text)" }}>
                      {service.description}
                    </p>
                    <br />
                    <p style={{ color: "var(--text)" }}>
                      {service.detailsDescription}
                    </p>

                    {/* Features & Video Section */}
                    <div
                      className="details-video-items mt-4 p-4 rounded shadow-sm border"
                      style={{
                        backgroundColor: "var(--bg)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {/* <ServiceDetailsVideoPopup /> */}
                      <div className="content mt-4 mt-md-0 ms-md-4">
                        <h4 style={{ color: "var(--header)" }}>
                          {service.serviceTitle}
                        </h4>
                        <h6 className="mt-3 text-theme">
                          {service.servicesubline}
                        </h6>
                        {/* <h6 className="mt-3">Our offerings include:</h6> */}
                        <ul className="list-unstyled mb-3 mt-2">
                          {service.servicePointer?.map(
                            (type: string, index: number) => (
                              <li
                                key={index}
                                className="mb-2 d-flex align-items-center"
                                style={{ color: "var(--text)" }}
                              >
                                <i className="fa-solid fa-circle-check text-theme-2 me-2 fs-5" />
                                {type}
                              </li>
                            ),
                          )}
                        </ul>
                        <p
                          className="mb-0 fst-italic border-top pt-3"
                          style={{
                            color: "var(--text)",
                            borderColor: "var(--border)",
                          }}
                        >
                          {service.servicebottomline}
                        </p>
                      </div>
                    </div>
                    {/* Static Images */}
                    <div className="image-area mt-4">
                      <div className="row g-4">
                        <div className="col-lg-6 col-md-6">
                          <Image
                            width={416}
                            height={345}
                            src="/img/service/solarpumpimg2.png"
                            alt="img"
                            className="rounded shadow-sm w-100 h-auto"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <Image
                            width={416}
                            height={345}
                            src="/img/service/solarpunpimg3.png"
                            alt="img"
                            className="rounded shadow-sm w-100 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* breakpoint  */}
            <div className="container mt-4">
              {/* Type Grid */}
              {service.servicetype && service.servicetype.length > 0 && (
                <div className="types-section mt-4">
                  <h3 className="mb-4" style={{ color: "var(--header)" }}>
                    {service.typeTilte}
                  </h3>
                  <p> {service.typeSubTitle} </p>
                  {/* <h3 className="mt-4" style={{ color: "var(--header)" }}>
                  
                  </h3> */}

                  <div className="row g-3 mt-2">
                    {service.servicetype.map(
                      (servicetype: string, index: number) => (
                        <div className="col-md-6" key={index}>
                          <div
                            className="d-flex align-items-center p-3 border rounded h-100 hover-theme-card"
                            style={{
                              backgroundColor: "var(--white)",
                              borderColor: "var(--border)",
                            }}
                          >
                            <div
                              className="theme-icon-bg rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                              style={{ width: "45px", height: "45px" }}
                            >
                              <i className="fa-solid fa-leaf"></i>
                            </div>
                            <span
                              className="fw-medium"
                              style={{ color: "var(--header)" }}
                            >
                              {servicetype}
                            </span>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div>
                    <p
                      className="mb-0 fst-italic border-top pt-3"
                      style={{
                        color: "var(--text)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {service.typeSubTitlebootom}
                    </p>
                  </div>
                </div>
              )}
              {/* Key Benefits Grid */}
              {service.benifits && service.benifits.length > 0 && (
                <div className="benefits-section mt-4">
                  <h3 className="mb-4" style={{ color: "var(--header)" }}>
                    {service.benifitTilte}
                  </h3>
                  <p> {service.benifitSubTitle} </p>
                  <h3 className="mt-4" style={{ color: "var(--header)" }}>
                    Key Benefits
                  </h3>

                  <div className="row g-3 mt-2">
                    {service.benifits.map((benefit: string, index: number) => (
                      <div className="col-md-6" key={index}>
                        <div
                          className="d-flex align-items-center p-3 border rounded h-100 hover-theme-card"
                          style={{
                            backgroundColor: "var(--white)",
                            borderColor: "var(--border)",
                          }}
                        >
                          <div
                            className="theme-icon-bg rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                            style={{ width: "45px", height: "45px" }}
                          >
                            <i className="fa-solid fa-leaf"></i>
                          </div>
                          <span
                            className="fw-medium"
                            style={{ color: "var(--header)" }}
                          >
                            {benefit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Installation Process Timeline */}
              {service.installationProcess && (
                <div
                  className="installation-process mt-4 p-4 border rounded shadow-sm"
                  style={{
                    backgroundColor: "var(--white)",
                    borderColor: "var(--border)",
                  }}
                >
                  <h3 className="mb-2" style={{ color: "var(--header)" }}>
                    {service.installationProcess.title}
                  </h3>
                  <p className="mb-4" style={{ color: "var(--text)" }}>
                    {service.installationProcess.subtitle}
                  </p>

                  <div
                    className="timeline-wrapper ms-2"
                    style={{
                      borderLeft: "2px dashed var(--theme2)",
                      paddingLeft: "24px",
                    }}
                  >
                    {service.installationProcess.steps.map((step: any) => (
                      <div key={step.id} className="position-relative mb-4">
                        {/* Timeline Dot */}
                        <div
                          className="position-absolute bg-theme text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow"
                          style={{
                            width: "36px",
                            height: "36px",
                            left: "-43px",
                            top: "-4px",
                            border: "3px solid var(--white)",
                          }}
                        >
                          {step.id}
                        </div>
                        <h5 className="mb-1" style={{ color: "var(--header)" }}>
                          {step.title}
                        </h5>
                        <p className="mb-0" style={{ color: "var(--text)" }}>
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing & Subsidy Cards */}
              {service.pricingSection && (
                <div className="pricing-section mt-4 pt-4">
                  <div className="text-center mb-4">
                    <h3 style={{ color: "var(--header)" }}>
                      {service.pricingSection.title}
                    </h3>
                    <p style={{ color: "var(--text)" }}>
                      {service.pricingSection.subtitle}
                    </p>
                  </div>
                  <div className="row g-4 justify-content-center">
                    {service.pricingSection.plans.map((plan: any) => (
                      <div className="col-md-4" key={plan.id}>
                        <div
                          className={`card h-100 text-center ${plan.featured ? "border-theme shadow-lg" : "shadow-sm"}`}
                          style={{
                            transition: "transform 0.3s",
                            backgroundColor: plan.featured
                              ? "var(--white)"
                              : "var(--bg)",
                            borderColor: plan.featured
                              ? "var(--theme)"
                              : "var(--border)",
                          }}
                        >
                          {plan.featured && (
                            <div className="card-header bg-theme text-white fw-bold py-2 border-0">
                              {plan.badge}
                            </div>
                          )}

                          <div className="card-body d-flex flex-column justify-content-center py-4">
                            <h5
                              className="card-title"
                              style={{ color: "var(--header)" }}
                            >
                              {plan.title}
                            </h5>
                            <span
                              className="badge text-dark mb-3 w-50 mx-auto"
                              style={{ backgroundColor: "#F8D2144D" }}
                            >
                              {plan.subtitle}
                            </span>{" "}
                            {/* 30% opacity of theme2 */}
                            <h3 className="text-theme mb-2">{plan.price}</h3>
                            <p
                              className="small fw-medium mb-0"
                              style={{ color: "var(--text)" }}
                            >
                              <i className="fa-solid fa-tags text-theme me-2"></i>
                              {plan.note}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Farmer Support & Coverage (2 Columns) */}
              {(service.farmerSupport || service.serviceCoverage) && (
                <div className="row mt-4 g-4">
                  {service.farmerSupport &&
                    service.farmerSupport.items?.length > 0 && (
                      <div
                        className={
                          service.serviceCoverage ? "col-md-6" : "col-md-12"
                        }
                      >
                        <div
                          className="p-4 rounded h-100 border"
                          style={{
                            backgroundColor: "#B8622D0D",
                            borderColor: "#B8622D33",
                          }}
                        >
                          <h4
                            className="mb-3"
                            style={{ color: "var(--header)" }}
                          >
                            {service.farmerSupport.title}
                          </h4>

                          <ul className="list-unstyled mb-0">
                            {service.farmerSupport.items.map(
                              (item: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="mb-2"
                                  style={{ color: "var(--text)" }}
                                >
                                  <i className="fa-solid fa-handshake text-theme me-2"></i>
                                  {item}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    )}

                  {service.serviceCoverage &&
                    service.serviceCoverage.locations?.length > 0 && (
                      <div
                        className={
                          service.farmerSupport ? "col-md-6" : "col-md-12"
                        }
                      >
                        <div
                          className="p-4 rounded h-100 border"
                          style={{
                            backgroundColor: "var(--bg)",
                            borderColor: "var(--border)",
                          }}
                        >
                          <h4
                            className="mb-2"
                            style={{ color: "var(--header)" }}
                          >
                            {service.serviceCoverage.title}
                          </h4>

                          <p
                            className="small mb-3"
                            style={{ color: "var(--text)" }}
                          >
                            {service.serviceCoverage.subtitle}
                          </p>

                          <div className="d-flex flex-wrap gap-2 mb-3">
                            {service.serviceCoverage.locations.map(
                              (loc: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="badge bg-white text-dark border shadow-sm px-3 py-2"
                                >
                                  <i className="fa-solid fa-location-dot text-theme-2 me-1"></i>
                                  {loc}
                                </span>
                              ),
                            )}
                          </div>

                          <p
                            className="small mb-0 fst-italic border-top pt-2"
                            style={{
                              color: "var(--text)",
                              borderColor: "var(--border)",
                            }}
                          >
                            {service.serviceCoverage.bottomText}
                          </p>
                        </div>
                      </div>
                    )}
                </div>
              )}

              {/* Call to Action Banner */}
              {service.ctaSection && (
                <div className="cta-banner mt-4 p-5 rounded text-center shadow-lg theme-gradient-bg">
                  <h2 className="text-white mb-3">
                    {service.ctaSection.title}
                  </h2>
                  <p
                    className="lead mb-4 text-white opacity-100"
                    style={{ fontSize: "1.1rem", fontWeight: "500" }}
                  >
                    {service.ctaSection.subtitle}
                  </p>

                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    {service.ctaSection.buttons.map((btn: any, idx: number) => (
                      <Link
                        href={btn.link}
                        key={idx}
                        className={`btn px-4 py-3 fw-bold rounded-pill shadow-sm transition-all ${btn.primary ? "btn-white" : "btn-outline-white"}`}
                      >
                        {btn.label}{" "}
                        {btn.primary && (
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        )}
                      </Link>
                    ))}
                  </div>

                  <p className="small mt-4 mb-0 opacity-75 fst-italic text-white">
                    {service.ctaSection.bottomText}
                  </p>
                </div>
              )}

              <hr className="my-5" style={{ borderColor: "var(--border)" }} />

              <h3 className="mb-4" style={{ color: "var(--header)" }}>
                Frequently Asked Questions
              </h3>
            </div>

            {/* Dynamic FAQ Section */}
            <ServiceFAQ faq={service.faq} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;

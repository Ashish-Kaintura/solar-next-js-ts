import { serviceOneData } from "@/db/serviceOneData";
import { notFound } from "next/navigation";
import PageTitle from "@/components/sections/pageTitle";
import ServiceDetailsVideoPopup from "@/components/sections/services/serviceDetailsVideoPopup";
import ServiceSidebar from "@/components/sections/services/serviceSidebar";
import Image from "next/image";

interface PageProps {
  params: { id: string };
}

// Generates static paths for better performance (SSG)
export async function generateStaticParams() {
  return serviceOneData.map((service) => ({
    id: service.id.toString(),
  }));
}

const ServiceDetails = ({ params }: PageProps) => {
  // Find the specific service based on the URL ID
  const service = serviceOneData.find(
    (item) => item.id.toString() === params.id,
  );

  // If service is not found, trigger 404
  if (!service) {
    notFound();
  }

  return (
    <>
      <PageTitle title={service.title} currentPage={service.title} />
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              {/* Sidebar */}
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <ServiceSidebar />
              </div>

              {/* Main Content */}
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-image">
                    <Image
                      width={856}
                      height={529}
                      sizes="100vw"
                      src={service.image || "/img/service/details-1.jpg"}
                      alt={service.title}
                    />
                  </div>
                  <div className="details-content">
                    <h3>{service.title}</h3>
                    <p className="mt-3">{service.detailsDescription}</p>

                    <div className="details-video-items">
                      <ServiceDetailsVideoPopup />
                      <div className="content">
                        <h4>Benefits With Our Service</h4>
                        <ul className="list">
                          {service.benefits.map((benefit, index) => (
                            <li key={index}>
                              <i className="fa-regular fa-circle-check" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="image-area">
                      <div className="row g-4">
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb">
                            <Image
                              width={416}
                              height={345}
                              src="/img/service/details-2.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb">
                            <Image
                              width={416}
                              height={345}
                              src="/img/service/details-3.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3>Common Questions</h3>
                  </div>

                  {/* Dynamic FAQ Section */}
                  <div className="faq-content style-3">
                    <div className="faq-accordion">
                      <div className="accordion" id="accordion">
                        {service.faq.map((item, index) => (
                          <div className="accordion-item mb-3" key={index}>
                            <h5 className="accordion-header">
                              <button
                                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq${index}`}
                              >
                                {item.question}
                              </button>
                            </h5>
                            <div
                              id={`faq${index}`}
                              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                              data-bs-parent="#accordion"
                            >
                              <div className="accordion-body">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;

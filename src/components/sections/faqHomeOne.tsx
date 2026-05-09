"use client";
import { useState } from "react";
import { faqData } from "@/db/faqData";
import SectionTitle from "../ui/sectionTitle";
import Image from "next/image";

const FaqHomeOne = () => {
  // Local state to track which FAQ is open
  // We initialize it with the ID of the item that has isOpen: true, or null
  const [activeId, setActiveId] = useState(
    faqData.find((f) => f.isOpen)?.id || null,
  );

  const toggleFaq = (id:string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section fix section-padding">
      <div className="right-shape">
        <Image
          width={445}
          height={577}
          sizes="100vw"
          src="/img/faq/right-shape.png"
          alt="shape-img"
        />
      </div>
      <div className="faq-shape-box">
        <div className="faq-shape">
          <Image
            width={847}
            height={950}
            sizes="100vw"
            src="/img/faq/shape.png"
            alt="shape-img"
          />
        </div>
      </div>
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            {/* Left Side: Image */}
            <div className="col-lg-6 wow slideUp" data-delay=".4">
              <div className="faq-image">
                <Image
                  width={636}
                  height={586}
                  sizes="100vw"
                  src="/img/faq/faq.png"
                  alt="faq-img"
                />
              </div>
            </div>

            {/* Right Side: Content & Accordion */}
            <div className="col-lg-6">
              <div className="faq-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>
                    Frequently Asked Questions
                  </SectionTitle.SubTitle>
                  <SectionTitle.Title>
                    About Solar Installation
                  </SectionTitle.Title>
                </SectionTitle>

                <div className="faq-accordion mt-4 mt-md-0">
                  <div className="accordion" id="accordion">
                    {faqData.map((faq) => {
                      const isExpanded = activeId === faq.id;
                      return (
                        <div
                          className="accordion-item mb-3 wow slideUp"
                          key={faq.id}
                          data-delay={faq.delay}
                        >
                          <h5 className="accordion-header">
                            <button
                              className={`accordion-button ${isExpanded ? "" : "collapsed"}`}
                              type="button"
                              onClick={() => toggleFaq(faq.id)}
                            >
                              {faq.question}
                            </button>
                          </h5>
                          <div
                            className={`accordion-collapse collapse ${isExpanded ? "show" : ""}`}
                            style={{ display: isExpanded ? "block" : "none" }}
                          >
                            <div className="accordion-body">{faq.answer}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqHomeOne;

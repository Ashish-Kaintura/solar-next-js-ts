"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faq: FAQItem[];
}

export default function ServiceFAQ({ faq }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-content style-3">
      <div className="faq-accordion">
        {faq?.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid rgba(184, 98, 45, 0.15)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
            }}
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                padding: "22px 24px",
                backgroundColor: openIndex === index ? "#B8622D" : "#fff",
                color: openIndex === index ? "#fff" : "#1f2937",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "18px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <span>{item.question}</span>

              {/* Plus Minus Icon */}
              <span
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background:
                    openIndex === index ? "#F8D214" : "rgba(184, 98, 45, 0.1)",
                  color: openIndex === index ? "#B8622D" : "#B8622D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer Section */}
            <div
              style={{
                maxHeight: openIndex === index ? "300px" : "0px",
                overflow: "hidden",
                transition: "all 0.4s ease",
                backgroundColor: "#fffaf5",
              }}
            >
              <div
                style={{
                  padding: "22px 24px",
                  color: "#5b5b5b",
                  lineHeight: "1.9",
                  fontSize: "16px",
                  borderTop: "1px solid rgba(184, 98, 45, 0.1)",
                }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

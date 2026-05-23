import type { Metadata } from "next"; // Type safety import
import ContactAddress from "@/components/sections/contact/contactAddress";
import ContactForm from "@/components/sections/contact/contactForm";
import ContactMap from "@/components/sections/contact/contactMap";
import PageTitle from "@/components/sections/pageTitle";

// 1. Export your metadata configuration
export const metadata: Metadata = {
  title: "Contact Us | Solar Company in Lucknow | Vasudhaiv Enterprises",
  description:
    "Contact Vasudhaiv Enterprises for solar panel installation in Lucknow ,Uttar Pradesh Book a free site survey for home or business solar. Call or enquire now.",
  keywords: [
    "Contact solar experts Lucknow",
    "solar company in lucknow",
    "Solar company contact number",
  ],
};

const Contact = () => {
  return (
    <>
      <PageTitle currentPage="Contact Us" title="Contact Us" />
      <section className="contact-section fix section-padding">
        <div className="container">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <ContactAddress />
              </div>
              <div className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
    </>
  );
};

export default Contact;

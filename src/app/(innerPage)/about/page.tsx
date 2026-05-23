import type { Metadata } from "next"; // Optional: For TypeScript type safety
import AboutTwo from "@/components/sections/about/aboutTwo";
import MarqueTwo from "@/components/sections/marques/marqueTwo";
import PartnersOne from "@/components/sections/partners/partnersOne";
import Offer from "@/components/sections/offer";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import MissionVision from "@/components/sections/about/MissionVision";
import HeroBanner from "@/components/sections/about/HeroBanner";

// 1. Export the metadata object
export const metadata: Metadata = {
  title: "About Vasudhaiv Enterprises | Solar Company in Uttar Pradesh",
  description:
    "Vasudhaiv Enterprises is a trusted solar company in Lucknow serving homes & businesses across Uttar Pradesh. Authorized dealers of Adani, Tata & Waaree. Know our story.",
  keywords: [
    "Solar panel installation Lucknow",
    "solar installer in lucknow",
    "solar dealer lucknow",
    "solar company in uttar pradesh",
  ],
};

const About = () => {
  return (
    <>
      <HeroBanner />
      <AboutTwo />
      <Offer />
      <WhyChooseUs />
      <MarqueTwo className="section-padding" />
      <MissionVision />
      <PartnersOne />

      <section
        className="bg-dark text-white rounded-4 p-4 shadow mx-auto my-5"
        style={{ maxWidth: "72rem" }}
      >
        {/* Your existing CTA section content... */}
        <div className="row g-4 align-items-center">
          <div className="col-md-7">
            <p className="text-uppercase text-warning mb-3 small">
              Free Site Survey
            </p>
            <h2 className="display-6 fw-semibold text-white">
              Book your free solar site survey today and get expert advice
              tailored for Lucknow & nearby areas.
            </h2>
          </div>
          {/* ... Rest of your component */}
        </div>
      </section>
    </>
  );
};

export default About;

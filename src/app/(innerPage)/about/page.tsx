import AboutTwo from "@/components/sections/about/aboutTwo";
import MarqueTwo from "@/components/sections/marques/marqueTwo";
import PartnersOne from "@/components/sections/partners/partnersOne";
import ProjectsTwo from "@/components/sections/projects/projectsTwo";
import Offer from "@/components/sections/offer";
import PageTitle from "@/components/sections/pageTitle";
import TeamesThree from "@/components/sections/teames/teamesThree";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import MissionVision from "@/components/sections/about/MissionVision";
import HeroBanner from "@/components/sections/about/Herobanner";

const About = () => {
  return (
    <>
      {/* <PageTitle title="About Us" currentPage="About Us" /> */}
      <HeroBanner/>
      <AboutTwo />
      <Offer />
      {/* <ProjectsTwo/> */}
      <WhyChooseUs />
      <MarqueTwo className="section-padding" />
      {/* <TeamesThree/> */}
      <MissionVision />
      <PartnersOne />
      <section
        className="bg-dark text-white rounded-4 p-4 shadow mx-auto my-5"
        style={{ maxWidth: "72rem" }}
      >
        <div className="row g-4 align-items-center">
          <div className="col-md-7">
            <p className="text-uppercase text-warning mb-3 small">
              Free Site Survey
            </p>
            <h2 className="display-6 fw-semibold text-white">
              Book your free solar site survey today and get expert advice
              tailored for Lucknow & nearby areas.
            </h2>
            <p className="mt-4 text-secondary">
              Cost-effective, reliable and professional solar solutions for
              residential and commercial properties in Uttar Pradesh.
            </p>
          </div>
          <div className="col-md-5 d-flex flex-column gap-3 align-items-md-end">
            <a
              href="/contact"
              className="btn btn-warning btn-lg text-dark rounded-pill px-4"
            >
              Book Free Site Survey
            </a>
            <a
              href="tel:+919999999999"
              className="btn btn-outline-light btn-lg rounded-pill px-4"
            >
              Talk to Our Solar Expert
            </a>
          </div>
        </div>
        <div className="mt-4 pt-3 border-top border-secondary text-secondary small">
          <span className="fw-semibold text-white">Service Location:</span>{" "}
          Lucknow & Nearby Area, Uttar Pradesh •{" "}
          <span className="fw-semibold text-white">
            Reliable, Professional Solar Solutions
          </span>
        </div>
      </section>
    </>
  );
};

export default About;

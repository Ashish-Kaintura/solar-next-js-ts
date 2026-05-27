"use client";
import { motion } from "motion/react";
import Link from "next/link";

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}

// Kept only the first banner data
const slideData: SlideType = {
  id: 1,
  image: "/img/hero/banner1.png",
  title: "TRUSTED SOLAR COMPANY IN LUCKNOW",
  heading: "Vasudhaiv Enterprises — Solar Company in Lucknow",
  description:
    " Trusted rooftop solar solutions for homes & businesses in Uttar Pradesh with professional installation, government subsidy support, and long-term savings.",
  link: "/contact",
};

const HeroOne = () => {
  // Since it's a single static banner, it is always active on load
  const isActive = true;

  return (
    <section className="hero-section hero-1">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="hero-image bg-cover"
          style={{ backgroundImage: `url(${slideData.image})` }}
        />
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="hero-content">
                <motion.h6
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{
                    x: isActive ? "0" : "100%",
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "linear",
                  }}
                >
                  {slideData.title}
                </motion.h6>

                <motion.h1
                  className="text-lg"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{
                    x: isActive ? "0" : "100%",
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: "linear",
                  }}
                  dangerouslySetInnerHTML={{ __html: slideData.heading }}
                ></motion.h1>

                <motion.p
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{
                    x: isActive ? "0" : "100%",
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7,
                    ease: "linear",
                  }}
                >
                  {slideData.description}
                </motion.p>

                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{
                    x: isActive ? "0" : "100%",
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                    ease: "linear",
                  }}
                  className="hero-button"
                >
                  <Link
                    href={slideData.link}
                    className="theme-btn theme-color-2"
                  >
                    <span>
                      Get Free Quote <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroOne;

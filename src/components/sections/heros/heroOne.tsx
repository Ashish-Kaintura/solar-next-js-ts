"use client";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}
const slidesData: SlideType[] = [
  {
    id: 1,
    image: "/img/hero/hero-12.jpg",
    title: "TRUSTED SOLAR COMPANY IN LUCKNOW",
    heading: "Vasudhaiv Enterprises — Solar Company in Lucknow",
    description:
      " Trusted rooftop solar solutions for homes & businesses in Uttar Pradesh with professional installation, government subsidy support, and long-term savings.",
    link: "/",
  },
  {
    id: 2,
    image: "/img/hero/hero-7.jpg",
    title: "Welcome to Vashdhaiv Enterprises",
    heading: "Solar Panel Installation Company in Lucknow",
    description:
      "Affordable rooftop solar solutions for homes, businesses, and farms with professional installation and subsidy support.",
    link: "/",
  },
];

const HeroOne = () => {
  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev">
          <i className="fa fa-arrow-left" />
        </button>
        <button className="array-next">
          <i className="fa fa-arrow-right" />
        </button>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={3000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".array-prev",
          prevEl: ".array-next",
        }}
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => <Card slide={slide} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroOne;

const Card = ({ slide, isActive }: { slide: SlideType; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div
        className="hero-image bg-cover"
        style={{ backgroundImage: `url(${slide.image})` }}
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
                {slide.title}
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
                dangerouslySetInnerHTML={{ __html: slide.heading }}
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
                {slide.description}
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
                <Link href={slide.link} className="theme-btn theme-color-2">
                  <span>
                    Learn More <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

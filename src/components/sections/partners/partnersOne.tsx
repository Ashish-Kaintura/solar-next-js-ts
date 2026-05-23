"use client";
import { partnetsOneData } from "@/db/partnersOneData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const PartnersOne = ({ className }: { className?: string }) => {
  return (
    <div className={`brand-section fix section-padding ${className}`}>
      <div className="container">
        <div className="brand-wrapper">
          {/* Brand Trust Title with WOW Animation */}
          <h6 className="text-center wow slideUp mb-5" data-wow-delay=".3s">
            Our Trusted Solar Brand Partners
          </h6>

          <Swiper
            breakpoints={{
              1199: { slidesPerView: 5 },
              991: { slidesPerView: 4 },
              767: { slidesPerView: 3 },
              575: { slidesPerView: 2 },
              0: { slidesPerView: 2 }, // Mobile pe kam se kam 2 logo dikhana better rehta hai
            }}
            spaceBetween={40}
            speed={1500}
            centeredSlides={false} // Brands ke liye false zyada clean lagta hai agar slide kam ho
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="brand-slider"
          >
            {partnetsOneData.map(({ id, img }) => (
              <SwiperSlide key={id}>
                <div className="brand-image d-flex justify-content-center align-items-center">
                  <Image
                    width={150}
                    height={60}
                    src={img}
                    alt={`brand-logo-${id}`}
                    className="img-fluid grayscale-filter"
                    style={{
                      objectFit: "contain",
                      filter: "grayscale(100%) opacity(0.7)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter =
                        "grayscale(100%) opacity(0.7)";
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Optional CSS for Grayscale Effect */}
      <style jsx>{`
        .grayscale-filter {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PartnersOne;

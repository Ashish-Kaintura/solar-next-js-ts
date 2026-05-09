"use client";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const achievements = [
  {
    count: 6561,
    description: "Electricity Savings",
    icon: "/img/achievement-icon/01.svg",
    delay: ".3",
  },
  {
    count: 600,
    description: "years of extremely durable lifespan",
    icon: "/img/achievement-icon/02.svg",
    delay: ".5",
  },
  {
    count: 250,
    description: "Accessible Gov. subsidies",
    icon: "/img/achievement-icon/03.svg",
    delay: ".7",
  },
  {
    count: 590,
    description: "Energy maintenance at a low cost",
    icon: "/img/achievement-icon/04.svg",
    delay: ".9",
  },
  // {
  //   count: 590,
  //   description: "Environmental friendly energy",
  //   icon: "/img/achievement-icon/04.svg",
  //   delay: ".10",
  // },
];

const AchievementOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section className="achievement-section fix section-padding pt-0">
      <div className="container">
        <div className="achievement-wrapper">
          <SectionTitle className="mb-0">
            <SectionTitle.SubTitle className="text-white">
              What are the benefits
            </SectionTitle.SubTitle>
            <SectionTitle.Title className="text-white">
              choosing Solar Energy?
              <br />
              All Budget Ranges
            </SectionTitle.Title>
          </SectionTitle>
          <p className=" text-white mt-md-0 wow slideUp" data-delay=".5">
            Among all the options for energy solutions, sun generated energy
            provides the fastest return on investment in daily savings on energy
            costs.
          </p>
          <div className="counter-area">
            {achievements.map((achievement, index) => (
              <div
                className="counter-items wow slideUp"
                data-delay={achievement.delay}
                key={index}
              >
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    sizes="100vw"
                    src={achievement.icon}
                    alt="icon-img"
                  />
                </div>
                <div className="content" ref={ref}>
                  {inView && (
                    <h2>
                      <span className="count">
                        <CountUp end={achievement.count} />
                      </span>
                      +
                    </h2>
                  )}
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementOne;

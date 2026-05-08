"use client";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const achievements = [
  {
    count: 6561,
    description: "Team members",
    icon: "/img/achievement-icon/01.svg",
    delay: ".3",
  },
  {
    count: 600,
    description: "Completed Projects",
    icon: "/img/achievement-icon/02.svg",
    delay: ".5",
  },
  {
    count: 250,
    description: "Winning award",
    icon: "/img/achievement-icon/03.svg",
    delay: ".7",
  },
  {
    count: 590,
    description: "Clients Review",
    icon: "/img/achievement-icon/04.svg",
    delay: ".9",
  },
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
              COST & SAVINGS
            </SectionTitle.SubTitle>
            <SectionTitle.Title className="text-white">
              Solar Services in
              <br />
              All Budget Ranges
            </SectionTitle.Title>
          </SectionTitle>
          <p className=" text-white mt-md-0 wow slideUp" data-delay=".5">
            At Vasudhaiv Enterprises, we believe solar starts with installation
            and continues with trust and savings. We provide complete solar
            services including design, setup, and maintenance. Whether it is
            small residential systems or large commercial installations, we
            provide full support and guidance to execute every project
            professionally.
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

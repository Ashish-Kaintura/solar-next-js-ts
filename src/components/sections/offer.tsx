import {
  SuAndroid,
  SuApple,
  SuBoost,
  SuInternet,
  SuSmartWatch,
  SuTV,
} from "@/lib/icons";
import {
  Search,
  Settings,
  Wrench,
  FileText,
  BadgeIndianRupee,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "../ui/sectionTitle";
import Image from "next/image";

const offerItems = [
  {
    id: 1,
    icon: <Search />,
    title: "Free Site Survey",
    description: "We assess your roof, energy usage & shading",
    isActive: false,
    delay: ".2",
  },
  {
    id: 2,
    icon: <Settings />,
    title: "Solar System Planning",
    description: "Custom system design for your load & budget",
    isActive: false,
    delay: ".4",
  },
  {
    id: 3,
    icon: <Wrench />,
    title: "Installation",
    description: "Clean, professional rooftop installation",
    isActive: false,
    delay: ".6",
  },
  {
    id: 4,
    icon: <FileText />,
    title: "Subsidy Guidance",
    description: "We handle PM Surya Ghar subsidy paperwork",
    isActive: false,
    delay: ".8",
  },
  {
    id: 5,
    icon: <BadgeIndianRupee />,
    title: "Net Metering",
    description: "Earn credits by sending excess power to grid",
    isActive: false,
    delay: ".9",
  },
  {
    id: 6,
    icon: <ShieldCheck />,
    title: "Maintenance & Support",
    description: "AMC plans for long-term performance",
    isActive: false,
    delay: ".9",
  },
];
const Offer = () => {
  return (
    <section className="offer-section fix section-bg-2 section-padding">
      <div className="line-shape">
        <Image
          width={465}
          height={605}
          sizes="100vw"
          src="/img/team/line-shape.png"
          alt="shape-img"
        />
      </div>
      <div className="mask-shape">
        <Image
          width={343}
          height={610}
          sizes="100vw"
          src="/img/team/mask-shape.png"
          alt="shape-img"
        />
      </div>
      <div className="container">
        <SectionTitle className="text-center">
          <SectionTitle.SubTitle>
            Our Approach to Solar Solutions
          </SectionTitle.SubTitle>
          <SectionTitle.Title className="text-white">
            Our Approach to <br /> Solar Solutions
          </SectionTitle.Title>
        </SectionTitle>
        <div className="row">
          {offerItems.map((item) => (
            <div
              key={item.id}
              className={`col-xl-2 col-lg-4 col-md-4 col-sm-6 wow slideUp `}
              data-delay={item.delay}
            >
              <div className={`offer-items ${item.isActive ? "active" : ""}`}>
                <div className="shape-top">
                  <Image
                    width={40}
                    height={40}
                    src="/img/shape/offer-top.png"
                    alt="shape-img"
                  />
                </div>
                <div className="shape-bottom">
                  <Image
                    width={40}
                    height={40}
                    src="/img/shape/offer-bottom.png"
                    alt="shape-img"
                  />
                </div>
                <div className="icon">{item.icon}</div>
                <div className="content">
                  <h5 style={{ color: "#B8622D" }} className="mb-2">
                    {item.title}
                  </h5>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;

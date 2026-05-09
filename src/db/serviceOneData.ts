export interface FAQType {
  question: string;
  answer: string;
  delay: string;
}

export interface ServiceDataType {
  id: string | number;
  title: string;
  description: string;
  detailsDescription: string;
  icon: string;
  link: string;
  delay: string;
  image: string;
  benefits: string[];
  faq: FAQType[];
}

export const serviceOneData: ServiceDataType[] = [
  {
    id: "1",
    title: "Solar Panel Installation",
    description: "Safely install rooftop solar systems in your home, office, or commercial building.",
    detailsDescription: "We provide comprehensive solar panel installation services tailored for both homes and large-scale commercial buildings. Our team handles everything from initial structural analysis to final grid synchronization, ensuring a seamless transition to renewable energy.",
    icon: "/img/service/icon/s-icon-1.svg",
    link: "/services/1",
    delay: ".3",
    image: "/img/service/details-1.jpg",
    benefits: [
      "Zero-cost electricity for decades",
      "Custom design for maximum sunlight absorption",
      "Professional mounting and safety testing"
    ],
    faq: [
      { question: "How much roof space is needed?", answer: "Typically 100 sq. ft. per kilowatt (kW).", delay: ".3" },
      { question: "Does it work on cloudy days?", answer: "Yes, though output is lower than on sunny days.", delay: ".5" }
    ]
  },
  {
    id: "2",
    title: "Residential Solar Solutions",
    description: "These energy systems at your home are cost-effective and can aid you in lowering your monthly energy expenditures and achieving greater cost savings over the long run.",
    detailsDescription: "Our Solar Annual Maintenance Contract (AMC) is designed to protect your investment. We offer periodic cleaning, inverter health checks, and wiring inspections to prevent power drops and extend equipment life.",
    icon: "/img/service/icon/s-icon-2.svg",
    link: "/services/2",
    delay: ".5",
    image: "/img/service/details-2.jpg",
    benefits: [
      "Scheduled panel cleaning and dusting",
      "Priority troubleshooting support",
      "Thermal scanning for hot-spots"
    ],
    faq: [
      { question: "What is covered in AMC?", answer: "Cleaning, technical inspection, and minor repairs.", delay: ".3" }
    ]
  },
  {
    id: "3",
    title: "Commercial Solar Solutions",
    description: "These systems can provide commercial operations at the school, office, and Shop with energy savings at operational costs.",
    detailsDescription: "Empowering agriculture with solar water pumps. These systems are ideal for remote fields, providing a reliable source of water for irrigation without the need for expensive diesel or unstable grid electricity.",
    icon: "/img/service/icon/s-icon-3.svg",
    link: "/services/3",
    delay: ".7",
    image: "/img/service/details-3.jpg",
    benefits: [
      "Zero fuel costs for irrigation",
      "Automatic operation during daylight",
      "Low maintenance compared to diesel engines"
    ],
    faq: [
      { question: "Can it run at night?", answer: "Standard systems run during the day; battery backup is optional.", delay: ".3" }
    ]
  },
  {
    id: "4",
    title: "Solar AMC (Maintenance)",
    description: "We provide a long-term service of maintaining your solar system to keep you worry-free by providing quarterly and monthly visits and cleaning.",
    detailsDescription: "Convert your traditional flour mill (Atta Chakki) into a solar-powered business. Our specialized high-torque solar inverters ensure that your heavy-duty motors run smoothly even during fluctuating sunlight.",
    icon: "/img/service/icon/s-icon-4.svg",
    link: "/services/4",
    delay: ".9",
    image: "/img/service/details-4.jpg",
    benefits: [
      "Massive reduction in monthly power bills",
      "Higher profit margins for business owners",
      "Silent and eco-friendly operation"
    ],
    faq: [
      { question: "What HP motor can solar handle?", answer: "We support systems from 3HP up to 20HP motors.", delay: ".3" }
    ]
  },
  {
    id: "5",
    title: "Solar Water Pumps",
    description: "We build solar pumps and solar systems that are based on the agriculture and farming sector to replace diesel and a decreased usage of electricity.",
    detailsDescription: "We install and maintain standalone solar street lights that operate automatically from dusk till dawn. These are perfect for housing societies, industrial parks, and rural roads where cabling is difficult.",
    icon: "/img/service/icon/s-icon-10.svg",
    link: "/services/5",
    delay: ".3",
    image: "/img/service/details-5.jpg",
    benefits: [
      "Fully automatic On/Off sensing",
      "Integrated Lithium batteries for long life",
      "No external wiring required"
    ],
    faq: [
      { question: "How long do the lights stay on?", answer: "Our lights are designed for 12 hours of full brightness.", delay: ".3" }
    ]
  },
  {
    id: "6",
    title: "Solar Street Lights",
    description: "TWe provide solutions for solar lighting that save energy for all outdoor spaces, including streets, societies, and other places.",
    detailsDescription: "Our residential solar systems focus on aesthetics and efficiency. We use high-efficiency mono-perc panels and smart inverters that allow you to monitor your power production from your smartphone.",
    icon: "/img/service/icon/s-icon-11.svg",
    link: "/services/6",
    delay: ".5",
    image: "/img/service/details-6.jpg",
    benefits: [
      "Smart monitoring via Mobile App",
      "Increase in property value",
      "Protection against future tariff hikes"
    ],
    faq: [
      { question: "Can I run my AC on solar?", answer: "Yes, with a correctly sized system.", delay: ".3" }
    ]
  },
  {
    id: "7",
    title: "Solar Atta Chakki",
    description: "We offer solar solutions specifically for small businesses and rural areas.",
    detailsDescription: "Helping industries achieve their ESG goals while cutting operational costs. We manage large-scale CAPEX and OPEX solar models for factories, warehouses, and corporate offices.",
    icon: "/img/service/icon/s-icon-1.svg",
    link: "/services/7",
    delay: ".7",
    image: "/img/service/details-7.jpg",
    benefits: [
      "Accelerated depreciation benefits",
      "Stable energy costs for 25 years",
      "Enhanced corporate green image"
    ],
    faq: [
      { question: "Do you offer financing?", answer: "Yes, we partner with banks for solar loans.", delay: ".3" }
    ]
  }
];
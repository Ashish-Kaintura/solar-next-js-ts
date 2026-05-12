export interface FAQType {
  question: string;
  answer: string;
  delay: string;
}

export interface ServiceDataType {
  id: string | number;
  title: string;
  subtitle: string;
  bannerImage?: string;
  bannerTitle?: string;
  bannerSubTitle?: string;
  bannertagline?: string;
  description: string;
  detailsDescription: string;
  icon: string;
  link: string;
  delay: string;
  image: string;
  serviceTitle: string;
  servicesubline: string;
  servicebottomline: string;
  benifitTilte: string;
  benifitSubTitle: string;
  benifits: string[];
  installationProcess?: {
    title: string;
    subtitle: string;
    steps: {
      id: string | number;
      title: string;
      description: string;
    }[];
  };
  pricingSection?: {
    title: string;
    subtitle: string;
    plans: {
      id: string | number;
      title: string;
      subtitle: string;
      price: string;
      note: string;
      featured: boolean;
      badge?: string;
    }[];
  };
  farmerSupport?: {
    title: string;
    items: string[];
  };
  serviceCoverage?: {
    title: string;
    subtitle: string;
    locations: string[];
    bottomText: string;
  };
  ctaSection?: {
    title: string;
    subtitle: string;
    buttons: {
      label: string;
      link: string;
      primary: boolean;
    }[];
    bottomText: string;
  };
  types: string[];
  faq: FAQType[];
}

export const serviceOneData: ServiceDataType[] = [
  {
    id: "1",
    title: "Solar Panel Installation",
    subtitle: "",
    description:
      "Safely install rooftop solar systems in your home, office, or commercial building.",
    detailsDescription:
      "We provide comprehensive solar panel installation services tailored for both homes and large-scale commercial buildings. Our team handles everything from initial structural analysis to final grid synchronization, ensuring a seamless transition to renewable energy.",
    icon: "/img/service/icon/s-icon-1.svg",
    link: "/services/1",
    delay: ".3",
    image: "/img/service/details-1.jpg",
    serviceTitle: "",
    servicesubline: "",
    servicebottomline: "",
    types: [
      "Zero-cost electricity for decades",
      "Custom design for maximum sunlight absorption",
      "Professional mounting and safety testing",
    ],
    benifitTilte: "",
    benifitSubTitle: "",
    benifits: [],
    faq: [
      {
        question: "How much roof space is needed?",
        answer: "Typically 100 sq. ft. per kilowatt (kW).",
        delay: ".3",
      },
      {
        question: "Does it work on cloudy days?",
        answer: "Yes, though output is lower than on sunny days.",
        delay: ".5",
      },
    ],
  },
  {
    id: "2",
    title: "Residential Solar Solutions",
    subtitle: "",
    description:
      "These energy systems at your home are cost-effective and can aid you in lowering your monthly energy expenditures and achieving greater cost savings over the long run.",
    detailsDescription:
      "Our Solar Annual Maintenance Contract (AMC) is designed to protect your investment. We offer periodic cleaning, inverter health checks, and wiring inspections to prevent power drops and extend equipment life.",
    icon: "/img/service/icon/s-icon-2.svg",
    link: "/services/2",
    delay: ".5",
    image: "/img/service/details-2.jpg",
    serviceTitle: "",
    servicesubline: "",
    servicebottomline: "",
    types: [
      "Scheduled panel cleaning and dusting",
      "Priority troubleshooting support",
      "Thermal scanning for hot-spots",
    ],
    benifitTilte: "",
    benifitSubTitle: "",
    benifits: [],
    faq: [
      {
        question: "What is covered in AMC?",
        answer: "Cleaning, technical inspection, and minor repairs.",
        delay: ".3",
      },
    ],
  },
  {
    id: "3",
    title: "Commercial Solar Solutions",
    subtitle: "",
    description:
      "These systems can provide commercial operations at the school, office, and Shop with energy savings at operational costs.",
    detailsDescription:
      "Empowering agriculture with solar water pumps. These systems are ideal for remote fields, providing a reliable source of water for irrigation without the need for expensive diesel or unstable grid electricity.",
    icon: "/img/service/icon/s-icon-3.svg",
    link: "/services/3",
    delay: ".7",
    image: "/img/service/details-3.jpg",
    serviceTitle: "",
    servicesubline: "",
    servicebottomline: "",
    types: [
      "Zero fuel costs for irrigation",
      "Automatic operation during daylight",
      "Low maintenance compared to diesel engines",
    ],
    benifitTilte: "",
    benifitSubTitle: "",
    benifits: [],
    faq: [
      {
        question: "Can it run at night?",
        answer:
          "Standard systems run during the day; battery backup is optional.",
        delay: ".3",
      },
    ],
  },
  {
    id: "4",
    title: "Solar AMC (Maintenance)",
    subtitle: "",
    description:
      "We provide a long-term service of maintaining your solar system to keep you worry-free by providing quarterly and monthly visits and cleaning.",
    detailsDescription:
      "Convert your traditional flour mill (Atta Chakki) into a solar-powered business. Our specialized high-torque solar inverters ensure that your heavy-duty motors run smoothly even during fluctuating sunlight.",
    icon: "/img/service/icon/s-icon-4.svg",
    link: "/services/4",
    delay: ".9",
    image: "/img/service/details-4.jpg",
    serviceTitle: "",
    servicesubline: "",
    servicebottomline: "",
    types: [
      "Massive reduction in monthly power bills",
      "Higher profit margins for business owners",
      "Silent and eco-friendly operation",
    ],
    benifitTilte: "",
    benifitSubTitle: "",
    benifits: [],
    faq: [
      {
        question: "What HP motor can solar handle?",
        answer: "We support systems from 3HP up to 20HP motors.",
        delay: ".3",
      },
    ],
  },
  {
    id: "5",
    title: "Solar Water Pumps",
    subtitle: "Solar Water Pumps for Agriculture",
    bannerImage: "/img/breadcrumb.jpg",
    bannerTitle: "Solar Water Pump Installation in Lucknow, Uttar Pradesh",
    bannerSubTitle:
      "Affordable Solar Irrigation Pumps for Farmers — With Govt. Subsidy Support",
    bannertagline: "Govt. Subsidy Available",
    description:
      "Irrigation requires a reliable and continuous water supply. Solar water pumps are an efficient and cost-effective solution for agricultural irrigation.",
    detailsDescription:
      "At Vasudhaiv Enterprises, we offer expert solar water pump installation in Lucknow and across Uttar Pradesh to farmers and users of agricultural land. Our solar pump systems use clean solar energy to provide a reliable water supply while reducing diesel and electricity costs",
    icon: "/img/service/icon/s-icon-10.svg",
    link: "/services/5",
    delay: ".3",
    image: "/img/service/details-5.jpg",
    serviceTitle:
      "We provide customized solar water pump solutions based on your irrigation and agricultural requirements.",
    servicesubline: "Our services include:",
    servicebottomline:
      "We install high-performance solar pump systems for farms and agricultural land of all sizes.",
    types: [
      "Submersible solar pumps",
      "Surface solar pumps",
      "DC and AC solar pump systems",
      "Professional installation and setup",
      "Full installation & commissioning",
    ],
    benifitTilte: "Types of Solar Water Pumps",
    benifitSubTitle:
      "Based on your water requirements and land type, we install a wide range of solar pumps:",
    benifits: [
      "Zero fuel cost",
      "Low maintenance (No engine service)",
      // "No engine service",
      "Eco-friendly(Clean energy)",
      // "Clean energy",
      "Auto operation (Daylight hours)",
      // "Daylight hours",
      "Govt. subsidy (PM-KUSUM scheme)",
      "Long-term savings (25+ year lifespan)",
      // "25+ year lifespan"
    ],
    installationProcess: {
      title: "How Do We Install Solar Water Pumps?",
      subtitle:
        "Our team follows a simple and professional installation process to ensure efficient solar pump performance.",
      steps: [
        {
          id: "1",
          title: "Site survey and water requirement analysis",
          description: "Khet ki zaroorat samjhna — depth, flow rate, area",
        },
        {
          id: "2",
          title: "Selection of the right solar pump system",
          description: "Submersible ya surface, DC ya AC",
        },
        {
          id: "3",
          title: "Professional installation and setup",
          description: "Panel mounting + pump fitting + wiring",
        },
        {
          id: "4",
          title: "Final testing and performance inspection",
          description: "Full system check before handover",
        },
        {
          id: "5",
          title: "Assistance with subsidy application and documentation",
          description: "PM-KUSUM aur UP govt. subsidy paperwork support",
        },
      ],
    },
    pricingSection: {
      title: "Solar Pump Price & Subsidy",
      subtitle:
        "Solar water pumps are a cost-effective solution for long-term irrigation needs.",
      plans: [
        {
          id: "1",
          title: "1–2 HP Pump",
          subtitle: "Small farm",
          price: "₹X,XXX",
          note: "Subsidy available",
          featured: false,
        },
        {
          id: "2",
          title: "3–5 HP Pump",
          subtitle: "Medium farm",
          price: "₹X,XXX",
          note: "Subsidy available",
          featured: true,
          badge: "Most Popular",
        },
        {
          id: "3",
          title: "7.5–10 HP Pump",
          subtitle: "Large farm",
          price: "Custom",
          note: "Quote on call",
          featured: false,
        },
      ],
    },
    farmerSupport: {
      title: "We Offer Farmers",
      items: [
        "Subsidy assistance (PM-KUSUM scheme)",
        "Affordable installation pricing",
        "EMI options (where applicable)",
        "Long-term savings on irrigation costs",
      ],
    },
    serviceCoverage: {
      title: "Solar Pump Installation in Lucknow & Uttar Pradesh",
      subtitle: "Our services cover:",
      locations: [
        "Lucknow",
        "Kanpur",
        "Ayodhya",
        "Barabanki",
        "Sitapur",
        "Sultanpur",
        "Nearby rural areas across UP",
      ],
      bottomText:
        "Our expert installation ensures long-term system performance and reliability.",
    },
    ctaSection: {
      title: "Get Your Solar Water Pump Installed Today",
      subtitle:
        "Vasudhaiv Enterprises provides expert solar pump installation across Lucknow and Uttar Pradesh. Contact us for a free site visit and subsidy guidance.",
      buttons: [
        {
          label: "Book Free Site Visit",
          link: "/contact",
          primary: true,
        },
        {
          label: "WhatsApp Enquiry",
          link: "https://wa.me/91XXXXXXX",
          primary: false,
        },
        {
          label: "Get Quote for Subsidy",
          link: "/contact",
          primary: false,
        },
      ],
      bottomText:
        "“Free Site Visit” is the best-performing CTA for farmers and agricultural customers.",
    },
    faq: [
      {
        question: "Can solar pump run at night?",
        answer: "Standard systems run during the day; battery backup optional.",
        delay: ".3",
      },
      {
        question: "What subsidy is available?",
        answer: "PM-KUSUM scheme — up to 60% subsidy for farmers.",
        delay: ".5",
      },
      {
        question: "Which pump is best for borewell?",
        answer: "Submersible solar pump — best for deep borewells",
        delay: ".7",
      },
      {
        question: "What is installation time?",
        answer: "1–2 days depending on system size and site.",
        delay: ".9",
      },
    ],
  },
  {
    id: "6",
    title: "Solar Street Lights",
    subtitle: "Solar Street Light Solutions for Lucknow & Uttar Pradesh",
    bannerImage: "/img/breadcrumb.jpg",
    bannerTitle: "Solar Street Light Installation in Lucknow & Uttar Pradesh",
    bannerSubTitle:
      "Automatic Dusk-to-Dawn Solar LED Lights for Roads, Colonies, Villages & Industrial Areas",
    bannertagline:
      "Solar Street Light Installation in Lucknow | Vasudhaiv Enterprises",
    description:
      "Solar street lights are an economical and efficient lighting solution for streets, villages, highways, residential colonies, and commercial areas",

    detailsDescription:
      "At Vasudhaiv Enterprises, we provide solar street light installation services in Lucknow and across Uttar Pradesh — with a focus on high-quality solar LED lights that run at zero electricity cost. Our solutions are ideal for government contracts, residential colonies, industrial areas, and rural development projects.",
    icon: "/img/service/icon/s-icon-11.svg",
    link: "/services/6",
    delay: ".5",
    image: "/img/service/details-6.jpg",
    serviceTitle: "Solar Street Light Solutions We Provide",
    servicesubline: "Our services include:",
    servicebottomline:
      "At Vasudhaiv Enterprises, we provide complete installation of solar-powered street lighting systems.",
    types: [
      "Standard roads & colonies — most popular",
      "Integrated Solar Street Lights (All-in-one panel + battery + light)",
      "High Mast Solar Lights (Highways, parking lots, large areas)",
      "Motion Sensor Street Lights (Auto-dim + brighten on movement)",
      "Smart Solar Lighting Systems (Remote monitoring + IoT-enabled — ideal for smart city & govt. projects)",
    ],
    benifitTilte: "Types of Solar Water Pumps",
    benifitSubTitle:
      "Based on your water requirements and land type, we install a wide range of solar pumps:",
    benifits: [
      "  Surface Solar Pump,For shallow water sources",
      "Submersible Solar Pump,For deep borewells",
      "DC Solar Pump,Direct solar energy, no inverter",
      "AC Solar Pump,Grid-compatible systems",
      "High-Capacity Agricultural Solar Pumps,Large farms & commercial land",
    ],
    faq: [
      {
        question: "Can I run my AC on solar?",
        answer: "Yes, with a correctly sized system.",
        delay: ".3",
      },
    ],
  },
  {
    id: "7",
    title: "Solar Atta Chakki",
    subtitle: "Solar Street Light Solutions for Lucknow & Uttar Pradesh",
    bannerImage: "/img/breadcrumb.jpg",
    bannerTitle: "Solar Street Light Installation in Lucknow & Uttar Pradesh",
    bannerSubTitle:
      "Automatic Dusk-to-Dawn Solar LED Lights for Roads, Colonies, Villages & Industrial Areas",
    bannertagline:
      "Solar Street Light Installation in Lucknow | Vasudhaiv Enterprises",
    description:
      "Solar street lights are an economical and efficient lighting solution for streets, villages, highways, residential colonies, and commercial areas",
    detailsDescription:
      "Helping industries achieve their ESG goals while cutting operational costs. We manage large-scale CAPEX and OPEX solar models for factories, warehouses, and corporate offices.",
    icon: "/img/service/icon/s-icon-1.svg",
    link: "/services/7",
    delay: ".7",
    image: "/img/service/details-7.jpg",
    serviceTitle: "",
    servicesubline: "",
    servicebottomline: "",
    types: [
      "Accelerated depreciation types",
      "Stable energy costs for 25 years",
      "Enhanced corporate green image",
    ],
    benifitTilte: "",
    benifitSubTitle: "",
    benifits: [],
    faq: [
      {
        question: "Do you offer financing?",
        answer: "Yes, we partner with banks for solar loans.",
        delay: ".3",
      },
    ],
  },
];

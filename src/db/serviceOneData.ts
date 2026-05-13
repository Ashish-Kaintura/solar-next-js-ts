export interface FAQType {
  question: string;
  answer: string;
  delay: string;
}

export interface ServiceDataType {
  id: string | number;
  slug:string;
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
  servicePointer: string[];
  benifitTilte: string;
  benifitSubTitle: string;
  benifits: string[];
  typeTilte: string;
  typeSubTitle: string;
  servicetype: string[];
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
  whychooseus?: string[];
  faq: FAQType[];
}

export const serviceOneData: ServiceDataType[] = [
  {
    id: "solar-water-pumps",
    slug: "solar-water-pumps",
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
    servicePointer: [
      "Submersible solar pumps",
      "Surface solar pumps",
      "DC and AC solar pump systems",
      "Professional installation and setup",
      "Full installation & commissioning",
    ],
    typeTilte: "Types of Solar Water Pumps",
    typeSubTitle:
      "Based on your water requirements and land type, we install a wide range of solar pumps:",
    servicetype: [
      "Surface Solar Pump\nFor shallow water sources",
      "Submersible Solar Pump\nFor deep borewells",
      "DC Solar Pump\nDirect solar energy, no inverter",
      "AC Solar Pump\nGrid-compatible systems",
      "High-Capacity Agricultural Solar Pumps\nLarge farms & commercial land",
    ],
    benifitTilte: "What Are the Benefits of Solar Pumps?",
    benifitSubTitle:
      "Solar water pumps help farmers reduce irrigation costs by replacing diesel and electricity-powered pumps",
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
    whychooseus: [
      "Years of solar irrigation experience",
      "PM-KUSUM subsidy documentation support",
      "High-quality durable pump systems",
      "Complete installation & commissioning",
      "On-site support across Uttar Pradesh",
    ],
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
];

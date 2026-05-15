export interface FAQType {
  question: string;
  answer: string;
  delay: string;
}

export interface ServiceDataType {
  id: string | number;
  slug: string;
  metatitle: string;
  metadesc: string;
  title: string;
  subtitle: string;
  bannerImage?: string;
  mainimg?: string;
  img2?: string;
  img3?: string;
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
  typeSubTitlebootom?: string;
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
    id: "solar-water-pumps-lucknow",
    slug: "solar-water-pumps",
    metatitle:
      "Solar Water Pump Installation in Lucknow | Vasudhaiv Enterprises",
    metadesc:
      "Solar water pump installation in Lucknow & UP. Submersible & surface pumps with govt. subsidy support. Call Vasudhaiv Enterprises",
    title: "Solar Water Pumps",
    subtitle: "Solar Water Pumps for Agriculture",
    bannerImage: "/img/service/waterpunpbanner.png",
    mainimg: "",
    img2: "/img/service/solarpumpimg2.png",
    img3: "/img/service/solarpunpimg3.png",
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
    image: "/img/service/details-1.jpg",
    serviceTitle: " Solar Water Pump Solutions We Provide",
    servicesubline:
      "We provide customized solar water pump solutions based on your irrigation and agricultural requirements.",
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
          link: "https://wa.me/918840315311",
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
  {
    id: "solar-street-light-lucknow",
    slug: "solar-street-lights",
    metatitle:
      "Solar Water Pump Installation in Lucknow | Vasudhaiv Enterprises",
    metadesc:
      "Solar street light installation in Lucknow & UP. LED solar lights for roads, colonies, villages & govt. projects. Affordable pricing. Call now.",
    title: "Solar Street Lights",
    subtitle: "Solar Street Light Solutions for Lucknow & Uttar Pradesh",
    bannerImage: "/img/breadcrumb.jpg",
    mainimg: "",
    img2: "/img/service/solarpumpimg2.png",
    img3: "/img/service/solarpunpimg3.png",
    bannerTitle: "Solar Street Light Installation in Lucknow & Uttar Pradesh",
    bannerSubTitle:
      "Automatic Dusk-to-Dawn Solar LED Lights for Roads, Colonies, Villages & Industrial Areas",
    bannertagline: "Solar Street Light",
    description:
      "Solar street lights are an economical and efficient lighting solution for streets, villages, highways, residential colonies, and commercial areas",

    detailsDescription:
      "At Vasudhaiv Enterprises, we provide solar street light installation services in Lucknow and across Uttar Pradesh — with a focus on high-quality solar LED lights that run at zero electricity cost. Our solutions are ideal for government contracts, residential colonies, industrial areas, and rural development projects",
    icon: "/img/service/icon/s-icon-11.svg",
    link: "/services/5",
    delay: ".3",
    image: "/img/service/details-1.jpg",
    serviceTitle: "Solar Street Light Solutions We Provide",
    servicesubline:
      "At Vasudhaiv Enterprises, we provide complete installation of solar-powered street lighting systems",
    servicebottomline:
      "Our promise: fully efficient, reliable, and low-maintenance solar lighting for every project",
    servicePointer: [
      "Solar LED street light installation",
      "Automatic dusk-to-dawn lighting systems",
      "High-mast solar lights for highways & large areas",
      "Outdoor boundary and perimeter lighting",
      "Complete installation and post-installation maintenance",
    ],
    typeTilte: "Types of Solar Street Lights We Install",
    typeSubTitle:
      "We help you select and install the best solar lighting type based on your project",
    servicetype: [
      "LED Solar Street Lights Standard roads & colonies — most popular",
      "Integrated Solar Street Lights All-in-one panel + battery + light",
      "High Mast Solar Lights Highways, parking lots, large areas",
      "Motion Sensor Street Lights Auto-dim + brighten on movement",
      "Smart Solar Lighting Systems Remote monitoring + IoT-enabled — ideal for smart city & govt. projects",
    ],
    typeSubTitlebootom:
      "We first assess your requirements and help you choose the most suitable system",
    benifitTilte: "Why Solar Street Lights Are the Better Choice",
    benifitSubTitle:
      "Here are the key benefits of choosing solar-powered street lighting",
    benifits: [
      "Zero Electricity Cost 100% solar powered",
      "Automatic On/Off Dusk-to-dawn sensor",
      "Minimal Maintenance Low upkeep cost",
      "Long Battery Backup 12+ hours full brightness",
      "Eco-Friendly Zero carbon emissions",
      "No Wiring Needed Rural areas mein bhi easy install",
    ],
    installationProcess: {
      title: "Ideal Applications for Solar Street Lights  ",
      subtitle: "Our solar street lighting solutions are suitable for:",
      steps: [
        {
          id: "1",
          title: "Roads & Highways",
          description: "",
        },
        {
          id: "2",
          title: "Residential Colonies",
          description: "",
        },
        {
          id: "3",
          title: "Villages & Gram Panchayat",
          description: "",
        },
        {
          id: "4",
          title: "Industrial Parks",
          description: "",
        },
        {
          id: "5",
          title: "Govt. & Nagar Nigam Projects",
          description: "",
        },
        {
          id: "6",
          title: "Parking Lots & Campuses",
          description: "",
        },
      ],
    },
    pricingSection: {
      title: "Solar Street Light Cost & Pricing",
      subtitle:
        "Solar street light pricing depends on wattage, battery type, pole height, and installation location.",
      plans: [
        {
          id: "1",
          title: "12W–30W",
          subtitle: "Small roads / lanes",
          price: "₹X,XXX",
          note: "per unit installed",
          featured: false,
        },
        {
          id: "2",
          title: "40W–60W",
          subtitle: "Colonies & village roads",
          price: "₹X,XXX",
          note: "per unit installed",
          featured: true,
          badge: "Most Popular",
        },
        {
          id: "3",
          title: "80W–150W+",
          subtitle: "Highways & bulk projects",
          price: "Custom",
          note: "Bulk discount available",
          featured: false,
        },
      ],
    },
    farmerSupport: {
      title: "We also offer",
      items: [
        "Bulk installation packages for large projects",
        "Government project support & documentation",
        "Long-lasting lithium battery systems",
        "Reduced electricity & maintenance cost over 25+ years",
      ],
    },
    serviceCoverage: {
      title: "Solar Light Installation in Lucknow & Uttar Pradesh",
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
      title: "Light Up Your Area with Solar Power — Zero Electricity Cost",
      subtitle:
        "Solar street lights are the smart and cost-saving lighting solution for roads, colonies, and villages. Contact Vasudhaiv Enterprises to install Solar Street Lights in Lucknow and across Uttar Pradesh",
      buttons: [
        {
          label: "Book Free Site Visit",
          link: "/contact",
          primary: true,
        },
        {
          label: "WhatsApp Enquiry",
          link: "https://wa.me/918840315311",
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
      "Certified solar lighting experts",
      "ISI / BIS certified products only",
      "Affordable installation for all project sizes",
      "Govt. & private projects both handled",
      "Best after-sales support & AMC",
    ],
    faq: [
      {
        question: "How long do the lights stay on?",
        answer:
          "Our lights are designed for 12 hours of full brightness per night.",
        delay: ".3",
      },
      {
        question: "Do they work in cloudy/rainy weather?",
        answer:
          "Yes — lithium battery backup works 2–3 days without direct sunlight.",
        delay: ".5",
      },
      {
        question: "Can we get bulk project pricing?",
        answer:
          "Yes — we offer discounted bulk rates for colony & govt. projects.",
        delay: ".7",
      },
      {
        question: "Do you handle government tenders?",
        answer: "Yes — panchayat, nagar nigam, and PWD solar projects handled.",
        delay: ".9",
      },
    ],
  },
];

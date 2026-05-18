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
    id: "solar-panel-installation-luckknow",
    slug: "solar-panel-installation-luckknow",
    metatitle: "Solar Panel Installation in Lucknow | Vasudhaiv Enterprises",
    metadesc:
      "Expert solar panel installation in Lucknow. PM Surya Ghar subsidy ₹78,000. On-grid, off-grid & hybrid. Call Vasudhaiv Enterprises.",
    title: "Solar Panel Installation",
    subtitle: "Solar Panel Installation in Lucknow for Homes & Businesses",
    bannerImage: "/img/breadcrumb.jpg",
    mainimg: "",
    img2: "/img/service/solarpumpimg2.png",
    img3: "/img/service/solarpunpimg3.png",
    bannerTitle: "Solar Panel Installation in Lucknow",
    bannerSubTitle:
      "Solar Panel for Home in Lucknow — Save Up to 90% on Electricity Bills",
    bannertagline:
      "Solar Panel Installation in Lucknow | Vasudhaiv Enterprises",
    description:
      "Installing a solar system is now simple and hassle-free with Vasudhaiv Enterprises. Our experienced team manages the complete process — from site inspection to final net metering connection.",
    detailsDescription:
      "We ensure safe installation, proper system design, and long-term performance for homes, offices, factories, and commercial buildings across Lucknow and Uttar Pradesh.",
    icon: "/img/service/icon/s-icon-1.svg",
    link: "/services/5",
    delay: ".3",
    image: "/img/service/details-1.jpg",
    serviceTitle: "",
    servicesubline: "",
    servicebottomline: "",
    servicePointer: [],
    typeTilte: "",
    typeSubTitle: "",
    servicetype: [],
    typeSubTitlebootom: "",
    benifitTilte: "Benefits With Our Service",
    benifitSubTitle: "",
    benifits: [
      "Save up to 90% on electricity bills every month",
      "Government subsidy up to ₹78,000 under PM Surya Ghar Yojana",
      "Complete net metering & UPPCL documentation support",
      "25-year panel performance warranty from top brands",
    ],
    installationProcess: {
      title: "How We Install Your Solar System — Step by Step",
      subtitle: "",
      steps: [
        {
          id: "1",
          title: "Free Site Survey & Roof Check",
          description: "",
        },
        {
          id: "2",
          title: "System Design & Brand Selection",
          description: "",
        },
        {
          id: "3",
          title: "Rooftop Mounting & Wiring",
          description: "",
        },
        {
          id: "4",
          title: "Net Metering Connection & Handover",
          description: "",
        },
      ],
    },
    pricingSection: {
      title: "Solar Panel Installation Cost in Uttar Pradesh",
      subtitle:
        "Cost depends on: system size, solar panel brand, roof type, inverter selection, battery requirement, and installation location.",
      plans: [
        {
          id: "1",
          title: "1 kW",
          subtitle: "Small Homes (1–2 BHK)",
          price: "₹65,000 – ₹75,000",
          note: "4–5 units",
          featured: false,
        },
        {
          id: "2",
          title: "2 kW",
          subtitle: "Medium Homes (2–3 BHK)",
          price: "₹1,10,000 – ₹1,30,000",
          note: "8–10 units",
          featured: true,
          badge: "Most Popular",
        },
        {
          id: "3",
          title: "3 kW",
          subtitle: "Large Homes (3–4 BHK)",
          price: "₹1,45,000 – ₹1,75,000",
          note: "12–15 units",
          featured: false,
        },
      ],
    },
    farmerSupport: {
      title: "Scheme Benefits",
      items: [
        "Subsidy up to ₹78,000",
        "Reduced installation cost",
        "Lower electricity bills",
        "Faster return on investment",
      ],
    },
    serviceCoverage: {
      title: "Solar Subsidy & Government Schemes in Uttar Pradesh",
      subtitle: "We Help With",
      locations: [
        "Subsidy application",
        "Required documentation",
        "UPPCL approvals",
        "Net metering process",
      ],
      bottomText:
        "Our team ensures a smooth and hassle-free experience from subsidy application to final system handover.",
    },
    ctaSection: {
      title: "Ready to Switch to Solar? Get a Free Consultation Today",
      subtitle:
        "Vasudhaiv Enterprises provides expert solar panel installation across Lucknow and Uttar Pradesh — with complete subsidy support, net metering, and post-installation service",
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
      bottomText: "“Free Site Visit” is the best-performing ",
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
        question: "What is the cost of solar panel installation in Lucknow?",
        answer:
          "The cost depends on system size and brand. Residential systems average between ₹65,000 to ₹1,75,000 after subsidy.",
        delay: ".3",
      },
      {
        question:
          "Is subsidy available for solar installation in Uttar Pradesh?",
        answer:
          "Yes. Under PM Surya Ghar Muft Bijli Yojana, you can get a government subsidy of up to ₹78,000.",
        delay: ".5",
      },
      {
        question: "Which solar system is best for home use?",
        answer:
          "For most Lucknow homes, an on-grid solar system is best as it reduces electricity bills through net metering.",
        delay: ".7",
      },
      {
        question: "How much electricity bill can solar panels save?",
        answer:
          "Solar panels can reduce your electricity bill by 70% to 90%, depending on usage and system size.",
        delay: ".9",
      },
      {
        question: "How long does solar installation take?",
        answer:
          "A normal residential rooftop solar installation takes around 1 to 3 days to complete.",
        delay: "1.1",
      },
      {
        question: "Do solar panels work during power cuts?",
        answer:
          "On-grid systems do not work during power cuts. Hybrid systems with battery backup can provide electricity during outages.",
        delay: "1.3",
      },
    ],
  },
  {
    id: "residential-solar-installation-lucknow",
    slug: "residential-solar-installation-lucknow",
    metatitle: "Solar Panel for Home in Lucknow | Vasudhaiv Enterprises",
    metadesc:
      "Residential solar panel installation in Lucknow. Govt. subsidy ₹78,000, custom home design, 1–3 day installation. Vasudhaiv Enterprises.",
    title: "Residential Solar Solutions",
    subtitle:
      "Solar Panel for Your Home in Lucknow — Save Up to 90% on Electricity Bills",
    bannerImage: "/img/breadcrumb.jpg",
    mainimg: "",
    img2: "/img/service/solarpumpimg2.png",
    img3: "/img/service/solarpunpimg3.png",
    bannerTitle: "Solar Panel for Your Home in Lucknow",
    bannerSubTitle:
      "Solar Panel for Home in Lucknow — Save Up to 90% on Electricity Bills",
    bannertagline: "Solar Panel for Home in Lucknow | Vasudhaiv Enterprises ",
    description:
      "Vasudhaiv Enterprises helps Lucknow homeowners switch to clean and affordable solar energy. Whether you live in a 1BHK apartment or a large bungalow, we design the perfect solar system for your home — with complete subsidy support and expert installation.",
    detailsDescription:
      "Our residential solar solutions are designed for maximum savings, long-term performance, and zero maintenance headaches for families across Lucknow and Uttar Pradesh",
    icon: "/img/service/icon/s-icon-2.svg",
    link: "/services/5",
    delay: ".3",
    image: "/img/service/details-1.jpg",
    serviceTitle: "Solar Panel for Your Home in Lucknow",
    servicesubline: "Benefits With Our Service",
    servicebottomline: "Complete installation in just 1–3 days",
    servicePointer: [
      "Save up to 90% on monthly electricity bills",
      "Government subsidy up to ₹78,000 for home solar",
      "Custom system design for your home size & usage",
      "Trusted brands: Adani, Tata, Waaree solar panel",
    ],
    typeTilte: "How Much Roof Space Does Your Home Need for Solar",
    typeSubTitle:
      "The amount of roof space required for solar panels depends on your electricity usage and system size.",
    servicetype: [
      " 1kW 80–100 sq. ft. ~1 car parking spac",
      "2kW 160–200 sq. ft. Small rooftop",
      "3k 250–300 sq. ft Medium rooftop",
      "5kW 400–500 sq. ft. Large bungalow",
    ],
    typeSubTitlebootom:
      "Most Indian homes in Lucknow easily have enough rooftop space for solar installation",
    benifitTilte: "Choose the Right Solar System Size for Your Home",
    benifitSubTitle:
      "Choosing the right system size is important for maximum savings",
    benifits: [
      "1kW Solar System — Best for small homes with lights, fans & TV",
      "Ideal for 1–2 BHK homes — Generates 4–5 units/day",
      "2kW Solar System — Runs fridge, washing machine & basic appliances",
      "Ideal for 2–3 BHK homes — Saves ₹1,500–₹2,500/month",
      "3kW–5kW Solar System — Perfect for AC & multiple appliances",
      "Ideal for 3–5 BHK homes / villas — Reduces bills by 80–90%",
    ],
    installationProcess: {
      title: "How Net Metering Works After Solar Installation",
      subtitle:
        "Net metering allows you to save more by exporting extra solar electricity to the grid.",
      steps: [
        {
          id: "1",
          title: "Solar panels generate electricity during the day",
          description:
            "Your home uses solar power first — free electricity during daylight hours.",
        },
        {
          id: "2",
          title: "Extra power is sent to the UPPCL grid",
          description:
            "Surplus generation goes back to the electricity grid automatically.",
        },
        {
          id: "3",
          title: "Your meter runs backward (credits accumulate)",
          description:
            "UPPCL gives you credit units for every unit sent to the grid.",
        },
        {
          id: "4",
          title: "You pay only for net electricity used",
          description:
            "Your final bill = units consumed minus units exported to grid.",
        },
        {
          id: "5",
          title: "Monthly savings increase automatically",
          description:
            "The more excess solar energy you export, the more savings you receive on electricity bills.",
        },
        {
          id: "6",
          title: "Enjoy long-term reduced electricity costs",
          description:
            "This system ensures maximum savings on your electricity bill every month.",
        },
      ],
    },
    pricingSection: {
      title: "How Much Will You Save Monthly on Your Electricity Bill",
      subtitle:
        "Installing a home solar system can significantly reduce your electricity expenses. Here's an estimate based on system size:",
      plans: [
        {
          id: "1",
          title: "1 kW",
          subtitle: "Monthly Savings",
          price: "₹800 – ₹1,000",
          note: "	1–2 BHK 	4–5 units",
          featured: false,
        },
        {
          id: "2",
          title: "2 kW",
          subtitle: "Monthly Savings",
          price: "₹1,500 – ₹2,500",
          note: "2–3 BHK",
          featured: true,
          badge: "8–10 units",
        },
        {
          id: "3",
          title: "3 kw",
          subtitle: "Highways & bulk projects",
          price: "₹3,000 – ₹4,500",
          note: "3–4 BHK 12–15 units",
          featured: false,
        },
      ],
    },
    farmerSupport: {
      title: "Subsidy Benefits",
      items: [
        "Up to ₹78,000 subsidy",
        "Lower installation cost",
        "Faster return on investment",
        "Reduced electricity bills",
      ],
    },
    serviceCoverage: {
      title: "PM Surya Ghar Yojana — Government Subsidy for Home Solar in UP",
      subtitle: "We Help With",
      locations: [
        "Complete subsidy application",
        "Required documentation",
        "UPPCL approvals",
        "Net metering process",
      ],
      bottomText:
        "We help homeowners in Lucknow with complete subsidy application, documentation, and approval processes",
    },
    ctaSection: {
      title: "Ready to Switch to Solar at Home? Book a Free Site Survey Today",
      subtitle:
        "Vasudhaiv Enterprises provides expert residential solar installation across Lucknow and Uttar Pradesh — with complete PM Surya Ghar subsidy support, net metering, and 25-year warranty",
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
      bottomText: "“Free Site Visit” is the best-performing ",
    },
    whychooseus: [
      "Certified solar experts",
      "ISI / BIS certified products",
      "Affordable installation",
      "Govt. & private projects",
      "Best after-sales & AMC",
    ],
    faq: [
      {
        question: "Which solar system is best for home in Lucknow?",
        answer:
          "For most homes, a 2kW–3kW on-grid solar system is best. It saves ₹1,500–₹4,500 per month on electricity bills.",
        delay: ".3",
      },
      {
        question: "How much roof space is needed for solar panels?",
        answer:
          "A 1kW system needs 80–100 sq. ft. Most Lucknow homes have more than enough rooftop area.",
        delay: ".5",
      },
      {
        question: "Is PM Surya Ghar Yojana subsidy available in UP?",
        answer:
          "Yes — up to ₹78,000 subsidy for residential solar. We handle the complete application process.",
        delay: ".7",
      },
      {
        question: "What is net metering and how does it work?",
        answer:
          "Net metering sends extra solar electricity to the UPPCL grid. You get credit units and pay only for net electricity used.",
        delay: ".9",
      },
      {
        question: "How long does home solar installation take?",
        answer:
          "A residential rooftop solar installation is completed in 1–3 days with zero disruption to daily life.",
        delay: "1.1",
      },
      {
        question: "What is included in the home solar package?",
        answer:
          "Solar panels, inverter, mounting structure, wiring, net metering setup, and full installation & testing — everything included.",
        delay: "1.3",
      },
    ],
  },
  {
    id: "commercial-solar-installation-lucknow",
    slug: "commercial-solar-installation-lucknow",
    metatitle: "Commercial Solar Solutions",
    metadesc:
      "Commercial solar installation for industries, offices & factories in Lucknow & UP. On-grid systems, net metering & full project support. Call now",
    title: "Commercial Solar Solutions",
    subtitle: "Commercial Solar Solutions for Businesses",
    bannerImage: "/img/breadcrumb.jpg",
    mainimg: "",
    img2: "/img/service/solarpumpimg2.png",
    img3: "/img/service/solarpunpimg3.png",
    bannerTitle: "Commercial Solar Installation in Lucknow & Uttar Pradesh",
    bannerSubTitle:
      "Solar Power Plants for Industries, Offices, Factories & Institutions",
    bannertagline:
      "Commercial Solar Installation in Lucknow | Vasudhaiv Enterprises",
    description:
      "These systems can provide commercial operations at the school, office, and Shop with energy savings at operational costs.",
    detailsDescription:
      "Solar energy has become essential for companies dealing with high electricity costs while maintaining profitability. Vasudhaiv Enterprises is the preferred partner for commercial solar installation across industries, offices, factories, institutions, and large commercial buildings in Lucknow and Uttar Pradesh With our services, businesses can reduce energy costs and switch to a more sustainable and reliable energy source",
    icon: "/img/service/icon/s-icon-3.svg",
    link: "/services/5",
    delay: ".3",
    image: "/img/service/details-1.jpg",
    serviceTitle:
      "We develop and implement personalized solar systems to meet your business energy needs.",
    servicesubline: "Commercial solar services we provide:",
    servicebottomline:
      "Our goal is to maximize energy generation and long-term savings for your business",
    servicePointer: [
      "Solar power plants for industries",
      "Rooftop solar panels for commercial offices",
      "Solar systems for commercial enterprises",
      "On-grid systems with net metering",
      "Custom solar design and engineering",
    ],
    typeTilte: "Large Projects and Industrial Solar Installations",
    typeSubTitle: "We specialize in large-scale solar system installations for",
    servicetype: [
      "Manufacturing Units Factories & production plants",
      "Warehouses Large roof area — high ROI",
      "Educational Institutions Schools, colleges, universities",
      "Healthcare Hospitals & clinics",
      "Commercial Real Estate Offices, malls, complexes",
      "All Commercial Operations Any business with high power need",
    ],
    typeSubTitlebootom:
      "We handle everything from planning and design to execution — ensuring zero disruption to your business operations",
    benifitTilte: "Benefits of Going Commercial Solar",
    benifitSubTitle:
      "Going solar provides measurable and long-term advantages for your business:",
    benifits: [
      "Lower Energy Costs",
      "Higher Profit Margin",
      "Low Maintenance",
      "Renewable Energy",
      "Green Brand Image",
      "Grid Independence",
    ],
    installationProcess: {
      title: "How We Install Commercial Solar Systems",
      subtitle:
        "We follow a structured and professional process to ensure your project is completed with minimal disruption to your business:",
      steps: [
        {
          id: "1",
          title: "Site inspection and energy audit",
          description: "Building load analysis, roof assessment, shadow study",
        },
        {
          id: "2",
          title: "Custom system design to project specifications",
          description: "Electrical layout, panel placement, inverter sizing",
        },
        {
          id: "3",
          title: "Transparent cost estimation & project budget",
          description: "Detailed quote with no hidden charges",
        },
        {
          id: "4",
          title: "Installation by certified and trained engineers",
          description: "Zero-disruption installation schedule",
        },
        {
          id: "5",
          title: "System commissioning, net metering setup & handover",
          description: "Full testing, DISCOM coordination, documentation",
        },
      ],
    },
    pricingSection: {
      title: "",
      subtitle: "",
      plans: [],
    },

    farmerSupport: {
      title: "",
      items: [],
    },
    serviceCoverage: {
      title: " Commercial Solar Installation Across Lucknow & Uttar Pradesh",
      subtitle:
        "We install commercial solar systems across all major cities in UP — for industries of all sizes:",
      locations: [
        "Lucknow",
        "Kanpur",
        "Ayodhya",
        "Barabanki",
        "Sitapur",
        "Sultanpur",
        "Nearby rural areas across UP",
      ],
      bottomText: "",
    },
    ctaSection: {
      title: "Are Energy Bills Draining Your Business Profits?",
      subtitle:
        "Vasudhaiv Enterprises provides expert commercial solar installation across Lucknow and Uttar Pradesh. Contact our team to book your free consultation and energy audit — and find out exactly how much your business can save.",
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
      bottomText: "“Free Site Visit” is the best-performing ",
    },
    whychooseus: [
      "100+ commercial installations in UP",
      "Certified in-house engineers",
      "On-grid & net metering expertise",
      "End-to-end project management",
      "Post-installation AMC support",
    ],
    faq: [
      {
        question: "What system size does my business need?",
        answer:
          "Based on your monthly units consumed — we do a free energy audit.",
        delay: ".3",
      },
      {
        question: "Is net metering available in UP?",
        answer:
          "Yes — we handle the full DISCOM net metering application process.",
        delay: ".5",
      },
      {
        question: "What is the ROI timeline?",
        answer: "Typically 3–5 years with 25+ years of savings after payback.",
        delay: ".7",
      },
      {
        question: "Do you provide AMC after installation?",
        answer:
          "Yes — we offer annual maintenance contracts for all our commercial installations.",
        delay: ".9",
      },
    ],
  },
  {
    id: "solar-amc-lucknow",
    slug: "solar-amc-lucknow",
    metatitle: "Solar AMC Services In Lucknow And Uttar Pradesh",
    metadesc: "Professional Solar Annual Maintenance & Repair Services",
    title: "Solar AMC (Maintenance)",
    subtitle: " Solar Panel Maintenance Services",
    bannerImage: "/img/service/waterpunpbanner.png",
    mainimg: "",
    img2: "/img/service/solarpumpimg2.png",
    img3: "/img/service/solarpunpimg3.png",
    bannerTitle: "Solar AMC Services In Lucknow And Uttar Pradesh",
    bannerSubTitle: "Professional Solar Annual Maintenance & Repair Service",
    bannertagline: "Solar AMC Services in Lucknow | Vasudhaiv Enterprises",
    description:
      "We provide a long-term service of maintaining your solar system to keep you worry-free by providing quarterly and monthly visits and cleaning.",
    detailsDescription:
      "Solar panels require regular cleaning and inspection for maximum efficiency. Cleaning dust and obstructions from solar panels helps maximize energy generation.",
    icon: "/img/service/icon/s-icon-4.svg",
    link: "/services/5",
    delay: ".3",
    image: "/img/service/details-1.jpg",
    serviceTitle: "Some of our offered services are",
    servicesubline: "",
    servicebottomline:
      "We ensure your solar system performs efficiently and delivers maximum output",
    servicePointer: [
      "Solar panel cleaning",
      "Solar panel inspection and performance testing",
      "Inspection of wiring, connections, and electrical components",
      "Inverter inspection and servicing",
      "System troubleshooting and repair services",
    ],
    typeTilte: "",
    typeSubTitle: "",
    servicetype: [],
    benifitTilte: "Benefits of Solar AMC Services",
    benifitSubTitle:
      "Regular maintenance improves system efficiency and increases long-term savings.",
    benifits: [
      "Maximum solar energy generation",
      "Improved system efficiency",
      "Increased system lifespan",
      "Early detection — prevent major failures",
      "Preventive maintenance — reduces repair costs",
    ],

    installationProcess: {
      title: "Solar Repair And Inspection Services",
      subtitle:
        "If your solar system underperforms, our team provides reliable repair and inspection services.",
      steps: [
        {
          id: "1",
          title: "System Troubleshooting",
          description: "",
        },
        {
          id: "2",
          title: "Inverter faults and failures",
          description: "",
        },
        {
          id: "3",
          title: "Solar panel performance issues",
          description: "",
        },
        {
          id: "4",
          title: "Electrical faults and wiring issues",
          description: "",
        },
        {
          id: "5",
          title: "Complete solar system inspection",
          description: "",
        },
      ],
    },
    pricingSection: {
      title: "AMC Plans & Pricing",
      subtitle:
        "Flexible AMC Plans for All Solar Systems — residential solar PV to large commercial power plants.",
      plans: [
        {
          id: "1",
          title: "Basic Plan",
          subtitle: "Residential",
          price: "₹X,XXX/yr",
          note: "Standard",
          featured: false,
        },
        {
          id: "2",
          title: "Most Popular",
          subtitle: "Commercial",
          price: "₹X,XXX/yr",
          note: "Comprehensive AMC support",
          featured: true,
          badge: "Most Popular",
        },
        {
          id: "3",
          title: "Industrial",
          subtitle: "Large solar power plants",
          price: "Custom",
          note: "Custom maintenance packages",
          featured: false,
        },
      ],
    },
    farmerSupport: {
      title: "",
      items: [],
    },
    serviceCoverage: {
      title: "Solar AMC Services In Lucknow And Uttar Pradesh",
      subtitle: "We provide Solar AMC services across:",
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
        "Our team provides fast on-site inspection and maintenance support",
    },
    ctaSection: {
      title: " Keep Your Solar System Performing at Its Best",
      subtitle:
        "Keep your solar system running efficiently with professional AMC and maintenance support. Vasudhaiv Enterprises provides trusted Solar AMC services across Lucknow, Uttar Pradesh.",
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
      bottomText: "“Free Site Visit” is the best-performing ",
    },
    whychooseus: [
      "Experienced Team for Solar Maintenance",
      "On-Site Service with Rapid Turnaround",
      "Competitive AMC Pricing",
      "System Inspection & All Services",
      "Trusted across Uttar Pradesh",
    ],
    faq: [
      {
        question: "What is covered in AMC?",
        answer: "Cleaning, technical inspection, and minor repairs.",
        delay: ".3",
      },
      {
        question: "How often should panels be cleaned?",
        answer: "Every 3 months for best efficiency.",
        delay: ".5",
      },
      {
        question: "Do you serve Kanpur / Ayodhya?",
        answer: "Yes, we cover all major UP cities.",
        delay: ".7",
      },
      {
        question: "What is your response time?",
        answer: "24-48 hours on-site support.",
        delay: ".9",
      },
    ],
  },
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
    mainimg: "/img/service/mainsolarpum.png",
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
    serviceTitle: "Solar Water Pump Solutions We Provide",
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
      bottomText: "“Free Site Visit” is the best-performing ",
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
    id: "solar-atta-chakki-lucknow",
    slug: "solar-atta-chakki-lucknow",
    metatitle: "Solar Atta Chakki Installation in Lucknow & Uttar Pradesh",
    metadesc:
      "Solar atta chakki installation in Lucknow & UP. Solar flour mill for villages, small businesses & rural entrepreneurs. Affordable pricing. Call now",
    title: "Solar Atta Chakki",
    subtitle: "Solar Atta Chakki — Affordable Solar Flour Mill Solution",
    bannerImage: "/img/breadcrumb.jpg",
    mainimg: "",
    img2: "/img/service/solarpumpimg2.png",
    img3: "/img/service/solarpunpimg3.png",
    bannerTitle: "Solar Street Light Installation in Lucknow & Uttar Pradesh",
    bannerSubTitle:
      "Solar-Powered Flour Mill for Villages, Small Shops & Rural Businesses — Affordable & Energy-Efficient",
    bannertagline: "Solar Street Light",
    description:
      "Solar street lights are an economical and efficient lighting solution for streets, villages, highways, residential colonies, and commercial areas",
    detailsDescription:
      "Solar Atta Chakki is a cost-effective solution for small businesses, rural entrepreneurs, and home-based flour milling units. At Vasudhaiv Enterprises, we provide Solar Atta Chakki installation services in Lucknow and across Uttar Pradesh at affordable pricing. These systems use solar energy to reduce electricity costs and improve long-term business savings. Our solar Atta Chakki systems are ideal for villages, small shops, and businesses looking for affordable and energy-efficient grinding solutions",
    icon: "/img/service/icon/s-icon-1.svg",
    link: "/services/5",
    delay: ".3",
    image: "/img/service/details-1.jpg",
    serviceTitle: "Solar Atta Chakki Features",
    servicesubline:
      "We provide complete installation with all required equipment and setup support for solar-powered atta chakki systems.",
    servicebottomline:
      "We focus on reliable installation, efficient performance, and long-term system durability.",
    servicePointer: [
      "Solar flour mill systems",
      "Small-scale atta chakki systems for startups and new businesses",
      "Commercial grinding systems for shops and enterprises",
      "Solar hybrid milling systems (solar + grid backup)",
      "Complete installation and commissioning support",
    ],
    typeTilte: "Types of Solar Atta Chakki Systems",
    typeSubTitle:
      "We install solar atta chakki systems based on your motor capacity and business requirement:",
    servicetype: [
      "3–5 HP Home-based & small shop",
      "7.5–10 HP Village / semi-commercial",
      "15–20 HP Commercial flour mill",
    ],
    typeSubTitlebootom:
      "We support systems from 3HP up to 20HP motors — for home use to full commercial flour mills.",
    benifitTilte: "Benefits of Solar Atta Chakki Systems",
    benifitSubTitle: "",
    benifits: [
      "No Grid Dependency Works without electricity",
      "Low Operating Cost Zero fuel, minimal bills",
      "High Grinding Efficiency Consistent flour quality",
      "Rural-Friendly Works in villages & towns",
      "Eco-Friendly Zero carbon, clean energy",
      "Long-Term Profits Business savings 25+ yrs",
    ],
    installationProcess: {
      title: "How We Install Solar Atta Chakki Systems",
      subtitle:
        "Our installation process is simple, professional, and hassle-free:",
      steps: [
        {
          id: "1",
          title: "Site Visit & Requirement Assessment",
          description: "Motor HP, grinding load, location, power availability",
        },
        {
          id: "2",
          title: "Selecting the Appropriate Solar System",
          description:
            "Panel size, inverter type (high-torque), battery if needed",
        },
        {
          id: "3",
          title: "Installation by Our Expert Team",
          description: "Panel mounting, motor wiring, inverter setup",
        },
        {
          id: "4",
          title: "Final System Testing & Performance Inspection",
          description: "Load testing, chakki operation at full capacity",
        },
        {
          id: "5",
          title: "System Usage Guidance & Operational Support",
          description: "Owner training, maintenance tips, warranty info",
        },
      ],
    },
    pricingSection: {
      title: "Solar Atta Chakki Price",
      subtitle:
        "Solar Atta Chakki pricing depends on system capacity and your business requirements",
      plans: [
        {
          id: "1",
          title: "3–5 HP System",
          subtitle: "Home / Small Shop",
          price: "₹X,XXX",
          note: "Subsidy check karo",
          featured: false,
        },
        {
          id: "2",
          title: "7.5–10 HP",
          subtitle: "Village / Semi-Commercial",
          price: "₹X,XXX",
          note: "EMI available",
          featured: true,
          badge: "Most Popular",
        },
        {
          id: "3",
          title: "15–20 HP",
          subtitle: "Commercial Mill",
          price: "Custom",
          note: "Call for quote",
          featured: false,
        },
      ],
    },
    farmerSupport: {
      title: "We provide:",
      items: [
        "Cost-effective installation services",
        "EMI options (where available)",
        "Guidance on government subsidy schemes (if applicable)",
        "Customized solutions based on your budget and needs",
      ],
    },
    serviceCoverage: {
      title: " Solar Atta Chakki Installation Areas",
      subtitle: "We provide installation services across:",
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
        "Our services are available for rural areas, small towns, shops, and local businesses across Uttar Pradesh.",
    },
    ctaSection: {
      title: "Start Your Solar Atta Chakki Business Today",
      subtitle:
        "Start your energy-efficient flour mill business with affordable solar solutions. Vasudhaiv Enterprises provides professional Solar Atta Chakki installation services across Lucknow and Uttar Pradesh — for villages, small shops, and rural entrepreneurs.",
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
      bottomText: "“Free Site Visit” is the best-performing ",
    },
    whychooseus: [
      "Expert solar installation team",
      "High-quality solar systems",
      "Affordable pricing options",
      "Reliable service across Uttar Pradesh",
      "End-to-end support — setup to maintenance",
    ],
    faq: [
      {
        question: "What HP motor can solar handle?",
        answer: "We support 3HP up to 20HP motors for atta chakki systems.",
        delay: ".3",
      },
      {
        question: "Kya bijli cut hone par bhi kaam karega?",
        answer:
          "Haan — solar hybrid system daytime mein bina grid ke chalta hai.",
        delay: ".5",
      },
      {
        question: "Kya government subsidy milti hai?",
        answer: "Haan — applicable schemes ke liye hum guidance dete hain.",
        delay: ".7",
      },
      {
        question: "Installation mein kitna time lagta hai?",
        answer: "Typically 1–2 days depending on system size and site.",
        delay: ".9",
      },
    ],
  },
  {
    id: "solar-street-light-lucknow",
    slug: "solar-street-lights-lucknow",
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
      bottomText: "“Free Site Visit” is the best-performing ",
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

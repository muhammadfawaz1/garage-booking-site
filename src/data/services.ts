import {
  BatteryCharging,
  Car,
  Gauge,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench
} from "lucide-react";

export type ServiceSlug =
  | "tyres-norwich"
  | "puncture-repairs-norwich"
  | "wheel-balancing-norwich"
  | "tpms-tyre-pressure-sensors-norwich"
  | "mobile-tyre-fitting-norwich";

export type Service = {
  slug: ServiceSlug;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  keywords: string[];
  icon: typeof Car;
  image: string;
  benefits: string[];
  process: string[];
  why: string[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: Record<ServiceSlug, Service> = {
  "tyres-norwich": {
    slug: "tyres-norwich",
    navLabel: "New Tyres",
    title: "New Tyres in Norwich",
    metaTitle: "Tyres Norwich | Same-Day New Tyre Fitting | GOGO TYRE",
    metaDescription:
      "New tyres in Norwich from GOGO TYRE. Budget, mid-range and premium tyres, same-day fitting, van tyres, 4x4 tyres and leverless rim-safe fitting.",
    eyebrow: "New tyres only",
    heroTitle: "Tyres fitted the {modern} way",
    heroText:
      "Budget to premium options for cars, vans, 4x4s and more — fitted the modern way with leverless, rim-safe equipment.",
    keywords: [
      "tyres Norwich",
      "tyre fitting Norwich",
      "new tyres Norwich",
      "same day tyres Norwich",
      "budget tyres Norwich",
      "premium tyres Norwich",
      "van tyres Norwich"
    ],
    icon: Car,
    image: "/images/services/tyres-hero.png",
    benefits: [
      "New tyres only, with choices for everyday driving, motorway mileage and performance needs.",
      "Budget, mid-range and premium tyre brands available for common vehicle sizes.",
      "Same-day fitting wherever availability allows, with walk-ins and appointments welcome.",
      "Rim-safe leverless fitting designed to protect alloys during installation."
    ],
    process: [
      "Send your tyre size, vehicle registration or a photo on WhatsApp.",
      "We check suitable options across budget, mid-range and premium tyres.",
      "Choose walk-in, booked garage fitting or mobile fitting around Norwich where available.",
      "Your tyres are fitted, inflated, balanced where required and checked before handover."
    ],
    why: [
      "Modern tyre equipment for a cleaner fitting process.",
      "Experienced staff who can help you choose the right tyre category.",
      "No levers, no scratches approach for alloy-wheel protection.",
      "Convenient Norwich location plus mobile tyre fitting support."
    ],
    faqs: [
      {
        question: "Do you sell part-worn tyres?",
        answer:
          "No. GOGO TYRE focuses on new tyres only, with budget, mid-range and premium choices available."
      },
      {
        question: "Can I get same-day tyre fitting in Norwich?",
        answer:
          "Same-day fitting is available where stock and diary space allow. The fastest way to check is to send your tyre size or vehicle registration on WhatsApp."
      },
      {
        question: "Do you fit tyres for vans and 4x4s?",
        answer:
          "Yes. GOGO TYRE can help with tyres for cars, vans, 4x4s, sport vehicles and caravans."
      }
    ]
  },
  "puncture-repairs-norwich": {
    slug: "puncture-repairs-norwich",
    navLabel: "Puncture Repairs",
    title: "Puncture Repairs",
    metaTitle: "Puncture Repair Norwich | Quick Tyre Repairs | GOGO TYRE",
    metaDescription:
      "Quick puncture repair in Norwich from GOGO TYRE. Safe tyre inspections, practical advice and repair where the damage is suitable.",
    eyebrow: "Fast local support",
    heroTitle: "Punctures sorted, {fast}",
    heroText:
      "Not every puncture needs a new tyre. We'll inspect it properly and repair it on the spot if it's safe to.",
    keywords: ["puncture repair Norwich", "tyre puncture repair Norwich", "quick puncture repair Norwich"],
    icon: Wrench,
    image: "/images/services/puncture-repairs-hero.png",
    benefits: [
      "Clear inspection before any work begins.",
      "Repair advice based on tyre condition and puncture position.",
      "Quick turnaround for suitable punctures.",
      "New tyre replacement options available if the tyre cannot be repaired safely."
    ],
    process: [
      "Bring the vehicle in or contact us with details of the issue.",
      "We inspect the tyre, tread condition and puncture location.",
      "If repairable, the puncture is repaired and the tyre is pressure checked.",
      "If not repairable, we explain your new tyre options clearly."
    ],
    why: [
      "Safety-led decisions, not guesswork.",
      "Same-day help where availability allows.",
      "Modern equipment and experienced staff.",
      "Easy upgrade path to new tyres if a repair is not the right option."
    ],
    faqs: [
      {
        question: "Can every puncture be repaired?",
        answer:
          "No. Repairs depend on the tyre condition, damage size and puncture location. Sidewall damage and some shoulder-area punctures usually need replacement."
      },
      {
        question: "Do I need an appointment for a puncture repair?",
        answer:
          "Walk-ins are welcome, but contacting us first helps us confirm availability and reduce waiting time."
      },
      {
        question: "Can you replace the tyre if it is not repairable?",
        answer:
          "Yes. GOGO TYRE supplies new tyres only, with budget, mid-range and premium options."
      }
    ]
  },
  "wheel-balancing-norwich": {
    slug: "wheel-balancing-norwich",
    navLabel: "Wheel Balancing",
    title: "Wheel Balancing",
    metaTitle: "Wheel Balancing Norwich | Computerised Tyre Balancing | GOGO TYRE",
    metaDescription:
      "Computerised wheel balancing in Norwich for smoother driving, reduced vibration and more even tyre wear. Visit GOGO TYRE on Page Road.",
    eyebrow: "Smoother drive",
    heroTitle: "Balanced wheels, {smoother} rides",
    heroText:
      "If your steering wheel vibrates or your tyres are wearing unevenly, accurate wheel balancing can make the drive feel calmer and more controlled.",
    keywords: ["wheel balancing Norwich", "computerised wheel balancing Norwich", "tyre balancing Norwich"],
    icon: Gauge,
    image: "/images/services/wheel-balancing-hero.png",
    benefits: [
      "Helps reduce steering wheel vibration.",
      "Supports more even tyre wear when combined with correct pressures and alignment checks.",
      "Useful after new tyre fitting, puncture work or wheel changes.",
      "Modern balancing equipment for precise correction."
    ],
    process: [
      "We remove the wheel and inspect the tyre and rim.",
      "The wheel is mounted on balancing equipment for measurement.",
      "Correction weights are applied as required.",
      "The wheel is refitted and checked before you leave."
    ],
    why: [
      "Computerised balancing equipment.",
      "Experienced staff who understand tyre and wheel behaviour.",
      "Ideal add-on when fitting new tyres.",
      "Clear local service at our Norwich garage."
    ],
    faqs: [
      {
        question: "How do I know if my wheels need balancing?",
        answer:
          "Common signs include vibration through the steering wheel, vibration at certain speeds or uneven tyre wear."
      },
      {
        question: "Should new tyres be balanced?",
        answer:
          "Yes. New tyres should normally be balanced when fitted so the wheel and tyre assembly runs smoothly."
      },
      {
        question: "Is wheel balancing the same as wheel alignment?",
        answer:
          "No. Balancing corrects weight distribution in the wheel and tyre assembly. Alignment adjusts vehicle suspension angles."
      }
    ]
  },
  "tpms-tyre-pressure-sensors-norwich": {
    slug: "tpms-tyre-pressure-sensors-norwich",
    navLabel: "TPMS Sensors",
    title: "TPMS Tyre Pressure Sensors",
    metaTitle: "TPMS Norwich | Tyre Pressure Sensor Replacement | GOGO TYRE",
    metaDescription:
      "TPMS and tyre pressure sensor support in Norwich. Sensor checks, replacement advice and tyre pressure warning help from GOGO TYRE.",
    eyebrow: "Pressure warning help",
    heroTitle: "Warning lights, {sorted}",
    heroText:
      "A tyre pressure warning light can be a simple pressure issue or a sensor problem. GOGO TYRE can help check the system and tell you exactly what it needs.",
    keywords: ["TPMS Norwich", "tyre pressure sensors Norwich", "TPMS sensor replacement Norwich"],
    icon: BatteryCharging,
    image: "/images/services/tpms-hero.png",
    benefits: [
      "Help with tyre pressure warning lights.",
      "Pressure checks and practical TPMS advice.",
      "Sensor replacement guidance where required.",
      "Convenient support alongside tyre fitting and puncture repair work."
    ],
    process: [
      "Tell us what warning light or message you are seeing.",
      "We check tyre pressures and inspect for visible tyre issues.",
      "If a sensor fault is likely, we advise on replacement options.",
      "Any related tyre work can be handled at the same visit where available."
    ],
    why: [
      "Modern tyre garage familiar with current vehicle tyre systems.",
      "Clear advice before replacement work.",
      "Useful pairing with new tyres, balancing or puncture checks.",
      "Local Norwich garage with WhatsApp-first quoting."
    ],
    faqs: [
      {
        question: "What does a TPMS warning light mean?",
        answer:
          "It usually means one or more tyres may be underinflated, but it can also indicate a sensor issue depending on the vehicle."
      },
      {
        question: "Can I drive with a TPMS warning light on?",
        answer:
          "Check your tyre pressures as soon as possible. If a tyre is low or damaged, avoid driving further until it is safe."
      },
      {
        question: "Can TPMS sensors be replaced during tyre fitting?",
        answer:
          "In many cases, TPMS work can be handled alongside tyre fitting. Contact us with your vehicle details so we can advise."
      }
    ]
  },
  "mobile-tyre-fitting-norwich": {
    slug: "mobile-tyre-fitting-norwich",
    navLabel: "Mobile Tyre Fitting",
    title: "Mobile Tyre Fitting in Norwich",
    metaTitle: "Mobile Tyre Fitting Norwich | Tyres at Home or Work | GOGO TYRE",
    metaDescription:
      "Mobile tyre fitting in Norwich from GOGO TYRE. New tyres fitted at home, work or locally around Norwich where available.",
    eyebrow: "Tyres come to you",
    heroTitle: "Tyres fitted, {wherever} you are",
    heroText:
      "When getting to the garage is inconvenient, our mobile tyre fitting van can help with new tyre fitting at home, at work or locally around Norwich.",
    keywords: [
      "mobile tyre fitting Norwich",
      "mobile tyres Norwich",
      "tyre fitting at home Norwich",
      "tyre fitting at work Norwich"
    ],
    icon: Truck,
    image: "/images/services/mobile-tyre-fitting-hero.png",
    benefits: [
      "Convenient new tyre fitting at home, work or a suitable local location.",
      "Great for busy schedules, non-drivable tyres or fleet-style convenience.",
      "WhatsApp-first quoting with tyre size and vehicle details.",
      "Same-day support where diary and stock availability allow."
    ],
    process: [
      "Send your location, tyre size or vehicle registration on WhatsApp.",
      "We confirm tyre options, timing and whether mobile fitting is suitable.",
      "The mobile van arrives with the agreed tyres and fitting equipment.",
      "Your tyres are fitted and checked before completion."
    ],
    why: [
      "Mobile tyre fitting van available for Norwich and nearby areas.",
      "New tyres only, with options across budgets and brands.",
      "Convenience without losing professional fitting standards.",
      "Easy booking by WhatsApp or phone."
    ],
    faqs: [
      {
        question: "Where can mobile tyre fitting take place?",
        answer:
          "Mobile fitting can usually be arranged at home, work or a suitable local location where it is safe to work around the vehicle."
      },
      {
        question: "Do you offer same-day mobile tyre fitting?",
        answer:
          "Same-day mobile fitting may be available depending on tyre stock, location and diary space."
      },
      {
        question: "What details do you need for a mobile tyre quote?",
        answer:
          "Your tyre size or vehicle registration, location, preferred time and the service needed are the most useful details."
      }
    ]
  }
};

export const services = Object.values(servicePages);

export const overviewServices = [
  servicePages["tyres-norwich"],
  servicePages["puncture-repairs-norwich"],
  servicePages["wheel-balancing-norwich"],
  servicePages["tpms-tyre-pressure-sensors-norwich"],
  {
    slug: "tyres-norwich",
    navLabel: "Leverless Fitting",
    title: "Leverless Tyre Fitting",
    heroText: "Rim-safe tyre fitting with modern equipment designed to protect alloy wheels. No levers means no scuffed rims — ideal for performance and alloy wheels.",
    icon: ShieldCheck
  },
  servicePages["mobile-tyre-fitting-norwich"]
] as const;

export const valuePoints = [
  {
    title: "Experienced staff",
    icon: Sparkles,
    description: "Our team knows tyres inside out, helping you pick the right option without the upsell."
  },
  {
    title: "Modern equipment",
    icon: Gauge,
    description: "Leverless, computer-balanced kit built to handle modern alloy wheels with care."
  },
  {
    title: "Same-day fitting",
    icon: ShieldCheck,
    description: "Where stock and diary space allow, we can get your new tyres fitted the same day."
  },
  {
    title: "Walk-ins and appointments",
    icon: MapPin,
    description: "Drop in when it suits you, or book ahead — both work fine at GOGO TYRE."
  },
  {
    title: "Mobile fitting van",
    icon: Truck,
    description: "Can't get to us? Our mobile van brings the fitting to your home or workplace."
  },
  {
    title: "No levers, no scratches",
    icon: ShieldCheck,
    description: "Leverless fitting protects your alloys from the scuffs and marks traditional tools can cause."
  }
];
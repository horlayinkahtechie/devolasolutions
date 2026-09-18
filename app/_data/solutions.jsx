import {
  BiUser,
  BiShoppingBag,
  BiHotel,
  BiGroup,
  BiRestaurant,
  BiRocket,
  BiMobileAlt,
} from "react-icons/bi";
import { BsBuildings, BsBank2, BsTruck } from "react-icons/bs";
import { MdPointOfSale, MdRealEstateAgent, MdReceiptLong } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { formatPrice, applyDiscount } from "../_lib/currency";

/* ─────────────────────────────────────────────
   SOLUTION CATALOG
   One source of truth for every website / app
   type, its price, and its full feature list.

   Prices are stored as raw Naira numbers
   (`priceNGN`) rather than formatted strings so
   they can be rendered in NGN or USD depending on
   the visitor's detected location — use
   getDisplayPrice() / getTierDisplayPrice() to
   render them, never `priceNGN` directly.

   Consumed by:
     - app/_components/SolutionsCatalog.jsx  (home / services / pricing)
     - app/pricing/solutions/[slug]/page.jsx (full detail page)
───────────────────────────────────────────── */

/* Every project, regardless of type, hands these accounts to the client
   in their own name once development and deployment are complete. */
export const ownershipItems = [
  "Domain name",
  "Web hosting",
  "Database",
  "File & media storage",
  "Business email",
  "Payment gateway (Paystack / Flutterwave / Stripe)",
  "Analytics & Google Search Console",
  "Source code repository (GitHub)",
  "App Store & Play Store accounts (for mobile apps)",
  "Every admin login & credential",
];

const web = [
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    category: "web",
    icon: <BiUser />,
    tagline: "Show your work. Win the client.",
    priceNGN: 250000,
    priceNote: "One-time. Fully owned by you after handover.",
    summary:
      "A clean, fast personal or studio site that puts your work front and centre and turns visitors into enquiries.",
    timeline: "1–2 weeks",
    bestFor: ["Freelancers", "Creatives & photographers", "Consultants", "Studios"],
    features: [
      "Up to 6 pages (Home, About, Work, Services, Blog, Contact)",
      "Custom design matched to your personal brand",
      "Project / case-study gallery with detail pages",
      "Mobile responsive on every device",
      "Contact form + WhatsApp / email integration",
      "On-page SEO + social share previews",
      "Google Analytics setup",
      "90+ PageSpeed performance",
      "SSL / HTTPS + custom domain connection",
      "1 week post-launch support",
      "Full source code ownership",
    ],
  },
  {
    slug: "company-website",
    name: "Company / Corporate Website",
    category: "web",
    icon: <BsBuildings />,
    tagline: "The credible home base for your business.",
    priceNGN: 250000,
    priceNote: "One-time. Fully owned by you after handover.",
    summary:
      "A professional multi-page website that explains what you do, builds trust, and captures leads for your team.",
    timeline: "1–2 weeks",
    bestFor: ["SMEs", "Agencies & firms", "NGOs", "B2B service businesses"],
    features: [
      "Up to 8 pages (Home, About, Services, Team, Projects, Blog, Careers, Contact)",
      "Custom design in your brand identity",
      "Services & team sections",
      "Blog / news section with a simple CMS",
      "Contact form, Google Maps & WhatsApp",
      "Technical SEO (sitemap, schema, metadata)",
      "Newsletter signup integration",
      "Google Analytics + Search Console",
      "Mobile responsive, 90+ PageSpeed",
      "SSL + custom domain",
      "1 month post-launch support",
      "Full source code ownership",
    ],
  },
  {
    slug: "ecommerce-website",
    name: "E-Commerce Website",
    category: "web",
    icon: <BiShoppingBag />,
    tagline: "An online store built to sell.",
    priceNGN: 350000,
    pricePrefix: "From ",
    priceNote: "Three tiers — pick the one that matches your catalogue and features.",
    summary:
      "A full online store with catalogue, cart, checkout and payments. Choose Basic, Standard, or a fully customised build.",
    timeline: "3–8 weeks depending on tier",
    bestFor: ["Retail brands", "Fashion & lifestyle", "FMCG", "Growing online stores"],
    highlights: [
      "Product catalogue, cart & secure checkout",
      "Paystack / Flutterwave payment gateway",
      "Order management dashboard",
      "Inventory tracking & sales analytics (Standard+)",
    ],
    tiers: [
      {
        name: "Basic",
        priceNGN: 350000,
        description: "Everything you need to start selling online.",
        features: [
          "Up to 50 products",
          "Product catalogue with categories & search",
          "Cart & checkout",
          "1 payment gateway (Paystack or Flutterwave)",
          "Flat-rate / manual shipping",
          "Order management dashboard",
          "Email order notifications",
          "Mobile responsive + basic SEO",
          "2 weeks post-launch support",
        ],
      },
      {
        name: "Standard",
        priceNGN: 580000,
        highlight: true,
        description: "For stores with a real catalogue and repeat customers.",
        features: [
          "Everything in Basic",
          "Up to 300 products",
          "Multiple payment gateways",
          "Discount codes & coupons",
          "Customer accounts & order history",
          "Inventory / stock tracking with low-stock alerts",
          "Sales & revenue analytics dashboard",
          "Abandoned-cart email recovery",
          "Delivery zones & shipping rates",
          "1 month post-launch support",
        ],
      },
      {
        name: "Fully Customised",
        priceNGN: 950000,
        description: "A store shaped entirely around how your business works.",
        features: [
          "Everything in Standard",
          "Unlimited products",
          "Any custom feature you request (subscriptions, wholesale pricing, multi-vendor, loyalty points, etc.)",
          "Multi-currency support",
          "Advanced role-based admin",
          "Integrations (accounting, CRM, ERP, logistics APIs)",
          "Custom reports & data exports",
          "Priority build queue + 3 months support",
        ],
      },
    ],
  },
  {
    slug: "hotel-website",
    name: "Hotel Website with Booking System",
    category: "web",
    icon: <BiHotel />,
    tagline: "Take direct bookings and payments — no middleman.",
    priceNGN: 500000,
    discountPercent: 20,
    discountLabel: "Limited-Time Offer",
    priceNote:
      "Start with the hotel booking site. Toggle below to add a full restaurant management system.",
    summary:
      "A hotel site with a real-time booking engine and online payments, so guests reserve rooms directly on your website.",
    timeline: "4–6 weeks",
    bestFor: ["Hotels", "Guest houses", "Short-let & serviced apartments", "Resorts"],
    toggle: {
      addonLabel: "Restaurant Management System",
      addonDescription:
        "Add full restaurant operations on top of the hotel booking site — menu, orders, tables and food & beverage reporting, with billing linked to room accounts.",
      basePrice: 500000,
      withAddonPrice: 800000,
      baseFeatures: [
        "Room types, galleries & rate management",
        "Real-time availability calendar",
        "Online booking engine with date search",
        "Online payment / deposit (Paystack / Flutterwave)",
        "Booking dashboard (check-in / check-out, status)",
        "Admin management system",
        "Automated booking confirmation emails",
        "Guest enquiry & contact forms",
        "Amenities, gallery & location pages",
        "Mobile responsive + SEO for “hotels in [city]”",
        "1 month post-launch support",
      ],
      addonFeatures: [
        "Digital menu management (categories, items, pricing, photos)",
        "In-house order taking & kitchen tickets",
        "Table management & QR-code menu ordering",
        "Restaurant billing linked to guest room accounts",
        "Daily food & beverage sales reports",
      ],
    },
  },
  {
    slug: "crm-system",
    name: "CRM System",
    category: "web",
    icon: <BiGroup />,
    tagline: "Every lead, deal and follow-up in one place.",
    priceNGN: 800000,
    priceNote: "One-time build. Hosted on your own accounts after handover.",
    summary:
      "A custom customer-relationship system your team actually uses — pipeline, reminders, and reporting built around your process.",
    timeline: "5–7 weeks",
    bestFor: ["Sales teams", "Real estate", "Agencies", "B2B service businesses"],
    features: [
      "Contact & company database with custom fields",
      "Lead capture forms + website integration",
      "Sales pipeline / deal stages (drag & drop)",
      "Task & follow-up reminders",
      "Email logging & templates",
      "Notes, files & activity timeline per contact",
      "Role-based team access",
      "Dashboards & reports (pipeline value, conversion, activity)",
      "CSV import / export",
      "Mobile responsive web app",
      "2 months post-launch support",
    ],
  },
  {
    slug: "restaurant-website",
    name: "Restaurant Website with Reservations & Payments",
    category: "web",
    icon: <BiRestaurant />,
    tagline: "Fill more tables, take deposits upfront.",
    priceNGN: 550000,
    priceNote: "One-time. Fully owned by you after handover.",
    summary:
      "A restaurant site with a digital menu, table reservations and online payments, plus optional pickup / delivery ordering.",
    timeline: "3–5 weeks",
    bestFor: ["Restaurants", "Lounges & bars", "Cafés", "Cloud kitchens"],
    features: [
      "Digital menu with categories, photos & pricing",
      "Table reservation system with time slots",
      "Reservation management dashboard",
      "Online payment / deposit for bookings",
      "Online food ordering (pickup / delivery) — optional",
      "Automated reservation confirmations (email / SMS)",
      "Gallery, about & location pages",
      "Reviews / testimonials section",
      "Mobile responsive + local SEO",
      "1 month post-launch support",
    ],
  },
  {
    slug: "pos-inventory-system",
    name: "POS & Inventory Management System",
    category: "web",
    icon: <MdPointOfSale />,
    tagline: "Ring up sales and know your stock in real time.",
    priceNGN: 750000,
    priceNote: "One-time build. Runs on desktop & tablet.",
    summary:
      "A point-of-sale and inventory system for shops and outlets — sales, stock, suppliers and reports in one tool.",
    timeline: "5–7 weeks",
    bestFor: ["Retail shops", "Supermarkets", "Pharmacies", "Multi-branch businesses"],
    features: [
      "Point-of-sale screen (barcode / search, cart, receipt)",
      "Product & category management",
      "Real-time stock tracking & low-stock alerts",
      "Purchase orders & supplier records",
      "Multi-user with role-based permissions",
      "Multi-outlet / branch support",
      "Daily sales, profit & inventory reports",
      "Customer records & credit / debt tracking",
      "Receipt printing + PDF / email receipts",
      "Works on desktop & tablet",
      "2 months post-launch support",
    ],
  },
  {
    slug: "school-management-system",
    name: "School Management System",
    category: "web",
    icon: <FaSchool />,
    tagline: "Run the whole school from one dashboard.",
    priceNGN: 1500000,
    priceNote: "One-time build. Parent, student and staff portals included.",
    summary:
      "An end-to-end school platform — students, staff, results, fees and communication — with portals for every role.",
    timeline: "8–12 weeks",
    bestFor: ["Primary & secondary schools", "Colleges", "Training institutes", "School groups"],
    features: [
      "Student information system (enrolment, profiles, documents)",
      "Staff / teacher management",
      "Class, subject & timetable management",
      "Attendance tracking (students & staff)",
      "Exam, grading & report-card generation",
      "Fee management, invoicing & online payment",
      "Parent & student portals",
      "Announcements, events & messaging",
      "Library & inventory modules",
      "Role-based access (admin, teacher, parent, student, accountant)",
      "Dashboards & analytics",
      "3 months post-launch support",
    ],
  },
  {
    slug: "real-estate-website",
    name: "Real Estate Website",
    category: "web",
    icon: <MdRealEstateAgent />,
    tagline: "List properties, capture serious buyers.",
    priceNGN: 350000,
    priceNote: "One-time. Fully owned by you after handover.",
    summary:
      "A property listing website with search, filters, maps and agent enquiry forms, plus an admin dashboard to manage listings.",
    timeline: "3–5 weeks",
    bestFor: ["Real estate agencies", "Property developers", "Individual agents", "Short-let managers"],
    features: [
      "Property listings with photos, maps & details",
      "Advanced search & filters (price, location, type, beds)",
      "Featured / premium listings",
      "Agent profiles & direct enquiry forms",
      "Saved properties / shortlist",
      "Admin dashboard to add / edit / archive listings",
      "Mortgage / payment-plan calculator",
      "WhatsApp & call-to-action integration",
      "Mobile responsive + SEO for “property in [city]”",
      "1 month post-launch support",
    ],
  },
  {
    slug: "landing-page",
    name: "Landing Page",
    category: "web",
    icon: <BiRocket />,
    tagline: "One focused page built to convert.",
    priceNGN: 100000,
    priceNote: "One-time. Fastest way to launch.",
    summary:
      "A single high-converting page for a product, campaign or event — designed to capture leads and drive one action.",
    timeline: "3–5 days",
    bestFor: ["Product launches", "Ad campaigns", "Events & webinars", "Waitlists"],
    features: [
      "Single high-converting page",
      "Custom design & copy guidance",
      "Lead capture form + email notifications",
      "WhatsApp / call button",
      "Countdown / offer section (optional)",
      "Basic SEO + social share preview",
      "Google Analytics + Meta Pixel setup",
      "Mobile responsive, fast loading",
      "Domain connection + SSL",
      "1 week post-launch support",
    ],
  },
];

const mobile = [
  {
    slug: "ecommerce-mobile-app",
    name: "E-Commerce Mobile App + Web App + Admin",
    category: "mobile",
    icon: <BiMobileAlt />,
    tagline: "Your store on iOS, Android and the web — one system.",
    priceNGN: 6000000,
    priceNote: "Covers the mobile app, matching web app and the admin management system.",
    summary:
      "A complete commerce platform: native iOS & Android apps, a matching web app, and an admin dashboard to run everything.",
    timeline: "12–16 weeks",
    bestFor: ["Established retail brands", "Marketplaces", "Multi-vendor stores", "Scaling D2C brands"],
    features: [
      "iOS & Android app (React Native)",
      "Matching customer web app",
      "Admin / vendor management dashboard",
      "Product catalogue, search & filters",
      "Cart, checkout & multiple payment gateways",
      "User accounts, order tracking & history",
      "Push notifications & in-app messaging",
      "Inventory & order management",
      "Discounts, coupons & loyalty points",
      "Sales & customer analytics",
      "Delivery / dispatch management",
      "App Store & Play Store submission",
      "2 months post-launch support",
    ],
  },
  {
    slug: "utility-bill-payment-app",
    name: "Utility Bill Payment App",
    category: "mobile",
    icon: <MdReceiptLong />,
    tagline: "Airtime, data, power, TV — paid in seconds.",
    priceNGN: 3500000,
    priceNote: "Includes the mobile app and the admin / reconciliation dashboard.",
    summary:
      "A VTU / bills app with a wallet system, biller integrations, transaction history and a full admin back office.",
    timeline: "8–12 weeks",
    bestFor: ["Fintech startups", "Agents & aggregators", "Telcos' partners", "Existing wallets adding bills"],
    features: [
      "iOS & Android app",
      "Airtime, data, electricity, cable TV, betting & more",
      "Wallet system with funding (card, transfer, USSD)",
      "Biller / VTU aggregator API integration",
      "Transaction history & receipts",
      "User KYC & authentication (PIN / biometric)",
      "Referral & cashback system",
      "Admin dashboard (users, transactions, revenue, reconciliation)",
      "Push notifications",
      "App Store & Play Store submission",
      "1 month post-launch support",
    ],
  },
  {
    slug: "fintech-app",
    name: "Fintech Application",
    category: "mobile",
    icon: <BsBank2 />,
    tagline: "Wallets, transfers, cards and more — built to scale.",
    priceNGN: 15000000,
    pricePrefix: "Up to ",
    priceNote:
      "Final price depends on scope, regulatory requirements and third-party / licensing integrations.",
    payment: "Milestone-based",
    summary:
      "A full fintech build — mobile apps plus web dashboard — covering wallets, payments, KYC and a compliance back office.",
    timeline: "4–8 months",
    bestFor: ["Funded fintech startups", "Banks & MFBs", "Cooperatives", "Payment companies"],
    features: [
      "iOS & Android apps + web dashboard",
      "Wallet / account system, transfers & bill payments",
      "Virtual & physical card issuing (partner-dependent)",
      "Bank / payment-processor & BVN / KYC integrations",
      "Savings, budgeting or lending modules (scope-dependent)",
      "PIN, biometric & 2FA security",
      "Fraud monitoring & transaction limits",
      "Admin & compliance back office",
      "Audit logs & reporting",
      "App Store & Play Store submission",
      "3 months post-launch support",
    ],
  },
  {
    slug: "logistics-delivery-app",
    name: "Logistics & Delivery App",
    category: "mobile",
    icon: <BsTruck />,
    tagline: "Customer app, driver app and dispatch — connected.",
    priceNGN: 15000000,
    pricePrefix: "Up to ",
    priceNote: "Final price depends on fleet size, features and integrations.",
    payment: "Milestone-based",
    summary:
      "A delivery platform with customer and driver apps plus an admin dashboard — live tracking, dispatch, payments and proof of delivery.",
    timeline: "4–8 months",
    bestFor: ["Logistics companies", "On-demand delivery startups", "E-commerce fulfilment", "Courier fleets"],
    features: [
      "Customer app, driver / rider app & admin dashboard",
      "Real-time GPS tracking & live map",
      "Order / shipment creation & assignment",
      "Route optimisation & delivery status updates",
      "In-app payments, wallet & pricing engine",
      "Proof of delivery (signature / photo / OTP)",
      "Driver onboarding, earnings & payouts",
      "Ratings, support & dispute handling",
      "Push notifications & SMS alerts",
      "Analytics (deliveries, SLA, revenue)",
      "App Store & Play Store submission",
      "3 months post-launch support",
    ],
  },
];

export const solutions = [...web, ...mobile];

export const webSolutions = web;
export const appSolutions = mobile;

export function getSolution(slug) {
  return solutions.find((s) => s.slug === slug);
}

/* Render a solution's headline price in the visitor's currency — discounted,
   if the solution has a discountPercent set. */
export function getDisplayPrice(solution, currency = "NGN") {
  const amount = applyDiscount(solution.priceNGN, solution.discountPercent);
  return formatPrice(amount, currency, { prefix: solution.pricePrefix || "" });
}

/* The pre-discount price, for a strikethrough next to getDisplayPrice(). */
export function getOriginalDisplayPrice(solution, currency = "NGN") {
  return formatPrice(solution.priceNGN, currency, { prefix: solution.pricePrefix || "" });
}

/* Render one e-commerce-style tier's price in the visitor's currency. */
export function getTierDisplayPrice(tier, currency = "NGN") {
  return formatPrice(tier.priceNGN, currency);
}

/* The price shown for every type covers exactly the scope listed on that
   type's page. Anything beyond that scope is quoted separately. */
export const scopeExpansionNote =
  "Want something not listed here? Additional features beyond this scope are quoted separately and will increase the total price.";

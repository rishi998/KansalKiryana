import {
  Package,
  Info,
  Truck,
  RotateCcw,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";

// ─────────────────────────────────────────────
// Business Information
// ─────────────────────────────────────────────
export const BUSINESS = {
  name: "Kansal Dryfruit and Kiryana",
  tagline: "Your trusted partner for quality dry fruits, groceries & daily essentials.",
  industry: ["Grocery", "Dry Fruits", "Rice", "Pulses", "Spices", "Daily Essentials"],
  copyright: "© 2026 Kansal Dryfruit and Kiryana. All Rights Reserved.",
  builtBy: "Built with ❤️ to provide better customer support.",
} as const;

// ─────────────────────────────────────────────
// Contact Channels
// ─────────────────────────────────────────────
export const WHATSAPP_PRIMARY = {
  label: "Primary WhatsApp Support",
  badge: "Recommended",
  phone: "+91 8700167422",
  url: "https://wa.me/918700167422?text=Hi",
  description:
    "Get instant assistance for your queries. Our primary support representative is ready to help you.",
  features: [
    "Order Tracking",
    "Delivery Issues",
    "Product Availability",
    "Refund Requests",
    "Urgent Assistance",
  ],
} as const;

export const WHATSAPP_SECONDARY = {
  label: "Secondary WhatsApp Support",
  phone: "+91 9953956800",
  url: "https://wa.me/919953956800?text=Hi",
  description:
    "If our primary support representative is unavailable, kindly contact our secondary support number.",
  features: [
    "Alternative Contact",
    "Backup Support",
    "Order Assistance",
    "General Queries",
  ],
} as const;

export const EMAIL_SUPPORT = {
  label: "Email Support",
  address: "lizakansal28052003@gmail.com",
  url: "mailto:lizakansal28052003@gmail.com?subject=Support Request",
  description:
    "For formal communications, business enquiries, and detailed documentation, reach out via email.",
  features: [
    "Business Enquiries",
    "Bulk Orders",
    "Partnerships",
    "Documentation",
    "Product Catalogue",
  ],
} as const;

// ─────────────────────────────────────────────
// Business Hours
// ─────────────────────────────────────────────
export const BUSINESS_HOURS = {
  days: "Monday – Sunday",
  time: "9:00 AM – 9:00 PM",
  responseTime: "Usually within 15–30 minutes on WhatsApp.",
  note: "We are available all 7 days of the week to assist you.",
} as const;

// ─────────────────────────────────────────────
// Navigation Links
// ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Support", href: "#support" },
  { label: "Business Hours", href: "#hours" },
  { label: "FAQ", href: "#faq" },
  { label: "Email", href: "#email" },
] as const;

// ─────────────────────────────────────────────
// Customer Services
// ─────────────────────────────────────────────
export interface CustomerService {
  icon: typeof Package;
  title: string;
  description: string;
}

export const CUSTOMER_SERVICES: CustomerService[] = [
  {
    icon: Package,
    title: "Order Tracking",
    description:
      "Track your order status in real time. Share your Order ID on WhatsApp for instant updates.",
  },
  {
    icon: Info,
    title: "Product Information",
    description:
      "Get detailed information about our dry fruits, groceries, and daily essentials.",
  },
  {
    icon: Truck,
    title: "Delivery Support",
    description:
      "Facing delivery delays or issues? We coordinate with our delivery partners for quick resolution.",
  },
  {
    icon: RotateCcw,
    title: "Refund Assistance",
    description:
      "We process refund requests fairly and efficiently. Share your order details to get started.",
  },
  {
    icon: ShoppingCart,
    title: "Bulk Orders",
    description:
      "Planning a large order? Contact us for special bulk pricing and tailored arrangements.",
  },
  {
    icon: MessageCircle,
    title: "General Enquiries",
    description:
      "Have any other questions? We are happy to assist you with anything you need.",
  },
];

// ─────────────────────────────────────────────
// FAQ Data
// ─────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How can I track my order?",
    answer:
      "Contact us on WhatsApp at +91 8700167422 with your Order ID. Our support team will provide you with the latest status of your order within minutes.",
  },
  {
    question: "How do I request a refund?",
    answer:
      "Send your Order ID and a brief description of the issue on WhatsApp. Our team will review your request and process eligible refunds promptly.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery timelines depend on your location and the delivery partner assigned to your order. For specific timelines, please contact us on WhatsApp with your Order ID.",
  },
  {
    question: "What if I receive a damaged product?",
    answer:
      "We are sorry for the inconvenience. Please share clear photographs of the damaged product immediately on WhatsApp. We will arrange a replacement or refund as applicable.",
  },
  {
    question: "Can I place bulk orders?",
    answer:
      "Yes, we welcome bulk orders! Contact us through WhatsApp at +91 8700167422 or email at lizakansal28052003@gmail.com for special bulk pricing and availability.",
  },
];

// ─────────────────────────────────────────────
// Social Media Placeholders
// ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { platform: "WhatsApp", href: "https://wa.me/918700167422?text=Hi", ariaLabel: "Chat with us on WhatsApp" },
  { platform: "Email", href: "mailto:lizakansal28052003@gmail.com?subject=Support Request", ariaLabel: "Send us an Email" },
] as const;

// ─────────────────────────────────────────────
// SEO / Metadata
// ─────────────────────────────────────────────
export const SITE_URL = "https://kansal-support.vercel.app";

export const SEO = {
  title: "Customer Support | Kansal Dryfruit and Kiryana",
  description:
    "Need assistance with your order? Contact Kansal Dryfruit and Kiryana through WhatsApp or Email for quick support regarding orders, delivery, refunds, products, and bulk purchases.",
  keywords: [
    "Kansal Dryfruit and Kiryana",
    "Customer Support",
    "Dry Fruits",
    "Rice",
    "Dal",
    "Grocery",
    "ONDC Seller",
    "Retail Store",
    "Support",
    "WhatsApp",
    "Bulk Orders",
  ],
} as const;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SupportCard from "@/components/SupportCard";
import BusinessHours from "@/components/BusinessHours";
import CustomerServices from "@/components/CustomerServices";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-brand-primary focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      {/* Sticky glassmorphism header */}
      <Header />

      {/* Main content */}
      <main id="main-content">
        {/* Hero section with animated entrance */}
        <Hero />

        {/* WhatsApp + Email support cards */}
        <SupportCard />

        {/* Business hours */}
        <BusinessHours />

        {/* Customer service feature cards */}
        <CustomerServices />

        {/* FAQ accordion */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button (always visible) */}
      <FloatingWhatsapp />
    </>
  );
}

"use client";

import Navigation from "@/components/Navigation";
import AboutFooter from "../about/components/AboutFooter";
import HeroSection from "@/app/integrations/components/HeroSection";
import CompanyDescription from "@/app/integrations/components/CompanyDescription";
import ServicesSection from "@/app/integrations/components/ServicesSection";
import BenefitsSection from "@/app/integrations/components/BenefitsSection";
import ContactSection from "@/app/integrations/components/ContactSection";

const PRIMARY = "#4c7572";
const DARK = "#0b0f1a";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CompanyDescription />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
      <AboutFooter />
    </div>
  );
};

export default Home;

"use client";
import Navigation from "@/components/Navigation";
import PortfolioListSection from "./components/PortfolioListSection";
import AboutFooter from "../about/components/AboutFooter";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
        <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-black mt-20 mb-10 text-gray-900">
          Portfolio
        </h1>
        <PortfolioListSection />
      </div>
      <AboutFooter />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import HeroSection from "./components/HeroSection";
import CompanyStorySection from "./components/CompanyStorySection";
import TechnologySection from "./components/TechnologySection";
import ServiceDesignSection from "./components/ServiceDesignSection";
import StatisticsSection from "./components/StatisticsSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import PartnershipSection from "./components/PartnershipSection";
import AboutFooter from "./components/AboutFooter";
import TabSection from "./components/TabSection";
import Navigation from "@/components/Navigation";

const PRIMARY = "#4c7572";
const DARK = "#0b0f1a";

const GradientBall = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay }}
    className={`absolute rounded-full blur-3xl ${className}`}
  />
);

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <GradientBall
        className="w-[600px] h-[600px] bg-gradient-to-r from-blue-400/30 to-purple-400/30 -top-32 right-1/4 animate-pulse"
        delay={0.3}
      />
      <GradientBall
        className="w-[500px] h-[500px] bg-gradient-to-r from-teal-400/30 to-blue-400/30 bottom-0 left-1/3 animate-pulse"
        delay={0.5}
      />
      <GradientBall
        className="w-[400px] h-[400px] bg-gradient-to-r from-purple-400/30 to-pink-400/30 top-1/2 right-0 animate-pulse"
        delay={0.7}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content with Enhanced Layout */}
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CompanyStorySection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TechnologySection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ServiceDesignSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TabSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <StatisticsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CaseStudiesSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <PartnershipSection />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutFooter />
      </motion.div>
    </div>
  );
}

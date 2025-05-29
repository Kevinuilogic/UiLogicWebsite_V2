"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import AboutFooter from "../about/components/AboutFooter";
import HeroSection from "./components/HeroSection";
import CustomDevelopmentSection from "./components/CustomDevelopmentSection";
import EngagementModelsSection from "./components/EngagementModelsSection";
import IndustriesSection from "./components/IndustriesSection";
import TechStackSection from "./components/TechStackSection";
import ProcessSection from "./components/ProcessSection";

const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      filter: { duration: 0.4 },
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

export default function AppDevelopment() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-purple-50 -z-10" />
      <Navigation />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <CustomDevelopmentSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <EngagementModelsSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <IndustriesSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <TechStackSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <ProcessSection />
      </motion.div>
      <AboutFooter />
    </div>
  );
}

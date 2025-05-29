"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import AboutFooter from "../about/components/AboutFooter";
import HeroSection from "./components/HeroSection";
import GCPBenefitsSection from "./components/GCPBenefitsSection";
import MigrationProcessSection from "./components/MigrationProcessSection";
import {
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  Server,
  CheckCircle,
} from "lucide-react";

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

const slideInVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: 5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
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

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <motion.div
      className={className}
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
    >
      {text.split(" ").map((word: string, index: number) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={letterVariants}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

export default function AutomatedSolutions() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-purple-50 -z-10" />
      <Navigation />
      <div>
        <HeroSection />
      </div>
      <div>
        <GCPBenefitsSection />
      </div>
      <div>
        <MigrationProcessSection />
      </div>
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud-Native Solutions
              </div>
              <Text
                text="Transform Your Infrastructure with Modern Automation"
                className="text-4xl font-bold text-gray-900 leading-tight"
              />
              <Text
                text="Leverage the power of cloud-native technologies to build scalable, resilient, and efficient systems."
                className="text-lg text-gray-600"
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
                  <Cpu className="w-8 h-8 text-blue-600 mb-4" />
                  <Text
                    text="Smart Automation"
                    className="text-lg font-semibold text-gray-900 mb-2"
                  />
                  <Text
                    text="Intelligent workflows that adapt to your needs"
                    className="text-gray-600"
                  />
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
                  <Database className="w-8 h-8 text-purple-600 mb-4" />
                  <Text
                    text="Data-Driven"
                    className="text-lg font-semibold text-gray-900 mb-2"
                  />
                  <Text
                    text="Real-time analytics and insights"
                    className="text-gray-600"
                  />
                </div>
              </div>
              <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                Explore Features
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3" />
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Server className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <Text
                        text="Infrastructure as Code"
                        className="text-lg font-semibold text-gray-900"
                      />
                      <Text
                        text="Version-controlled infrastructure"
                        className="text-gray-600"
                      />
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <Text
                        text="Cloud Migration"
                        className="text-lg font-semibold text-gray-900"
                      />
                      <Text
                        text="Seamless cloud transition"
                        className="text-gray-600"
                      />
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <Text
                        text="Smart Scaling"
                        className="text-lg font-semibold text-gray-900"
                      />
                      <Text
                        text="Automated resource optimization"
                        className="text-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Text
              text="Start Your Automation Journey"
              className="text-4xl font-bold text-gray-900 mb-4"
            />
            <Text
              text="Three simple steps to transform your infrastructure"
              className="text-lg text-gray-600"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                1
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <Text
                  text="Assessment"
                  className="text-xl font-semibold text-gray-900 mb-4"
                />
                <Text
                  text="We analyze your current infrastructure and identify automation opportunities"
                  className="text-gray-600 mb-6"
                />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text
                      text="Infrastructure Audit"
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text
                      text="Performance Analysis"
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text text="Cost Optimization" className="text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                2
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <Text
                  text="Strategy"
                  className="text-xl font-semibold text-gray-900 mb-4"
                />
                <Text
                  text="We develop a customized automation roadmap for your business"
                  className="text-gray-600 mb-6"
                />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text
                      text="Custom Solution Design"
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text
                      text="Implementation Plan"
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text
                      text="Timeline & Milestones"
                      className="text-gray-700"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                3
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <Text
                  text="Implementation"
                  className="text-xl font-semibold text-gray-900 mb-4"
                />
                <Text
                  text="We execute the automation plan with continuous monitoring"
                  className="text-gray-600 mb-6"
                />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text text="Phased Deployment" className="text-gray-700" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text text="24/7 Monitoring" className="text-gray-700" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text text="Ongoing Support" className="text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Begin Your Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
      <AboutFooter />
    </div>
  );
}

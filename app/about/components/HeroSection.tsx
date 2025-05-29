"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award } from "lucide-react";

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

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <GradientBall
        className="w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 -top-32 right-1/4"
        delay={0.3}
      />
      <GradientBall
        className="w-[500px] h-[500px] bg-gradient-to-r from-teal-400/20 to-blue-400/20 bottom-0 left-1/3"
        delay={0.5}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge
                className="mb-4 text-sm font-medium px-4 py-1.5"
                style={{ backgroundColor: PRIMARY + "22", color: PRIMARY }}
              >
                About Us
              </Badge>
              <h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                style={{ color: DARK }}
              >
                Crafting Digital{" "}
                <span
                  className="relative inline-block"
                  style={{ color: PRIMARY }}
                >
                  Excellence
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1"
                    style={{ backgroundColor: PRIMARY }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
              <p
                className="text-xl max-w-xl leading-relaxed"
                style={{ color: PRIMARY }}
              >
                We are a team of passionate innovators dedicated to creating
                cutting-edge solutions that drive business growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <Button
                className="px-8 py-6 text-lg text-white"
                style={{ backgroundColor: PRIMARY }}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg"
                style={{ borderColor: PRIMARY, color: PRIMARY }}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {[
              {
                icon: <Users className="h-8 w-8" style={{ color: PRIMARY }} />,
                title: "Expert Team",
                description:
                  "Our team of skilled professionals brings years of industry experience and technical expertise.",
              },
              {
                icon: <Target className="h-8 w-8" style={{ color: PRIMARY }} />,
                title: "Innovation Focus",
                description:
                  "We stay ahead of the curve by embracing the latest technologies and methodologies.",
              },
              {
                icon: <Award className="h-8 w-8" style={{ color: PRIMARY }} />,
                title: "Quality First",
                description:
                  "We maintain the highest standards of quality in every project we undertake.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full w-12 h-12 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: PRIMARY + "22" }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: DARK }}
                    >
                      {item.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: PRIMARY }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

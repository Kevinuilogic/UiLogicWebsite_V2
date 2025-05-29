"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-12 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Badges */}

        {/* Main Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12"
        >
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-2 text-gray-900">
              AI, Cloud & Cybersecurity Solutions
            </h1>
            <div className="text-xl font-semibold text-[#4c7572] mb-2">
              at Lightning Speed
            </div>
            <p className="text-gray-700 mb-6">
              Modernize, innovate, and secure your business with our
              industry-leading expertise.
            </p>
            <Button className="bg-black text-white px-6 py-3 rounded-full font-bold text-base flex items-center gap-2 shadow hover:bg-gray-900">
              Talk to the Expert <span>🤖</span>
            </Button>
          </div>
          {/* Right: Illustration */}
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Robotic hand illustration"
              width={320}
              height={240}
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </motion.div>
        {/* Quote Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center"
        >
          {/* Left: Quote */}
          <div className="border-l-4 pl-6 border-[#4c7572] bg-cyan-50 py-6 rounded-xl flex items-center">
            <span className="text-5xl font-bold text-[#4c7572] mr-4">“</span>
            <span className="text-xl font-semibold text-gray-900">
              <Typewriter
                words={[
                  "All our engineers leverage advanced AI capabilities through extensive training and access to",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={0}
                delaySpeed={2000}
              />
            </span>
          </div>
          {/* Right: Avatar/Name */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Yann Kronberg"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div>
              <div className="font-bold text-gray-900">Yann Kronberg</div>
              <div className="text-xs text-gray-500">CTO & Co-Founder</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

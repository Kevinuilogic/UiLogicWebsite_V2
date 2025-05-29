"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb } from "lucide-react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

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

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={letterVariants}
    >
      {text.split(" ").map((word: string, index: number) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={letterVariants}
          transition={{
            duration: 0.0,
            delay: index * 0.0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function ContactFormSection() {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: false, margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl flex items-center justify-center p-8">
            <div className="relative w-full h-full">
              {/* Innovation illustration */}
              <div className="absolute bottom-8 left-8">
                <div className="w-24 h-32 bg-gradient-to-t from-pink-200 to-pink-100 rounded-t-full"></div>
                <div className="w-16 h-16 bg-[#497270] rounded-full -mt-8 ml-4 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute top-8 right-8">
                <div className="w-16 h-20 bg-gray-700 rounded flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="text-xs text-center mt-2 text-gray-600">
                  Expert
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-16 left-16 w-4 h-4 bg-orange-300 rounded-full"></div>
              <div className="absolute bottom-16 right-16 w-6 h-6 bg-pink-300 rounded-full"></div>
            </div>
          </div>
        </div>
        <motion.div
          ref={formRef}
          className="space-y-6"
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <AnimatedText
            text="Let's build a great product together"
            className="text-3xl font-bold text-gray-900"
          />
          <AnimatedText
            text="Ready to start your project? Get in touch with our team today."
            className="text-gray-600"
          />
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Phone Number" type="tel" />
              <Textarea placeholder="Tell us about your project" rows={4} />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the terms and conditions
                </label>
              </div>
              <Button className="w-full bg-[#0b0f1a] hover:bg-orange-600 text-white">
                Get Free Estimate
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

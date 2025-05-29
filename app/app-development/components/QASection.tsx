"use client";

import React from "react";
import { CheckCircle, TestTube } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
            duration: 0.1,
            // delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function QASection() {
  const practices = [
    "Manual Testing",
    "Performance Testing",
    "Automated Testing",
    "API Testing",
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Top-Quality QA Practices to Ensure Optimal Performance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We understand the importance of delivering a bug-free product on
            time. Our experienced QA engineers execute test cases on some
            portion of a feature is testable to fix any reported bugs as soon as
            possible. Here are the QA practices we follow:
          </p>

          <div className="space-y-3">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                variants={itemVariants}
                transition={{
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: index * 0.1,
                }}
              >
                <CheckCircle className="w-5 h-5 text-[#497270]" />
                <AnimatedText text={practice} className="text-gray-700" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-[#0b0f1a] rounded-full mx-auto flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{
                    // duration: 0.8,
                    // delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <TestTube className="w-12 h-12 text-white" />
                </motion.div>
              </div>
              <AnimatedText
                text="Quality Assurance"
                className="text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    "Reduce software development costs by up to 40% while maintaining quality",
    "Access top-tier talent with expertise across multiple domains",
    "Accelerate time-to-market with our agile development methodology",
    "Seamless integration with your existing systems and processes",
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-2xl p-6 flex flex-col items-start shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-3 items-start">
                <span className="w-2 h-10 mt-1 rounded-full bg-[#4c7572] inline-block"></span>
                <span>{benefit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Button className="bg-[#4c7572] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-cyan-700">
            Learn More
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

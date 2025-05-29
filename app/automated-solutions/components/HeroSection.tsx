"use client";

import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
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
            duration: 0.5,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function HeroSection() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <AnimatedText
            text="Streamline Your Cloud Operations with Automated Solutions"
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          />
          <AnimatedText
            text="Automated solutions for seamless cloud migration and management on Google Cloud Platform."
            className="text-lg text-gray-600"
          />
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg">
            Learn More
          </Button>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
            <div className="text-center ">
              {/* <div className=" bg-[#0b0f1a] rounded-full mx-auto flex items-center justify-center"> */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img src="./icons/cloud.svg" alt="" width={"100%"} className="w-full h-full" />
                {/* <Cloud className="w-12 h-12 text-white" /> */}
              </motion.div>
              {/* </div> */}
              <AnimatedText text="Automated Cloud" className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

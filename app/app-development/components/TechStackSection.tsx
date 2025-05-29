"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Database, Server, Globe } from "lucide-react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TechStackSection() {
  return (
    <section className="px-4 py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text
            text="Our Tech Stack"
            className="text-3xl font-bold text-gray-900 mb-4"
          />
          <Text
            text="Modern technologies for building robust applications"
            className="text-lg text-gray-600"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 hover:bg-white/90 transition-all"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <Text
              text="Frontend"
              className="text-xl font-semibold text-gray-900 mb-2"
            />
            <Text
              text="React, Next.js, Vue.js, Angular, TypeScript"
              className="text-gray-600"
            />
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 hover:bg-white/90 transition-all"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-purple-600" />
            </div>
            <Text
              text="Backend"
              className="text-xl font-semibold text-gray-900 mb-2"
            />
            <Text
              text="Node.js, Python, Java, .NET, Go"
              className="text-gray-600"
            />
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 hover:bg-white/90 transition-all"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <Text
              text="Database"
              className="text-xl font-semibold text-gray-900 mb-2"
            />
            <Text
              text="PostgreSQL, MongoDB, MySQL, Redis"
              className="text-gray-600"
            />
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 hover:bg-white/90 transition-all"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <Text
              text="Cloud"
              className="text-xl font-semibold text-gray-900 mb-2"
            />
            <Text
              text="AWS, Azure, Google Cloud, Docker"
              className="text-gray-600"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-colors">
            View All Technologies
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

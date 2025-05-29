"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Server, Cloud } from "lucide-react";

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

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <GradientBall
        className="w-[400px] h-[400px] bg-gradient-to-r from-blue-300/40 to-purple-300/40 -top-32 right-1/4"
        delay={0.3}
      />
      <GradientBall
        className="w-[300px] h-[300px] bg-gradient-to-r from-teal-300/40 to-blue-300/40 bottom-0 left-1/3"
        delay={0.5}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Platform Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <img
                  src="/icons/download.svg"
                  alt="Platform Overview"
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600">Code</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Database className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-600">Data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Cloud className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600">Cloud</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
                  Transform Your Development Process
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our platform combines powerful tools and intuitive design to
                  streamline your development workflow. From code to deployment,
                  we've got you covered.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Server className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Seamless Integration
                    </h3>
                    <p className="text-gray-600">
                      Connect your existing tools and services with ease
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Data Management
                    </h3>
                    <p className="text-gray-600">
                      Powerful tools for handling complex data structures
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cloud className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Cloud Native
                    </h3>
                    <p className="text-gray-600">
                      Built for modern cloud infrastructure
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  className="text-lg py-3 text-white group"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Explore Platform
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

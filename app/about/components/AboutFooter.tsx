import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutFooter() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeInUpVariants}
      className="relative py-16 px-4 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#111827] to-[#1a1f2e] -z-10" />

      {/* Content container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Logo section */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/"
              className="block w-[9rem] hover:opacity-90 transition-opacity"
            >
              <img
                src="./logos/300ppi/Uilogicwhite.png"
                width="100%"
                alt="UILogic Logo"
              />
            </Link>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-lg font-medium text-gray-300 mb-8 block">
              Your Low-Code Transformation Partner
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-400"
          >
            © {new Date().getFullYear()} UILogic. All rights reserved.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    company: "mercury",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mercury_logo.svg",
    review:
      "UILogic delivered a secure, cloud-based CRM system while enhancing system performance through a technological upgrade.",
    details:
      '"Creativity, Design, Technical abilities; UILogic has it all. They help us not only with our product but they were each steps of the way as we were raising money."',
    author: "Richard Ariens, CEO, Mercury Financial Trade Credit",
    link: "#",
  },
  {
    company: "rakuten",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rakuten_Global_Brand_Logo.svg",
    review:
      "Reduced costs, improved performance, and increased system stability by migrating the company's legacy data pipeline to GCP.",
    details:
      '"UILogic has guided us through our Cloud Transformation efforts. They have mastered DataFlow, DataProc & BigQuery and helped us move toward GCP."',
    author: "Archie O'Connor, VP of Product Rakuten",
    link: "#",
  },
  // Add more reviews as needed
];

const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Rakuten",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rakuten_Global_Brand_Logo.svg",
  },
  {
    name: "Ericsson",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ericsson_logo.svg",
  },
  {
    name: "boostr",
    logo: "https://seeklogo.com/images/B/boostr-logo-6B1B7B2B2B-seeklogo.com.png",
  },
  {
    name: "peoplefinders",
    logo: "https://seeklogo.com/images/P/peoplefinders-logo-1B1B1B1B1B-seeklogo.com.png",
  },
  {
    name: "UpChoose",
    logo: "https://seeklogo.com/images/U/upchoose-logo-1B1B1B1B1B-seeklogo.com.png",
  },
  {
    name: "adXperience",
    logo: "https://seeklogo.com/images/A/adxperience-logo-1B1B1B1B1B-seeklogo.com.png",
  },
  {
    name: "Valassis",
    logo: "https://seeklogo.com/images/V/valassis-logo-1B1B1B1B1B-seeklogo.com.png",
  },
  {
    name: "mercury",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mercury_logo.svg",
  },
];

export default function CustomerReviewSection() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-gray-900 text-left">
          Clients reviews
        </h2>
        {/* Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18, delayChildren: 0.2 },
            },
          }}
          className="flex flex-col items-center mb-12"
        >
          {/* Review Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="relative bg-gray-50 rounded-2xl shadow-md border border-gray-100 p-8 min-w-[320px] max-w-xl w-full"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-[#4c7572]" />
            <div className="flex items-center gap-2 mb-2 mt-2">
              <Image
                src={review.logo}
                alt={review.company}
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xs font-semibold text-gray-500">
                {review.company.charAt(0).toUpperCase() +
                  review.company.slice(1)}
              </span>
              <a
                href={review.link}
                className="ml-auto text-[#4c7572] text-xs font-bold hover:underline flex items-center gap-1"
              >
                Read Full Case <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="text-lg font-bold text-gray-900 mb-2">
              {review.review}
            </div>
            <div className="text-sm text-gray-700 mb-4">{review.details}</div>
            <div className="text-xs font-bold text-gray-900">
              {review.author}
            </div>
          </motion.div>
          {/* Navigation below card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
            className="flex items-center justify-center gap-8 mt-6"
          >
            <button
              className="text-[#4c7572] text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center border-2 border-[#4c7572] hover:bg-[#4c7572] hover:text-white transition-colors"
              onClick={() =>
                setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))
              }
              aria-label="Previous review"
            >
              &larr;
            </button>
            <span className="font-bold text-lg">
              {index + 1}
              <span className="text-gray-500 text-base">/{reviews.length}</span>
            </span>
            <button
              className="text-[#4c7572] text-3xl font-bold rounded-full w-12 h-12 flex items-center justify-center border-2 border-[#4c7572] hover:bg-[#4c7572] hover:text-white transition-colors"
              onClick={() =>
                setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))
              }
              aria-label="Next review"
            >
              &rarr;
            </button>
          </motion.div>
        </motion.div>
        {/* Partner Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Left: Message */}
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl text-[#4c7572] font-bold">🏆</span>
              <span className="text-sm text-gray-700 font-semibold">
                Industry Leaders Partner with UILogic
              </span>
            </div>
            <div className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              You can be among the top companies that choose innovation with
              UILogic
            </div>
          </div>
          {/* Right: Logos */}
          <div className="grid grid-cols-3 gap-6 flex-1 w-full max-w-lg">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center bg-white rounded-xl shadow border border-gray-100 p-3 h-16"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={90}
                  height={32}
                  className="object-contain max-h-8"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

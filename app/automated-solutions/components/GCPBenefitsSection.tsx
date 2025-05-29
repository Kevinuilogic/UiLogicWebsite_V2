"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

export default function GCPBenefitsSection() {
  const benefits = [
    "Reduce IT Costs",
    "Improve Security and Compliance",
    "Increase Scalability and Flexibility",
    "Enhance Business Continuity",
    "Accelerate Innovation",
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Text
            text="Benefits of Migrating to GCP with Automated Solutions"
            className="text-3xl font-bold text-gray-900 mb-4"
          />
          <Text
            text="Discover how leveraging Google Cloud Platform with our automated tools can transform your business operations."
            className="text-gray-600"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-[#497270] mt-1 shrink-0" />
              <Text text={benefit} className="text-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

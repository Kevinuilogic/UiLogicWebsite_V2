"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of services including custom software development, web application development, mobile app development, cloud solutions, and IT consulting services.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the scope and complexity. We provide detailed project estimates during the initial consultation and maintain transparent communication throughout the development process.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process follows Agile methodologies, including requirements gathering, planning, development, testing, and deployment. We maintain regular communication and provide progress updates throughout the project.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive maintenance and support services to ensure your applications run smoothly and stay up-to-date with the latest technologies and security standards.",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "We follow strict quality assurance processes, including code reviews, automated testing, and manual testing. Our team adheres to industry best practices and coding standards to deliver high-quality solutions.",
    },
  ];

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Text
            text="Frequently Asked Questions"
            className="text-3xl font-bold text-gray-900 mb-4"
          />
          <Text
            text="Find answers to common questions about our services"
            className="text-lg text-gray-600"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <Text
                  text={faq.question}
                  className="text-lg font-semibold text-gray-900"
                />
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <Text text={faq.answer} className="text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

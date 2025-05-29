"use client";

import { Button } from "@/components/ui/button";
import { Code, Layers, Zap, Shield } from "lucide-react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

const PRIMARY = "#4c7572";
const DARK = "#0b0f1a";

export default function CustomDevelopmentSection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Text
            text="Custom Development"
            className="text-3xl font-bold text-[#0b0f1a] mb-4"
          />
          <Text
            text="Tailored solutions for your unique business needs"
            className="text-lg text-gray-600"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Custom Software"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Bespoke software solutions designed to meet your specific requirements"
              className="text-gray-600"
            />
          </div>

          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Web Applications"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Modern web applications built with the latest technologies"
              className="text-gray-600"
            />
          </div>

          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Mobile Apps"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Native and cross-platform mobile applications"
              className="text-gray-600"
            />
          </div>

          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Enterprise Solutions"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Scalable and secure enterprise-grade applications"
              className="text-gray-600"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#4c7572] hover:bg-[#4c7572] text-white px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

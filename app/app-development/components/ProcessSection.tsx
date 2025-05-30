"use client";

import { ClipboardList, Code, TestTube, Rocket } from "lucide-react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

export default function ProcessSection() {
  return (
    <section className="px-4 py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <Text
            text="Our Development Process"
            className="text-3xl font-bold text-[#4c7572] mb-4"
          />
          <Text
            text="A streamlined approach to building your perfect application"
            className="text-lg text-gray-600"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl hover:bg-[#4c7572]/5 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-[#4c7572]/10">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-xl flex items-center justify-center mb-4">
              <ClipboardList className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Planning"
              className="text-xl font-semibold text-[#4c7572] mb-2"
            />
            <Text
              text="Requirements gathering, architecture design, and project roadmap"
              className="text-gray-600"
            />
          </div>

          <div className="bg-white p-6 rounded-xl hover:bg-[#4c7572]/5 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-[#4c7572]/10">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-xl flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Development"
              className="text-xl font-semibold text-[#4c7572] mb-2"
            />
            <Text
              text="Agile development with regular updates and milestone reviews"
              className="text-gray-600"
            />
          </div>

          <div className="bg-white p-6 rounded-xl hover:bg-[#4c7572]/5 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-[#4c7572]/10">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-xl flex items-center justify-center mb-4">
              <TestTube className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Testing"
              className="text-xl font-semibold text-[#4c7572] mb-2"
            />
            <Text
              text="Comprehensive testing including unit, integration, and user acceptance"
              className="text-gray-600"
            />
          </div>

          <div className="bg-white p-6 rounded-xl hover:bg-[#4c7572]/5 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-[#4c7572]/10">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-xl flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Deployment"
              className="text-xl font-semibold text-[#4c7572] mb-2"
            />
            <Text
              text="Smooth deployment with monitoring and ongoing support"
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

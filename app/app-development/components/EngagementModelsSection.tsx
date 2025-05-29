"use client";

import { Button } from "@/components/ui/button";
import { Clock, Users, Briefcase } from "lucide-react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

export default function EngagementModelsSection() {
  return (
    <section className="px-4 py-16 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Text
            text="Engagement Models"
            className="text-3xl font-bold text-white mb-4"
          />
          <Text
            text="Choose the model that best fits your project needs"
            className="text-lg text-gray-300"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#fff]" />
            </div>
            <Text
              text="Time & Material"
              className="text-xl font-semibold text-white mb-2"
            />
            <Text
              text="Pay for the actual time spent on your project. Ideal for projects with evolving requirements."
              className="text-gray-300 mb-4"
            />
            <Button className="w-full bg-[#4c7572] hover:bg-[#4c7572] text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#fff]" />
            </div>
            <Text
              text="Dedicated Team"
              className="text-xl font-semibold text-white mb-2"
            />
            <Text
              text="Get a dedicated team of developers working exclusively on your project."
              className="text-gray-300 mb-4"
            />
            <Button className="w-full bg-[#4c7572] hover:bg-[#4c7572] text-white">
              Learn More
            </Button>
          </div>

          <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-[#fff]" />
            </div>
            <Text
              text="Fixed Price"
              className="text-xl font-semibold text-white mb-2"
            />
            <Text
              text="Set budget and timeline for projects with well-defined requirements."
              className="text-gray-300 mb-4"
            />
            <Button className="w-full bg-[#4c7572] hover:bg-[#4c7572] text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

const PRIMARY = "#4c7572";
const DARK = "#0b0f1a";

export default function HeroSection() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-[#0b0f1a] to-[#1a1f2e]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Text
            text="UI Logic: Your Trusted Partner for Top-Notch IT Solutions"
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
          />
          <Text
            text="We ensure that your IT requirements are handled efficiently while you can focus on your core business."
            className="text-lg text-gray-300"
          />
          <Button className="bg-[#4c7572] hover:bg-[#4c7572de] text-white px-8 py-6 text-lg">
            Let's Start a Project
          </Button>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-[#4c7572]/10 to-[#ffd700]/10 rounded-2xl flex items-center justify-center">
            <div className="text-center ">
              {/* <div className="w-24 h-24 bg-[#4c7572] rounded-full mx-auto flex items-center justify-center">
                <Code className="w-12 h-12 text-white" />
              </div> */}
              <img src="/icons/solutions.svg" width={'100%'} alt="" />
              {/* <Text
                text="Professional IT Solutions"
                className="text-gray-300"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

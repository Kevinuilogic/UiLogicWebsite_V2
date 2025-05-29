"use client";

import { Button } from "@/components/ui/button";
import {
  Building2,
  ShoppingCart,
  Car,
  GraduationCap,
  Heart,
  Banknote,
} from "lucide-react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

export default function IndustriesSection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Text
            text="Industries We Serve"
            className="text-3xl font-bold text-[#0b0f1a] mb-4"
          />
          <Text
            text="Tailored solutions for various industry sectors"
            className="text-lg text-gray-600"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Manufacturing"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Streamline operations and enhance productivity with our manufacturing solutions"
              className="text-gray-600"
            />
          </div>

          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <ShoppingCart className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Retail"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Transform your retail business with modern e-commerce solutions"
              className="text-gray-600"
            />
          </div>

          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Automotive"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Drive innovation in the automotive industry with our technology solutions"
              className="text-gray-600"
            />
          </div>

          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Education"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Enhance learning experiences with our educational technology solutions"
              className="text-gray-600"
            />
          </div>

          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Healthcare"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Improve patient care with our healthcare technology solutions"
              className="text-gray-600"
            />
          </div>

          <div className="bg-[#0b0f1a]/5 p-6 rounded-lg hover:bg-[#0b0f1a]/10 transition-colors">
            <div className="w-12 h-12 bg-[#4c7572]/10 rounded-lg flex items-center justify-center mb-4">
              <Banknote className="w-6 h-6 text-[#4c7572]" />
            </div>
            <Text
              text="Finance"
              className="text-xl font-semibold text-[#0b0f1a] mb-2"
            />
            <Text
              text="Secure and efficient financial technology solutions for your business"
              className="text-gray-600"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#4c7572] hover:bg-[#4c7572] text-white px-8 py-3 text-lg">
            Explore Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}

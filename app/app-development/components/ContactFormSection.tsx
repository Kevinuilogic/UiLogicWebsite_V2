"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className = "" }: TextProps) => {
  return <div className={className}>{text}</div>;
};

export default function ContactFormSection() {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Text
            text="Get in Touch"
            className="text-3xl font-bold text-gray-900 mb-4"
          />
          <Text
            text="Let's discuss your project requirements"
            className="text-lg text-gray-600"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <Text
                  text="Email"
                  className="text-lg font-semibold text-gray-900 mb-1"
                />
                <Text text="contact@uilogic.com" className="text-gray-600" />
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <Text
                  text="Phone"
                  className="text-lg font-semibold text-gray-900 mb-1"
                />
                <Text text="+1 (555) 123-4567" className="text-gray-600" />
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <Text
                  text="Address"
                  className="text-lg font-semibold text-gray-900 mb-1"
                />
                <Text
                  text="123 Tech Street, Silicon Valley, CA 94043"
                  className="text-gray-600"
                />
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <Input type="text" placeholder="John" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <Input type="text" placeholder="Doe" className="w-full" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                placeholder="Tell us about your project..."
                className="w-full h-32"
              />
            </div>

            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

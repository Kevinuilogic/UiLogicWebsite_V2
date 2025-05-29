"use client";

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Menu,
  ArrowRight,
  Send,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import AboutFooter from "../about/components/AboutFooter";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const PRIMARY = "#4c7572";
const DARK = "#0b0f1a";

const GradientBall = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay }}
    className={`absolute rounded-full blur-3xl ${className}`}
  />
);

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <GradientBall
        className="w-[500px] h-[500px] bg-gradient-to-r from-blue-300/40 to-purple-300/40 -top-64 -left-64"
        delay={0.2}
      />
      <GradientBall
        className="w-[400px] h-[400px] bg-gradient-to-r from-teal-300/40 to-blue-300/40 top-1/2 -right-64"
        delay={0.4}
      />
      <GradientBall
        className="w-[300px] h-[300px] bg-gradient-to-r from-purple-300/40 to-pink-300/40 bottom-0 left-1/4"
        delay={0.6}
      />
      <GradientBall
        className="w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/40 to-blue-300/40 -top-32 right-1/4"
        delay={0.3}
      />
      <GradientBall
        className="w-[450px] h-[450px] bg-gradient-to-r from-indigo-300/40 to-purple-300/40 top-1/3 left-1/3"
        delay={0.5}
      />
      <GradientBall
        className="w-[350px] h-[350px] bg-gradient-to-r from-blue-300/40 to-cyan-300/40 bottom-1/4 right-1/3"
        delay={0.7}
      />
      <GradientBall
        className="w-[250px] h-[250px] bg-gradient-to-r from-purple-300/40 to-pink-300/40 top-3/4 left-1/4"
        delay={0.8}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-blue-100 text-[#0b0f1a] border-blue-200"
            >
              💬 Let's Connect
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-[#0b0f1a] to-[#4c7572] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Ready to transform your business with cutting-edge automation?
              We're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-0 bg-gray-50/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="mb-0">
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-blue-100 text-[#0b0f1a] border-blue-200"
                  >
                    📝 Send Message
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-gray-600">
                    Have a project in mind? We'd love to hear about it. Send us
                    a message and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        type="email"
                        required
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none rounded-xl bg-white/50 backdrop-blur-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#0b0f1a] to-[#4c7572] hover:from-[#0f1627] hover:to-[#3cd2c8] text-white h-12 rounded-xl font-semibold"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f3f6f6]/50 relative shadow-md border-t-gray-300 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="secondary"
                className="mb-6 border"
                style={{
                  backgroundColor: "#e6f0ee",
                  color: "#4c7572",
                  borderColor: "#4c7572",
                }}
              >
                🚀 Ready to Get Started?
              </Badge>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#0b0f1a" }}
              >
                Transform Your Business with Smart Automation
              </h2>
              <p
                className="text-xl mb-8 max-w-2xl mx-auto"
                style={{ color: "#4c7572" }}
              >
                Join hundreds of satisfied clients who have revolutionized their
                operations with our cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  className="bg-white px-8 py-3 rounded-full font-semibold border"
                  style={{
                    color: "#0b0f1a",
                    borderColor: "#4c7572",
                    borderWidth: 2,
                  }}
                >
                  Start Your Project
                  <ArrowRight
                    className="ml-2 h-4 w-4"
                    style={{ color: "#4c7572" }}
                  />
                </Button>
                <div
                  className="flex items-center space-x-3"
                  style={{ color: "#0b0f1a" }}
                >
                  <div className="w-12 h-12 bg-[#e6f0ee] rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" style={{ color: "#4c7572" }} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Email</p>
                    <p style={{ color: "#4c7572" }}>sales@uilogic.io</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AboutFooter />
    </div>
  );
}

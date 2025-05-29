"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calculator,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Percent,
  FileText,
  Database,
  BarChart3,
  MessageSquare,
  HelpCircle,
  RotateCcw,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import AboutFooter from "../about/components/AboutFooter";

const PRIMARY = "#4c7572";
const DARK = "#0b0f1a";

const Index = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [automationPercentage, setAutomationPercentage] = useState("35");
  const [calculationResult, setCalculationResult] = useState<{
    monthlySavings: number;
    reduction: number;
    hoursAutomated: number;
    currentMonthlyCost: number;
  } | null>(null);

  const calculateCost = () => {
    const hours = parseFloat(hoursPerWeek) || 0;
    const people = parseFloat(numberOfPeople) || 0;
    const rate = parseFloat(hourlyRate) || 0;
    const automation = parseFloat(automationPercentage) || 0;

    // Calculate current monthly cost
    const weeklyCurrentCost = hours * people * rate;
    const monthlyCurrent = weeklyCurrentCost * 4.33; // 4.33 weeks per month average

    // Calculate automation savings
    const automatedHours = hours * (automation / 100);
    const monthlySavings = monthlyCurrent * (automation / 100);

    setCalculationResult({
      monthlySavings,
      reduction: automation,
      hoursAutomated: automatedHours,
      currentMonthlyCost: monthlyCurrent,
    });
  };

  const resetCalculator = () => {
    setHoursPerWeek("");
    setNumberOfPeople("");
    setHourlyRate("");
    setAutomationPercentage("35");
    setCalculationResult(null);
  };

  const automationScenarios = [
    {
      icon: FileText,
      title: "Report Automation",
      percentage: "80%",
      description: "Automate data aggregation, analysis, and report generation",
    },
    {
      icon: Database,
      title: "Data Entry Automation",
      percentage: "95%",
      description: "Use for CRM systems, data collection, and processing tasks",
    },
    {
      icon: BarChart3,
      title: "Analysis & Insights",
      percentage: "75%",
      description:
        "Use for Service Desk, support automation for faster resolutions",
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      percentage: "90%",
      description: "Use for workflow reviews, document management",
    },
  ];

  const commonQuestions = [
    {
      question: "How accurate are these automation estimates?",
      answer:
        "Our estimates are based on industry benchmarks and real-world implementations. Actual results may vary depending on your specific processes, but we typically see 70-95% accuracy in our projections.",
    },
    {
      question: "What's the typical implementation timeline?",
      answer:
        "Most automation projects can be implemented within 4-12 weeks, depending on complexity. Simple workflows can be automated in as little as 2-3 weeks, while complex enterprise solutions may take 3-6 months.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes! We provide comprehensive training for your team, including documentation, video tutorials, and hands-on sessions. We also offer ongoing support to ensure successful adoption.",
    },
    {
      question: "Can automation integrate with our existing systems?",
      answer:
        "Absolutely. Our automation solutions are designed to integrate seamlessly with popular CRM, ERP, and business management systems including Salesforce, SAP, Microsoft 365, and many others.",
    },
    {
      question: "What if our processes change after implementation?",
      answer:
        "Our automation solutions are built to be flexible and scalable. We provide maintenance and updates to adapt to your changing business needs, ensuring long-term value from your investment.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Crazy animated background elements with custom colors */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
          style={{ backgroundColor: PRIMARY }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 opacity-15"
          style={{ backgroundColor: DARK }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl animate-pulse delay-500 opacity-10"
          style={{ backgroundColor: PRIMARY }}
        ></div>

        <div
          className="absolute top-20 right-20 w-32 h-32 rotate-45 animate-spin opacity-5"
          style={{ backgroundColor: DARK }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full animate-bounce opacity-10"
          style={{ backgroundColor: PRIMARY }}
        ></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r bg-clip-text text-transparent animate-fade-in"
            style={{
              backgroundImage: `linear-gradient(135deg, ${PRIMARY}, ${DARK}, ${PRIMARY})`,
            }}
          >
            ROI Calculator
          </h1>
          {/* <div className="flex items-center justify-center space-x-2 mb-8" style={{ color: `${DARK}80` }}>
            <span>Home</span>
            <span>→</span>
            <span style={{ color: PRIMARY }} className="font-semibold">ROI Calculator</span>
          </div> */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed mb-8"
            style={{ color: `${DARK}80` }}
          >
            Calculate Your Automation ROI
          </p>
          <p
            className="text-lg max-w-4xl mx-auto leading-relaxed"
            style={{ color: `${DARK}70` }}
          >
            Enter your current process details to see how much you could save
            through automation. Our calculator uses industry benchmarks and
            real-world data to provide accurate estimates.
          </p>
        </div>
      </motion.div>

      {/* Common Automation Scenarios */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 mb-16"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4" style={{ color: DARK }}>
            Common Automation Scenarios
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationScenarios.map((scenario, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="backdrop-blur-xl border-2 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80"
                style={{ borderColor: `${PRIMARY}30` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${PRIMARY}20` }}
                  >
                    <scenario.icon
                      className="w-8 h-8"
                      style={{ color: PRIMARY }}
                    />
                  </div>
                  <Badge
                    className="mb-3 font-bold"
                    style={{
                      backgroundColor: `${PRIMARY}20`,
                      color: PRIMARY,
                    }}
                  >
                    {scenario.percentage} automation potential
                  </Badge>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: DARK }}
                  >
                    {scenario.title}
                  </h3>
                  <p className="text-sm" style={{ color: `${DARK}70` }}>
                    {scenario.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Calculator Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 pb-20"
      >
        <Card
          className="backdrop-blur-xl border-2 shadow-2xl hover:shadow-xl transition-all duration-500 bg-white/80"
          style={{ borderColor: `${PRIMARY}40` }}
        >
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle
                className="text-3xl font-black flex items-center justify-center gap-3"
                style={{ color: DARK }}
              >
                <Zap className="w-8 h-8" style={{ color: PRIMARY }} />
                ROI CALCULATOR
              </CardTitle>
            </motion.div>
            <p className="text-sm" style={{ color: `${DARK}70` }}>
              Enter your current process details to see how much you could save
              through automation. Our calculator uses industry benchmarks and
              real-world data to provide accurate estimates.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="space-y-3">
                <label
                  className="font-bold flex items-center gap-2"
                  style={{ color: DARK }}
                >
                  <Clock className="w-4 h-4" style={{ color: PRIMARY }} />
                  Hours spent per week per person
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(e.target.value)}
                    className="border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 pr-16"
                    style={{
                      borderColor: `${PRIMARY}40`,
                      color: DARK,
                    }}
                    placeholder="5"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    hours
                  </span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <label
                  className="font-bold flex items-center gap-2"
                  style={{ color: DARK }}
                >
                  <Users className="w-4 h-4" style={{ color: PRIMARY }} />
                  Number of people performing the task
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    className="border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 pr-16"
                    style={{
                      borderColor: `${PRIMARY}40`,
                      color: DARK,
                    }}
                    placeholder="4"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    people
                  </span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <label
                  className="font-bold flex items-center gap-2"
                  style={{ color: DARK }}
                >
                  <TrendingUp className="w-4 h-4" style={{ color: PRIMARY }} />
                  Average hourly rate ($/hour)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    $
                  </span>
                  <Input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 pl-8 pr-16"
                    style={{
                      borderColor: `${PRIMARY}40`,
                      color: DARK,
                    }}
                    placeholder="1"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    /hour
                  </span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <label
                  className="font-bold flex items-center gap-2"
                  style={{ color: DARK }}
                >
                  <Percent className="w-4 h-4" style={{ color: PRIMARY }} />
                  Estimated automation potential (%)
                </label>
                <div className="relative">
                  <Input
                    type="range"
                    min="0"
                    max="100"
                    value={automationPercentage}
                    onChange={(e) => setAutomationPercentage(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, ${PRIMARY} 0%, ${PRIMARY} ${automationPercentage}%, #e5e7eb ${automationPercentage}%, #e5e7eb 100%)`,
                    }}
                  />
                  <div
                    className="flex justify-between text-sm mt-2"
                    style={{ color: `${DARK}70` }}
                  >
                    <span>Basic (30%)</span>
                    <span className="font-bold" style={{ color: PRIMARY }}>
                      {automationPercentage}% Selected
                    </span>
                    <span>Advanced (90%)</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="gap-4 grid grid-cols-3"
              >
                <Button
                  onClick={calculateCost}
                  className="w-full text-white font-black py-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 col-span-2"
                  style={{
                    background: `linear-gradient(135deg, ${PRIMARY}, ${DARK})`,
                  }}
                >
                  Calculate Savings 📊
                </Button>
                <Button
                  onClick={resetCalculator}
                  className="w-full text-white font-black py-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${"#000"}, ${DARK})`,
                  }}
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </Button>
              </motion.div>

              {calculationResult !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 p-6 rounded-lg border-2"
                  style={{
                    backgroundColor: `${PRIMARY}10`,
                    borderColor: PRIMARY,
                  }}
                >
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div
                        className="text-3xl font-black"
                        style={{ color: "#22c55e" }}
                      >
                        ${calculationResult.monthlySavings.toFixed(2)}
                      </div>
                      <p className="text-sm" style={{ color: `${DARK}70` }}>
                        {calculationResult.reduction.toFixed(1)}% reduction
                      </p>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-3xl font-black"
                        style={{ color: `${PRIMARY}` }}
                      >
                        {calculationResult.hoursAutomated.toFixed(1)}
                      </div>
                      <p className="text-sm" style={{ color: `${DARK}70` }}>
                        of {hoursPerWeek || 0} hours
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div
                      className="text-5xl font-black mb-2"
                      style={{ color: `${DARK}` }}
                    >
                      ${calculationResult.monthlySavings.toFixed(2)}
                    </div>
                    <p
                      className="text-lg font-semibold mb-4"
                      style={{ color: PRIMARY }}
                    >
                      Monthly savings through automation
                    </p>
                    <p className="text-sm" style={{ color: `${DARK}70` }}>
                      Contact our experts for a personalized assessment and
                      implementation roadmap →
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Common Questions Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-16"
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8" style={{ color: PRIMARY }} />
            <h2 className="text-4xl font-black" style={{ color: DARK }}>
              Common Questions
            </h2>
          </div>
          <p className="text-lg" style={{ color: `${DARK}70` }}>
            Get answers to frequently asked questions about business automation
          </p>
        </div>

        <Card
          className="backdrop-blur-xl border-2 shadow-2xl bg-white/80"
          style={{ borderColor: `${PRIMARY}40` }}
        >
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {commonQuestions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-6"
                  style={{ borderColor: `${PRIMARY}20` }}
                >
                  <AccordionTrigger
                    className="text-left font-bold hover:no-underline py-6"
                    style={{ color: DARK }}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="pb-6 text-base leading-relaxed"
                    style={{ color: `${DARK}80` }}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        <Card
          className="backdrop-blur-xl border-2 shadow-2xl bg-white/90"
          style={{ borderColor: PRIMARY }}
        >
          <CardContent className="p-12 text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: DARK }}>
              Need help with Business Automation?
            </h3>
            <h2
              className="text-4xl md:text-5xl font-black mb-8 leading-tight"
              style={{ color: DARK }}
            >
              We're Here to Drive Your Business Growth with Smart IT Solutions.
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                className="font-black px-8 py-3 shadow-lg hover:scale-105 transition-all duration-300 border-2"
                style={{
                  backgroundColor: "white",
                  color: DARK,
                  borderColor: DARK,
                }}
              >
                Contact Us →
              </Button>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${PRIMARY}20` }}
                >
                  <span style={{ color: PRIMARY }}>@</span>
                </div>
                <div>
                  <p className="text-sm" style={{ color: `${DARK}70` }}>
                    Email
                  </p>
                  <p className="font-black" style={{ color: DARK }}>
                   sales@uilogic.io
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <AboutFooter />
    </div>
  );
};

export default Index;

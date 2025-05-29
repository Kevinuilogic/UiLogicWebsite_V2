"use client";

import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Clock, Zap, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

// Custom hook for counting animation
const useCountAnimation = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration]);

  return { count, ref };
};

const StatCard = ({
  icon: Icon,
  value,
  label,
  suffix = "",
  duration = 2,
}: {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}) => {
  const { count, ref } = useCountAnimation(value, duration);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: PRIMARY + "22" }}
        >
          <Icon className="w-6 h-6" style={{ color: PRIMARY }} />
        </div>
        <h3 className="text-xl font-bold" style={{ color: DARK }}>
          {label}
        </h3>
      </div>
      <div className="text-4xl font-bold" style={{ color: PRIMARY }}>
        {count.toLocaleString()}
        {suffix}
      </div>
    </motion.div>
  );
};

export default function StatisticsSection() {
  const stats = [
    {
      icon: Users,
      value: 500,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      icon: Target,
      value: 1000,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: Award,
      value: 50,
      label: "Team Members",
      suffix: "+",
    },
    {
      icon: Clock,
      value: 8,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: Zap,
      value: 99,
      label: "Success Rate",
      suffix: "%",
    },
    {
      icon: Star,
      value: 4.9,
      label: "Client Rating",
      suffix: "/5",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="statistics">
      {/* Animated Background Elements */}
      <GradientBall
        className="w-[400px] h-[400px] bg-gradient-to-r from-blue-300/40 to-purple-300/40 -top-32 right-1/4"
        delay={0.3}
      />
      <GradientBall
        className="w-[300px] h-[300px] bg-gradient-to-r from-teal-300/40 to-blue-300/40 bottom-0 left-1/3"
        delay={0.5}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <Badge
            className="mb-4 text-sm font-medium px-4 py-1"
            style={{ backgroundColor: PRIMARY + "22", color: PRIMARY }}
          >
            Our Impact
          </Badge>
          <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
            Numbers That <span style={{ color: PRIMARY }}>Speak</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: PRIMARY }}
          >
            We take pride in our achievements and the impact we've made in the
            industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              duration={2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

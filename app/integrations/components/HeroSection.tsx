import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Database, Eye } from "lucide-react";
import { motion } from "framer-motion";

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

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#f3f6f6] to-[#f3f6f6] py-20 relative overflow-hidden">
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
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold" style={{ color: DARK }}>
              Drive growth and outperform your competition with{" "}
              <span style={{ color: PRIMARY }}>Data Analytics</span>
            </h1>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: PRIMARY }}
            >
              We're here to propel your business to new heights by unlocking
              invaluable insights and supercharging your decision-making
              process.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="text-white text-lg px-8 py-7"
                style={{ backgroundColor: PRIMARY }}
              >
                Request a Demo 🚀
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              // className="bg-gradient-to-r from-[#e6f0ee] to-[#e6f0ee] rounded-2xl p-8"
              initial={{ rotate: 3 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/icons/analytics.svg"
                alt="Hero Illustration"
                className="w-full h-auto rounded-xl"
              />
              {/* <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <BarChart3
                        className="h-8 w-8 mb-2"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Revenue Growth",
                    value: "+42%",
                  },
                  {
                    icon: (
                      <TrendingUp
                        className="h-8 w-8 mb-2"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Efficiency",
                    value: "+68%",
                  },
                  {
                    icon: (
                      <Database
                        className="h-8 w-8 mb-2"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Data Points",
                    value: "2.5M",
                  },
                  {
                    icon: (
                      <Eye
                        className="h-8 w-8 mb-2"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Insights",
                    value: "1000+",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg p-4 shadow-lg"
                  >
                    {item.icon}
                    <div className="text-sm" style={{ color: PRIMARY }}>
                      {item.label}
                    </div>
                    <div className="text-2xl font-bold" style={{ color: DARK }}>
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

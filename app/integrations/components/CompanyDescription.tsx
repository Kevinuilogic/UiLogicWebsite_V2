import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Database, Eye } from "lucide-react";

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

export default function CompanyDescription() {
  return (
    <section className="py-20 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl leading-relaxed mb-12" style={{ color: DARK }}>
            At DataFlow, we possess a relentless passion for turning complex
            data into clear, actionable insights that fuel your business growth.
          </p>
          <p className="text-xl leading-relaxed" style={{ color: PRIMARY }}>
            With our transformative analytics solutions, you'll gain the
            competitive edge needed to outshine your rivals and drive remarkable
            results.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            {
              icon: <Database className="h-8 w-8" style={{ color: PRIMARY }} />,
              label: "Big Data Processing",
            },
            {
              icon: (
                <BarChart3 className="h-8 w-8" style={{ color: PRIMARY }} />
              ),
              label: "Advanced Analytics",
            },
            {
              icon: <Eye className="h-8 w-8" style={{ color: PRIMARY }} />,
              label: "Data Visualization",
            },
            {
              icon: (
                <TrendingUp className="h-8 w-8" style={{ color: PRIMARY }} />
              ),
              label: "Predictive Modeling",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
              >
                {item.icon}
              </motion.div>
              <div className="text-sm" style={{ color: PRIMARY }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

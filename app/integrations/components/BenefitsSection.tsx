import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, DollarSign } from "lucide-react";

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

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Lightbulb className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Actionable Insights",
      description:
        "Unlock the power of data analytics to gain valuable insights into consumer behavior, market trends, and operational efficiency. Make real decisions that drive growth and enhance customer satisfaction.",
    },
    {
      icon: <Target className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Competitive Advantage",
      description:
        "Staying one step ahead of your competitors by utilizing data-driven strategies. Identify market gaps, optimize business processes, and understand your position in today's dynamic and complex.",
    },
    {
      icon: <DollarSign className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Cost Optimization",
      description:
        "Discover inefficiencies and streamline your operations by leveraging data analytics. Identify areas for cost reduction, optimize resource allocation, and improve overall profitability.",
    },
  ];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
            Uncover the Benefits of Data Analytics
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: PRIMARY }}>
            Data analytics is no longer a luxury; it's a necessity for
            businesses striving to thrive in the digital age. By partnering with
            DataFlow, you'll experience a multitude of benefits, including:
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
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-full w-16 h-16 flex items-center justify-center mb-6"
                    style={{ backgroundColor: PRIMARY + "22" }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: DARK }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: PRIMARY }}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

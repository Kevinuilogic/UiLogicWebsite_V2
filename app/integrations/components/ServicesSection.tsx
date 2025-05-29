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

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-gray-50 py-20 relative overflow-hidden"
    >
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Database className="h-12 w-12 mr-4" style={{ color: PRIMARY }} />
              <div>
                <div className="text-sm font-medium" style={{ color: PRIMARY }}>
                  DATA PLATFORMS
                </div>
                <div className="text-sm" style={{ color: PRIMARY }}>
                  Powered by cutting-edge technology
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
              Unleash the Full Potential of Your Data with BigQuery or Snowflake
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: PRIMARY }}>
              Experience the power of BigQuery or Snowflake, two
              industry-leading data warehousing platforms. BigQuery leads the
              way from your cloud data lake.
            </p>
            <p className="leading-relaxed" style={{ color: PRIMARY }}>
              Our skilled team of data scientists, data engineers, and data
              analysts specializes in extracting data sources, building data
              pipelines, and integrating our self-healing powerful data
              pipelines for both predictive modeling and insight generation.
              Take advantage of machine learning models, data discovery,
              word-for-word, and data-sharing growth with ease.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="bg-gradient-to-br from-[#e6f0ee] to-[#e6f0ee] rounded-2xl p-8 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <Database
                        className="h-6 w-6 mb-2"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "BigQuery",
                  },
                  {
                    icon: (
                      <Database
                        className="h-6 w-6 mb-2"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Snowflake",
                  },
                  {
                    icon: (
                      <BarChart3
                        className="h-6 w-6 mb-2"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Analytics",
                  },
                  {
                    icon: (
                      <TrendingUp
                        className="h-6 w-6 mb-2"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "ML Models",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 rounded-lg p-4 backdrop-blur-sm"
                  >
                    {item.icon}
                    <div className="text-sm opacity-90" style={{ color: DARK }}>
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
              Visualize Data with Looker
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: PRIMARY }}>
              Data is only valuable if it can be easily understood and acted
              upon. That's where our expertise in combining data warehouses such
              as BigQuery or Snowflake with Looker comes into play.
            </p>
            <p className="leading-relaxed" style={{ color: PRIMARY }}>
              With this powerful duo, you'll create captivating visualizations,
              interactive dashboards, and comprehensive reports that help your
              team make informed decisions. Our team ensures that every
              visualization is tailored to your specific needs, making complex
              data accessible and enabling you to uncover hidden opportunities
              effortlessly.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <motion.div
              className="bg-gradient-to-br from-[#e6f0ee] to-[#e6f0ee] rounded-2xl p-8 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    icon: (
                      <BarChart3
                        className="h-5 w-5 mb-1"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Charts",
                  },
                  {
                    icon: (
                      <Eye
                        className="h-5 w-5 mb-1"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Dashboards",
                  },
                  {
                    icon: (
                      <TrendingUp
                        className="h-5 w-5 mb-1"
                        style={{ color: PRIMARY }}
                      />
                    ),
                    label: "Reports",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 rounded-lg p-3 backdrop-blur-sm"
                  >
                    {item.icon}
                    <div className="text-xs opacity-90" style={{ color: DARK }}>
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div> */}

              <motion.div className="max-h-[300px] overflow-hidden">
                <img
                  src="/icons/3.svg"
                  width={'100%'}
                  alt="Looker Dashboard"
                  className=" rounded-lg "
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 text-center"
              >
                <div className="text-3xl font-bold" style={{ color: DARK }}>
                  Looker
                </div>
                <div className="text-sm opacity-90" style={{ color: PRIMARY }}>
                  Data Visualization Platform
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

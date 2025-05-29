import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Shield, Zap, Cpu } from "lucide-react";

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

export default function TechnologySection() {
  const technologies = [
    {
      icon: <Code2 className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Modern Development",
      description:
        "We leverage cutting-edge programming languages and frameworks to build scalable and maintainable applications.",
    },
    {
      icon: <Database className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Data Solutions",
      description:
        "Our data engineering expertise enables us to build robust data pipelines and analytics platforms.",
    },
    {
      icon: <Cloud className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Cloud Infrastructure",
      description:
        "We design and implement cloud-native solutions that are secure, scalable, and cost-effective.",
    },
    {
      icon: <Shield className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Security First",
      description:
        "Security is built into every layer of our solutions, ensuring your data and applications are protected.",
    },
    {
      icon: <Zap className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Performance",
      description:
        "We optimize for speed and efficiency, delivering solutions that perform under any load.",
    },
    {
      icon: <Cpu className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "AI & Machine Learning",
      description:
        "We integrate AI and ML capabilities to create intelligent, automated solutions.",
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
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <Badge
            className="mb-4 text-sm font-medium px-4 py-1"
            style={{ backgroundColor: PRIMARY + "22", color: PRIMARY }}
          >
            Our Technology Stack
          </Badge>
          <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
            Building with <span style={{ color: PRIMARY }}>Cutting-Edge</span>{" "}
            Technologies
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: PRIMARY }}
          >
            We combine the latest technologies with industry best practices to
            deliver exceptional solutions that drive business growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="rounded-full w-16 h-16 flex items-center justify-center mb-6"
                style={{ backgroundColor: PRIMARY + "22" }}
              >
                {tech.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4" style={{ color: DARK }}>
                {tech.title}
              </h3>
              <p className="leading-relaxed" style={{ color: PRIMARY }}>
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

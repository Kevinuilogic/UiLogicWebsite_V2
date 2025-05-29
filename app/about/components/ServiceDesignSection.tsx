import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Layout, Palette, Code2, Zap, Users, Target } from "lucide-react";

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

export default function ServiceDesignSection() {
  const services = [
    {
      icon: <Layout className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces that enhance user experience and drive engagement.",
    },
    {
      icon: <Palette className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Visual Design",
      description:
        "Crafting beautiful and consistent visual elements that reflect your brand identity.",
    },
    {
      icon: <Code2 className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Development",
      description:
        "Building robust and scalable applications using modern technologies and best practices.",
    },
    {
      icon: <Zap className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Performance",
      description:
        "Optimizing applications for speed and efficiency to deliver the best user experience.",
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "User Research",
      description:
        "Understanding user needs and behaviors to create solutions that truly resonate.",
    },
    {
      icon: <Target className="h-8 w-8" style={{ color: PRIMARY }} />,
      title: "Strategy",
      description:
        "Developing comprehensive digital strategies that align with your business goals.",
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
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
            Comprehensive{" "}
            <span style={{ color: PRIMARY }}>Design & Development</span>{" "}
            Services
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: PRIMARY }}
          >
            We offer end-to-end services that combine creative design with
            technical excellence to deliver exceptional digital experiences.
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
          {services.map((service, index) => (
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
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4" style={{ color: DARK }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ color: PRIMARY }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

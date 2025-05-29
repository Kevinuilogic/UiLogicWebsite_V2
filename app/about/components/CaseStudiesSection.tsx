import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "E-commerce Platform",
      description:
        "Built a scalable e-commerce platform that increased sales by 200% and improved customer satisfaction.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Development",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Implemented AI-driven analytics solution that reduced operational costs by 40% and improved decision-making.",
      image: "/placeholder.svg?height=300&width=400",
      category: "AI & ML",
    },
    {
      title: "Mobile App",
      description:
        "Developed a mobile app that increased user engagement by 150% and received 4.8/5 rating on app stores.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile Development",
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
            Case Studies
          </Badge>
          <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
            Success <span style={{ color: PRIMARY }}>Stories</span> That Inspire
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: PRIMARY }}
          >
            Discover how we've helped businesses transform their operations and
            achieve remarkable results through innovative solutions.
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
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-300/40 to-purple-300/40"
                  style={{ backgroundImage: `url(${study.image})` }}
                ></div>
                <div className="absolute top-4 left-4">
                  <Badge
                    className="text-xs font-medium px-3 py-1"
                    style={{ backgroundColor: PRIMARY + "22", color: PRIMARY }}
                  >
                    {study.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: DARK }}>
                  {study.title}
                </h3>
                <p className="mb-4" style={{ color: PRIMARY }}>
                  {study.description}
                </p>
                <Button
                  variant="ghost"
                  className="group"
                  style={{ color: PRIMARY }}
                >
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

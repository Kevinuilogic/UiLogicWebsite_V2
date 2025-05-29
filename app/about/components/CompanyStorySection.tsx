import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Clock, Zap, Star } from "lucide-react";

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

export default function CompanyStorySection() {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      {/* Animated Background Elements */}
      <GradientBall
        className="w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 -top-32 right-1/4"
        delay={0.3}
      />
      <GradientBall
        className="w-[500px] h-[500px] bg-gradient-to-r from-teal-400/20 to-blue-400/20 bottom-0 left-1/3"
        delay={0.5}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <Badge
            className="mb-4 text-sm font-medium px-4 py-1.5"
            style={{ backgroundColor: PRIMARY + "22", color: PRIMARY }}
          >
            Our Journey
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: DARK }}
          >
            The Story Behind Our <span style={{ color: PRIMARY }}>Success</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: PRIMARY }}>
            From humble beginnings to becoming a global leader in digital
            innovation, our journey has been marked by continuous growth and
            unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Timeline and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            {[
              {
                year: "2015",
                title: "The Beginning",
                description:
                  "Founded with a vision to revolutionize digital solutions",
                icon: <Star className="w-6 h-6" style={{ color: PRIMARY }} />,
              },
              {
                year: "2017",
                title: "Global Expansion",
                description: "Expanded operations to serve clients worldwide",
                icon: <Target className="w-6 h-6" style={{ color: PRIMARY }} />,
              },
              {
                year: "2019",
                title: "Innovation Hub",
                description: "Established our research and development center",
                icon: <Zap className="w-6 h-6" style={{ color: PRIMARY }} />,
              },
              {
                year: "2023",
                title: "Future Forward",
                description:
                  "Leading the way in AI and machine learning solutions",
                icon: <Clock className="w-6 h-6" style={{ color: PRIMARY }} />,
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="relative pl-8 border-l-2"
                style={{ borderColor: PRIMARY + "40" }}
              >
                <div
                  className="absolute -left-[9px] top-0 w-4 h-4 rounded-full"
                  style={{ backgroundColor: PRIMARY }}
                />
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: PRIMARY + "22" }}
                    >
                      {milestone.icon}
                    </div>
                    <div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: PRIMARY }}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold" style={{ color: DARK }}>
                        {milestone.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg" style={{ color: PRIMARY }}>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Mission & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            {/* Mission Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: PRIMARY + "22" }}
                >
                  <Target className="w-8 h-8" style={{ color: PRIMARY }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: DARK }}>
                  Our Mission
                </h3>
              </div>
              <p className="text-xl leading-relaxed" style={{ color: PRIMARY }}>
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and success in the digital age.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Innovation",
                  description:
                    "Constantly pushing boundaries and exploring new possibilities",
                  icon: <Zap className="w-6 h-6" style={{ color: PRIMARY }} />,
                },
                {
                  title: "Excellence",
                  description:
                    "Delivering the highest quality in everything we do",
                  icon: <Star className="w-6 h-6" style={{ color: PRIMARY }} />,
                },
                {
                  title: "Integrity",
                  description:
                    "Building trust through honest and ethical practices",
                  icon: (
                    <Users className="w-6 h-6" style={{ color: PRIMARY }} />
                  ),
                },
                {
                  title: "Collaboration",
                  description:
                    "Working together to achieve extraordinary results",
                  icon: (
                    <Target className="w-6 h-6" style={{ color: PRIMARY }} />
                  ),
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: PRIMARY + "22" }}
                    >
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: DARK }}>
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-lg" style={{ color: PRIMARY }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

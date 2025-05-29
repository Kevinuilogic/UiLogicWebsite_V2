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

export default function PartnershipSection() {
  const partners = [
    {
      name: "Google Cloud",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Strategic cloud infrastructure partner",
    },
    {
      name: "Microsoft Azure",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Enterprise solutions provider",
    },
    {
      name: "AWS",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Cloud services and infrastructure",
    },
    {
      name: "Snowflake",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Data warehousing solutions",
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
            Partnerships
          </Badge>
          <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
            Trusted by <span style={{ color: PRIMARY }}>Industry Leaders</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: PRIMARY }}
          >
            We collaborate with leading technology providers to deliver
            cutting-edge solutions that drive business growth and innovation.
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-32 h-16 mb-4 relative">
                <div
                  className="w-full h-full bg-gradient-to-br from-blue-300/40 to-purple-300/40 rounded-lg"
                  style={{ backgroundImage: `url(${partner.logo})` }}
                ></div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: DARK }}>
                {partner.name}
              </h3>
              <p className="text-sm" style={{ color: PRIMARY }}>
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="group"
            style={{ borderColor: PRIMARY, color: PRIMARY }}
          >
            Become a Partner
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

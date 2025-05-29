import { motion } from "framer-motion";

export default function IndustriesSection() {
  const industries = [
    {
      icon: "🏥",
      title: "Healthcare",
      desc: "Advanced healthcare solutions that deliver accurate outcomes and enhance the patient experience.",
    },
    {
      icon: "💳",
      title: "Fintech",
      desc: "Innovative solutions for insurance, trading, and financial management.",
    },
    {
      icon: "📈",
      title: "Adtech",
      desc: "Development services for targeting software, supply- and demand-side platforms, real-time bidding platforms, and more.",
    },
    {
      icon: "🎓",
      title: "Edtech",
      desc: "Building learning management systems, corporate training platforms, and online course software for the education sector.",
    },
    {
      icon: "🛒",
      title: "E-commerce",
      desc: "Addressing scalability, security, customization, user experience, and third-party integrations for e-commerce and retail companies globally.",
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      desc: "Tailored solutions for smart manufacturing, automation, and predictive maintenance to improve productivity and minimize downtime.",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-2 text-gray-900 text-left">
          Experienced Across Industries
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl text-left">
          UILogic has successfully handled hundreds of technical challenges
          across various industries.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="relative bg-gray-50 rounded-2xl p-6 flex flex-col items-start shadow-md border border-gray-100 min-h-[220px] overflow-hidden"
            >
              <h3 className="text-lg font-bold mb-2 text-gray-900 z-10">
                {ind.title}
              </h3>
              <p className="text-gray-700 mb-8 text-sm z-10">{ind.desc}</p>
              {/* Accent bar */}
              <div className="absolute left-6 bottom-6 w-10 h-2 rounded-full bg-[#4c7572] z-10" />
              {/* Faded icon illustration */}
              <div className="absolute right-4 bottom-4 text-[72px] opacity-10 select-none pointer-events-none z-0">
                {ind.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

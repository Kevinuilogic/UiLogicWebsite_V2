import { motion } from "framer-motion";

export default function CoreCapabilitiesSection() {
  const items = [
    {
      icon: "☁️",
      title: "Cloud Engineering",
      desc: "Unlock the full potential of your cloud. Our certified experts guide you through cloud migration, optimization, and digital transformation on Google Cloud, AWS, or Azure. Enjoy seamless operations and cost savings.",
    },
    {
      icon: "🧠",
      title: "AI & Generative AI",
      desc: "Outrun the competition with innovative AI and GenAI technologies. Automate tasks, enhance productivity, boost customer satisfaction, and make data-driven decisions to achieve your goals faster and stay ahead in the market.",
    },
    {
      icon: "💻",
      title: "Software Development",
      desc: "Become a leader in your niche with top-quality software solutions. Our deep tech expertise, combined with agile methodologies, allows us to create custom scalable applications that streamline processes, attract clients, and boost ROI.",
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      desc: "Protect your business from growing security risks. Our AI-driven cybersecurity solutions proactively identify and neutralize threats before they impact your operations, preventing data loss and disruptions and ensuring business continuity.",
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
        <h2 className="text-3xl md:text-4xl font-black mb-2 text-gray-900">
          Our Core Capabilities
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          At UILogic, we specialize in four core capabilities that form the
          foundation of our success
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-2xl p-6 flex flex-col items-start shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm">{item.desc}</p>
              <a
                href="#"
                className="text-[#4c7572] font-semibold flex items-center gap-1 hover:underline mt-auto"
              >
                Learn More <span aria-hidden>↗</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export const portfolioTexts = [
  {
    title: "Slides",
    description:
      "Slides is a comprehensive dashboard application designed to streamline data visualization and presentation workflows. The platform features an intuitive interface with customizable charts, real-time analytics, and collaborative tools that enable teams to create compelling presentations efficiently.",
    link: "#",
    image: "/images/slides.png",
  },
  {
    title: "Bluebot",
    description:
      "Bluebot is an advanced AI-powered chatbot platform that provides intelligent customer service solutions. The system features natural language processing, automated responses, and seamless integration capabilities that help businesses enhance their customer support experience.",
    link: "#",
    image: "/images/bluebot.png",
  },
  {
    title: "EdTech Platform",
    description:
      "A comprehensive educational technology platform that revolutionizes online learning experiences. The platform includes interactive course management, student progress tracking, virtual classrooms, and advanced analytics to support both educators and learners in achieving their goals.",
    link: "#",
    image: "/images/edtech.png",
  },
  {
    title: "Expense Tracker",
    description:
      "Smart financial management application that helps users track expenses, manage budgets, and analyze spending patterns. Features include automated categorization, visual reports, budget alerts, and comprehensive financial insights to promote better money management habits.",
    link: "#",
    image: "/images/expense.png",
  },
  {
    title: "Coding Blog",
    description:
      "A modern blogging platform specifically designed for developers and tech enthusiasts. Features include syntax highlighting, code snippets, interactive examples, comment systems, and SEO optimization to help developers share knowledge and build their online presence.",
    link: "#",
    image: "/images/coding.png",
  },
  {
    title: "Mentory",
    description:
      "Professional mentorship platform that connects mentors and mentees across various industries. The platform includes scheduling tools, progress tracking, resource sharing, and communication features designed to facilitate meaningful professional development relationships.",
    link: "#",
    image: "/images/mentory.png",
  },
  {
    title: "Re-Zenith",
    description:
      "Advanced project management and collaboration platform designed for modern teams. Features include task management, team communication, file sharing, project timelines, and comprehensive reporting tools that help organizations streamline their workflow and boost productivity.",
    link: "#",
    image: "/images/re-zenith.png",
  },
  {
    title: "MIT Public Health Radar",
    description:
      "Comprehensive public health monitoring system developed in collaboration with MIT. The platform provides real-time health data visualization, epidemic tracking, and predictive analytics to support public health decision-making and emergency response planning.",
    link: "#",
    image: "/images/mit.png",
  },
  {
    title: "DRESSX",
    description:
      "Revolutionary digital fashion platform that brings virtual clothing to the metaverse. The platform enables users to try on, purchase, and wear digital garments in virtual environments, supporting sustainable fashion practices and creative expression in digital spaces.",
    link: "#",
    image: "/images/dressx.png",
  },
];

export const projects = [
  {
    title: "Slides",
    visual: (
      <div className="bg-gray-50 rounded-2xl p-8 w-full shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-3/4"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 bg-green-100 rounded-lg"></div>
              <div className="h-20 bg-purple-100 rounded-lg"></div>
              <div className="h-20 bg-orange-100 rounded-lg"></div>
            </div>
            <div className="h-32 bg-gradient-to-r from-green-200 to-blue-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    ),
    reverse: false,
  },
  {
    title: "Bluebot",
    visual: (
      <div className="bg-blue-50 rounded-2xl p-8 w-full shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-blue-600">bluebot</h3>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-500 text-white p-4 rounded-2xl rounded-bl-sm max-w-xs">
              <p className="text-sm">Hello! How can I help you today?</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-2xl rounded-br-sm max-w-xs ml-auto">
              <p className="text-sm">I need help with my account</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-2xl rounded-bl-sm max-w-xs">
              <p className="text-sm">
                I'd be happy to help you with your account. What specific issue
                are you experiencing?
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    reverse: true,
  },
  {
    title: "EdTech Platform",
    visual: (
      <div className="bg-purple-50 w-full rounded-2xl p-8 shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-purple-600">EdTech Platform</h3>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-100 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">1,234</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">89%</div>
              <div className="text-sm text-gray-600">Completion</div>
            </div>
          </div>
          <div className="h-32 bg-gradient-to-r from-purple-200 to-green-200 rounded-lg"></div>
        </div>
      </div>
    ),
    reverse: false,
  },
  {
    title: "Expense Tracker",
    visual: (
      <div className="bg-cyan-50 w-full rounded-2xl p-8 shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-cyan-600">Expense Tracker</h3>
            <div className="text-2xl font-bold text-green-600">$2,450.00</div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <span className="font-medium">Food & Dining</span>
              </div>
              <span className="font-bold">$450</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Transportation</span>
              </div>
              <span className="font-bold">$320</span>
            </div>
            <div className="h-24 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    ),
    reverse: true,
  },
  {
    title: "Coding Blog",
    visual: (
      <div className="bg-indigo-50 w-full rounded-2xl p-8 shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-indigo-600">Coding Blog</h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-32 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              <div className="h-4 bg-gray-200 rounded w-3/5"></div>
            </div>
            <div className="flex space-x-2">
              <div className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs">
                React
              </div>
              <div className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">
                JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    reverse: false,
  },
  {
    title: "Mentory",
    visual: (
      <div className="bg-emerald-50 w-full rounded-2xl p-8 shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-emerald-600">Mentory</h3>
            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-emerald-100 p-4 rounded-lg text-center">
                <div className="text-xl font-bold text-emerald-600">24</div>
                <div className="text-xs text-gray-600">Sessions</div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <div className="text-xl font-bold text-blue-600">12</div>
                <div className="text-xs text-gray-600">Mentors</div>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg text-center">
                <div className="text-xl font-bold text-purple-600">89%</div>
                <div className="text-xs text-gray-600">Success</div>
              </div>
            </div>
            <div className="h-24 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    ),
    reverse: true,
  },
  {
    title: "Re-Zenith",
    visual: (
      <div className="bg-slate-50 w-full rounded-2xl p-8 shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-600">Re-Zenith</h3>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-slate-500 rounded"></div>
              <div className="w-6 h-6 bg-red-500 rounded"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-bold text-slate-600">156</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <div className="text-lg font-bold text-red-600">24</div>
                <div className="text-sm text-gray-600">Active</div>
              </div>
            </div>
            <div className="h-32 bg-gradient-to-r from-slate-200 to-red-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    ),
    reverse: false,
  },
  {
    title: "MIT Public Health Radar",
    visual: (
      <div className="bg-blue-50 w-full rounded-2xl p-8 shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-blue-600">MIT Health Radar</h3>
            <div className="text-sm text-gray-500">Real-time Data</div>
          </div>
          <div className="space-y-4">
            <div className="h-40 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 rounded-lg relative">
              <div className="absolute inset-4 bg-white/50 rounded backdrop-blur-sm"></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-100 p-2 rounded text-center">
                <div className="text-sm font-bold text-green-600">Safe</div>
              </div>
              <div className="bg-yellow-100 p-2 rounded text-center">
                <div className="text-sm font-bold text-yellow-600">Monitor</div>
              </div>
              <div className="bg-red-100 p-2 rounded text-center">
                <div className="text-sm font-bold text-red-600">Alert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    reverse: true,
  },
  {
    title: "DRESSX",
    visual: (
      <div className="bg-pink-50 w-full  rounded-2xl p-8 shadow-sm">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-2xl">DRESSX</h3>
            <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
          </div>
          <div className="space-y-4">
            <div className="h-48 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-lg relative">
              <div className="absolute inset-8 bg-white/30 rounded-lg backdrop-blur-sm"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 rounded p-2">
                <div className="text-xs font-medium">
                  Digital Fashion Collection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    reverse: false,
  },
];

export default function PortfolioListSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Portfolio Section */}
      <main className="max-w-[1400px] mx-auto px-8">
        <motion.div
          className="py-16 flex flex-col gap-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-32 relative ${
                project.reverse ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                ease: "easeOut",
              }}
            >
              {/* Numbered marker and vertical line for this project */}
              <motion.div
                className="absolute left-[-44px] md:left-[-56px] top-1 z-10 flex flex-col items-center h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.2 + 0.2,
                }}
              >
                <span className="text-2xl font-black text-[#4c7572] select-none mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="w-1 h-full bg-[#4c7572]/20 rounded-full" />
              </motion.div>

              {/* Project visual */}
              <motion.div
                className={project.reverse ? "order-2" : "order-1"}
                initial={{ opacity: 0, x: project.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2 + 0.3,
                }}
              >
                {project.visual}
              </motion.div>

              {/* Project text content */}
              <motion.div
                className={project.reverse ? "order-1" : "order-2"}
                initial={{ opacity: 0, x: project.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2 + 0.4,
                }}
              >
                <motion.h2
                  className="text-3xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.2 + 0.5 }}
                >
                  {portfolioTexts[idx].title}
                </motion.h2>
                <motion.p
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.2 + 0.6 }}
                >
                  {portfolioTexts[idx].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.2 + 0.7 }}
                >
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 px-6 py-3  border-2 mt-6 hover:scale-105 transition-transform w-fit"
                    asChild
                  >
                    <Link
                      href={portfolioTexts[idx].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-medium">Live Link</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

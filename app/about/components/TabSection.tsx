import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

export default function TabSection() {
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
            Our Approach
          </Badge>
          <h2 className="text-4xl font-bold mb-6" style={{ color: DARK }}>
            How We <span style={{ color: PRIMARY }}>Work</span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: PRIMARY }}
          >
            We follow a proven methodology that ensures successful project
            delivery and client satisfaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <Tabs defaultValue="discovery" className="w-full">
            <TabsList className="grid w-full  grid-cols-4 mb-8">
              <TabsTrigger
                value="discovery"
                className="data-[state=active]:bg-[#4c7572] data-[state=active]:text-white"
              >
                Discovery
              </TabsTrigger>
              <TabsTrigger
                value="planning"
                className="data-[state=active]:bg-[#4c7572] data-[state=active]:text-white"
              >
                Planning
              </TabsTrigger>
              <TabsTrigger
                value="execution"
                className="data-[state=active]:bg-[#4c7572] data-[state=active]:text-white"
              >
                Execution
              </TabsTrigger>
              <TabsTrigger
                value="delivery"
                className="data-[state=active]:bg-[#4c7572] data-[state=active]:text-white"
              >
                Delivery
              </TabsTrigger>
            </TabsList>
            <TabsContent value="discovery" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4" style={{ color: DARK }}>
                Discovery Phase
              </h3>
              <p className="text-lg" style={{ color: PRIMARY }}>
                We begin by understanding your business needs, goals, and
                challenges. This phase includes:
              </p>
              <ul
                className="list-disc list-inside space-y-2"
                style={{ color: PRIMARY }}
              >
                <li>Requirements gathering and analysis</li>
                <li>Market research and competitor analysis</li>
                <li>Technical feasibility assessment</li>
                <li>Project scope definition</li>
              </ul>
            </TabsContent>
            <TabsContent value="planning" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4" style={{ color: DARK }}>
                Planning Phase
              </h3>
              <p className="text-lg" style={{ color: PRIMARY }}>
                We create a detailed roadmap for your project, including:
              </p>
              <ul
                className="list-disc list-inside space-y-2"
                style={{ color: PRIMARY }}
              >
                <li>Project timeline and milestones</li>
                <li>Resource allocation and team formation</li>
                <li>Technology stack selection</li>
                <li>Risk assessment and mitigation strategies</li>
              </ul>
            </TabsContent>
            <TabsContent value="execution" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4" style={{ color: DARK }}>
                Execution Phase
              </h3>
              <p className="text-lg" style={{ color: PRIMARY }}>
                Our development team brings the plan to life through:
              </p>
              <ul
                className="list-disc list-inside space-y-2"
                style={{ color: PRIMARY }}
              >
                <li>Agile development methodology</li>
                <li>Regular progress updates and demos</li>
                <li>Quality assurance and testing</li>
                <li>Continuous integration and deployment</li>
              </ul>
            </TabsContent>
            <TabsContent value="delivery" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4" style={{ color: DARK }}>
                Delivery Phase
              </h3>
              <p className="text-lg" style={{ color: PRIMARY }}>
                We ensure a smooth launch and ongoing support:
              </p>
              <ul
                className="list-disc list-inside space-y-2"
                style={{ color: PRIMARY }}
              >
                <li>Final testing and quality assurance</li>
                <li>Deployment and launch</li>
                <li>User training and documentation</li>
                <li>Post-launch support and maintenance</li>
              </ul>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

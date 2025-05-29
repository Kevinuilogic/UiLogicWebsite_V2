import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Settings } from "lucide-react";

export default function DevelopmentServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-[#497270]" />,
      title: "Web Application Development",
      description: "Custom web solutions built with modern technologies",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#497270]" />,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile apps",
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#497270]" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services",
    },
    {
      icon: <Settings className="w-8 h-8 text-[#497270]" />,
      title: "Software Development",
      description: "Enterprise software solutions and integrations",
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <div className="w-8 h-1 bg-[#0b0f1a] rounded mx-auto"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

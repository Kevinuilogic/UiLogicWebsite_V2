import { Cloud, Target, Package, Shield } from "lucide-react";

export default function MigrationProcessSection() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Tailored Migration Strategy",
      description:
        "Our experts analyze your current environment - VMware or cloud-based - and design a strategy that fits your needs.",
    },
    {
      icon: <Package className="w-6 h-6 text-orange-500" />,
      title: "Dockerization on the House",
      description:
        "Modernize your applications for the cloud with free Dockerization, making them scalable and future-ready.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-green-500" />,
      title: "Free GCP Migration*",
      description:
        "We handle the entire migration process, ensuring a smooth transition. *Cost to invoice to see if your business qualifies.",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Security Workshop",
      description:
        "Gain valuable insights with our Security Posture Analysis and live demos of Google's industry-leading security suite.",
    },
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl flex items-center justify-center p-8">
            <img src="./icons/migration.svg" alt="Migration" width={'100%'} />
            {/* <div className="relative w-full h-full">

              <div className="absolute top-4 left-4">
                <div className="w-16 h-12 bg-blue-200 rounded border-2 border-blue-300"></div>
                <div className="text-xs text-center mt-1 text-blue-600">
                  Charts
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-16 bg-red-200 rounded border-2 border-red-300"></div>
                <div className="text-xs text-center mt-1 text-red-600">
                  Data
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-[#497270] rounded-full flex items-center justify-center">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <div className="text-sm text-center mt-2 text-gray-600">
                  Migration
                </div>
              </div>
        
              <div className="absolute top-16 left-12 w-16 h-0.5 bg-gray-300 transform rotate-45"></div>
              <div className="absolute top-16 right-12 w-16 h-0.5 bg-gray-300 transform -rotate-45"></div>
            </div> */}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Migration to GCP: Simple, Secure, and Free
          </h2>
          <p className="text-gray-600 leading-relaxed">
            simplifies your transition to Google Cloud, giving you everything
            you need to succeed:
          </p>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

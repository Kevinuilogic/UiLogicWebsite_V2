export default function CapabilitiesSection() {
  const items = [
    { icon: "☁️", label: "Cloud" },
    { icon: "🤖", label: "AI" },
    { icon: "🛡️", label: "Security" },
    { icon: "⚙️", label: "DevOps" },
  ];
  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-10">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center mb-2 text-3xl">
              {item.icon}
            </div>
            <span className="text-base font-semibold text-[#4c7572]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

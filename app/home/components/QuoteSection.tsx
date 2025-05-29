import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-3xl mx-auto border-l-4 pl-8 border-[#4c7572] bg-cyan-50 rounded-xl flex items-center gap-6">
        <div className="flex-shrink-0">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Avatar"
            width={56}
            height={56}
            className="rounded-full"
          />
        </div>
        <div>
          <blockquote className="italic text-lg text-gray-800 mb-2">
            “All our engineers leverage advanced AI capabilities through
            extensive training and access to tools.”
          </blockquote>
          <div className="text-sm font-semibold text-[#4c7572]">
            Vasilii Vinogradov
          </div>
          <div className="text-xs text-gray-500">CTO</div>
        </div>
      </div>
    </section>
  );
}

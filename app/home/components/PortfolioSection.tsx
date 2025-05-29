import Image from "next/image";
import {
  portfolioTexts,
  projects,
} from "@/app/portfolio/components/PortfolioListSection";

export default function PortfolioSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Our Portfolio
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Real-world cases in diverse markets.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center border-2 border-[#4c7572] px-6 py-2 rounded-full font-medium text-[#4c7572] hover:bg-[#4c7572] hover:text-white transition-colors text-sm md:text-base"
            style={{
              borderColor: "#4c7572",
              color: "#4c7572",
              background: "transparent",
            }}
          >
            View Full Portfolio <span className="ml-2">↗</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
          {portfolioTexts.slice(0, 4).map((item, i) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center shadow-sm"
            >
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm font-medium mb-4 text-center">
                {item.title}
              </p>
              <div className="w-full flex justify-center">
                {projects[i].visual}
                {/* <Image
                  src={item.image}
                  alt={item.title}
                  width={520}
                  height={180}
                  className="rounded-lg object-cover"
                /> */}
              </div>
            </div>
          ))}
        </div>
        <button
          className="flex items-center gap-2 text-gray-900 font-semibold py-2 px-4 rounded-full border border-[#4c7572] hover:bg-[#4c7572] hover:text-white transition-colors"
          style={{ borderColor: "#06b6d4" }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12h16m-8-8v16"
            />
          </svg>
          Load More
        </button>
      </div>
    </section>
  );
}

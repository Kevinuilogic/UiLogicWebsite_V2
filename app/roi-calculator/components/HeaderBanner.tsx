const PRIMARY = "#4c7572";

export default function HeaderBanner() {
  return (
    <div className="text-white py-3" style={{ background: PRIMARY }}>
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <span
          className="bg-white px-3 py-1 rounded-full mr-3 font-semibold"
          style={{ color: PRIMARY }}
        >
          UILogic
        </span>
        Streamline your business with intelligent automation solutions.{" "}
        <a href="#contact" className="underline hover:no-underline">
          Get Started Today
        </a>
      </div>
    </div>
  );
}

const DARK = "#0b0f1a";

export default function CalculatorHero() {
  return (
    <div className="relative py-24" style={{ background: DARK }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">ROI Calculator</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Discover how much you can save with intelligent automation
        </p>
      </div>
    </div>
  );
}

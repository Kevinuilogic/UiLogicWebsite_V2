import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-[#4c7572]">UILogic</span>
      </div>
      <div className="flex items-center gap-6">
        <Link
          href="#"
          className="text-gray-800 hover:text-[#4c7572] font-medium"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray-800 hover:text-[#4c7572] font-medium"
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-gray-800 hover:text-[#4c7572] font-medium"
        >
          Portfolio
        </Link>
        <Link
          href="#"
          className="text-gray-800 hover:text-[#4c7572] font-medium"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-gray-800 hover:text-[#4c7572] font-medium"
        >
          Careers
        </Link>
      </div>
      <Button className="bg-[#4c7572] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-cyan-700">
        Contact Us
      </Button>
    </nav>
  );
}

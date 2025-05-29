"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

// Sticky wrapper component
function StickyNav({
  children,
  isScrolled,
}: {
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  const route = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[2000px] mx-auto">{children}</div>
    </div>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const route = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  return (
    <>
      <StickyNav isScrolled={isScrolled}>
        <nav className="flex items-center justify-between px-0 py-4">
          {/* Brand */}
          <div className="flex-1 flex items-center">
            <Link
              href="/"
              className="text-white w-[9rem] text-2xl font-bold ml-8 flex items-center gap-1"
            >
              {/* {route.includes("about")? (
                <img
                  src="./logos/300ppi/Uilogicwhite.png"
                  width={"100%"}
                  alt="logo"
                />
              ) : ( */}
              <img src="./logos/300ppi/Uilogic.png" width={"100%"} alt="logo" />
              {/* )} */}
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div
              className={`flex items-center rounded-full px-6 py-4 shadow-lg space-x-4 w-fit ${
                isScrolled ? "bg-teal-900/80" : "bg-teal-900/80"
              }`}
            >
              <Link
                href="/"
                className={`hover:text-cyan-200 font-medium px-2 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className={`hover:text-cyan-200 font-medium px-2 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                ABOUT
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center hover:text-cyan-200 font-medium px-2 focus:outline-none ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-gray-900 mt-2">
                  <DropdownMenuItem>
                    <Link href={"./app-development"}>App Development</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"./automated-solutions"}>
                      Automated Solutions
                    </Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem>
                    <Link href={"./integrations"}>Integrations</Link>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/portfolio"
                className={`text-nowrap hover:text-cyan-200 font-medium px-2 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                PORTFOLIO
              </Link>
             
              <Link
                href="#"
                className={`hover:text-cyan-200 font-medium px-2 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
               BLOG
              </Link>
              <Link
                href="/roi-calculator"
                className={`hover:text-cyan-200 font-medium px-2 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                CALCULATOR
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 justify-end pr-8">
            <Button
              variant="secondary"
              className="bg-white text-gray-900 rounded-full px-6 py-2 font-medium shadow"
            >
              <Link href="./contact"> CONTACT</Link>
            </Button>
          </div>
          {/* Hamburger (Mobile/Tablet) */}
          <div className="lg:hidden flex items-center pr-4 z-30">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              className="text-white focus:outline-none"
              onClick={() => setOpen((v) => !v)}
            >
              <motion.div animate={open ? "open" : "closed"}>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X
                        className={`${
                          route.includes("about")
                            ? "text-gray-900"
                            : "text-gray-900"
                        } w-8 h-8`}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu
                        className={`${
                          route.includes("about")
                            ? "text-gray-900"
                            : "text-gray-900"
                        } w-8 h-8`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>
          </div>
          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {open && (
              <motion.div
                ref={menuRef}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-4/5 max-w-xs h-[100vh] bg-white shadow-2xl z-40 flex flex-col pt-24 px-8 gap-6"
              >
                <Link
                  href="/about"
                  className="text-gray-900 text-lg font-semibold py-2 border-b border-gray-200 hover:text-cyan-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  ABOUT
                </Link>
                <div className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-900 text-lg font-semibold py-2 border-b border-gray-200 w-full hover:text-cyan-600 transition-colors focus:outline-none">
                      EXPERTISE <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white text-gray-900 mt-2">
                      <DropdownMenuItem>
                        <Link href={"./app-development"}>App Development</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"./automated-solutions"}>
                          Automated Solutions
                        </Link>
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem>
                        <Link href={"./integrations"}>Integrations</Link>
                      </DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Link
                  href="/portfolio"
                  className="text-gray-900 text-lg font-semibold py-2 border-b border-gray-200 hover:text-cyan-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  PORTFOLIO
                </Link>
               
                <Link
                  href="#"
                  className="text-gray-900 text-lg font-semibold py-2 border-b border-gray-200 hover:text-cyan-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  NEWS
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/roi-calculator"
                  className="text-gray-900 text-lg font-semibold py-2 border-b border-gray-200 hover:text-cyan-600 transition-colors"
                >
                  CALCULATOR
                </Link>
                <Button
                  variant="secondary"
                  className=" bg-teal-900/80 text-white rounded-full px-6 py-2 font-medium shadow mt-6"
                  onClick={() => setOpen(false)}
                >
                  <Link href="./contact"> CONTACT</Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Overlay for background click */}
          {open && (
            <div
              className="fixed h-screen overflow-hidden inset-0 bg-black/40 z-30 lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
          )}
        </nav>
      </StickyNav>
      {/* Add a spacer div to prevent content overlap */}
      <div className="h-[88px]"></div>
    </>
  );
}

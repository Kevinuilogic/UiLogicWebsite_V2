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

  const isActive = (path: string) => {
    if (path === "/") {
      return route === path;
    }
    return route.startsWith(path);
  };

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
              className={`flex items-center rounded-full px-8 py-4 shadow-lg space-x-6 w-fit backdrop-blur-md transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-teal-900/90 to-teal-800/90 shadow-teal-900/20"
                  : "bg-gradient-to-r from-teal-900/80 to-teal-800/80 shadow-teal-900/20"
              }`}
            >
              <Link
                href="/"
                className={`hover:text-cyan-200 font-medium px-2 relative group transition-colors duration-200 ${
                  isScrolled ? "text-white" : "text-white"
                } ${isActive("/") ? "text-cyan-200" : ""}`}
              >
                HOME
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-200 transition-all duration-200 ${
                    isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                href="/about"
                className={`hover:text-cyan-200 font-medium px-2 relative group transition-colors duration-200 ${
                  isScrolled ? "text-white" : "text-white"
                } ${isActive("/about") ? "text-cyan-200" : ""}`}
              >
                ABOUT
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-200 transition-all duration-200 ${
                    isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center hover:text-cyan-200 font-medium px-2 focus:outline-none transition-colors duration-200 relative group ${
                    isScrolled ? "text-white" : "text-white"
                  } ${isActive("/app-development") || isActive("/automated-solutions") ? "text-cyan-200" : ""}`}
                >
                  SERVICES{" "}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-200 transition-all duration-200 ${
                      isActive("/app-development") ||
                      isActive("/automated-solutions")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-sm text-gray-900 mt-2 rounded-xl border-0 shadow-lg p-2 min-w-[200px] animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
                  <DropdownMenuItem
                    className={`hover:bg-teal-900/10 focus:bg-teal-900/10 cursor-pointer rounded-lg transition-colors duration-200 ${
                      isActive("/app-development") ? "bg-teal-900/10" : ""
                    }`}
                  >
                    <Link
                      href={"./app-development"}
                      className="w-full py-2.5 px-3 flex items-center gap-2 group"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                          isActive("/app-development")
                            ? "bg-teal-900"
                            : "bg-teal-900/60 group-hover:bg-teal-900"
                        }`}
                      ></div>
                      <span className="font-medium">App Development</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`hover:bg-teal-900/10 focus:bg-teal-900/10 cursor-pointer rounded-lg transition-colors duration-200 ${
                      isActive("/automated-solutions") ? "bg-teal-900/10" : ""
                    }`}
                  >
                    <Link
                      href={"./automated-solutions"}
                      className="w-full py-2.5 px-3 flex items-center gap-2 group"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                          isActive("/automated-solutions")
                            ? "bg-teal-900"
                            : "bg-teal-900/60 group-hover:bg-teal-900"
                        }`}
                      ></div>
                      <span className="font-medium">Automated Solutions</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/portfolio"
                className={`text-nowrap hover:text-cyan-200 font-medium px-2 relative group transition-colors duration-200 ${
                  isScrolled ? "text-white" : "text-white"
                } ${isActive("/portfolio") ? "text-cyan-200" : ""}`}
              >
                PORTFOLIO
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-200 transition-all duration-200 ${
                    isActive("/portfolio") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                href="#"
                className={`hover:text-cyan-200 font-medium px-2 relative group transition-colors duration-200 ${
                  isScrolled ? "text-white" : "text-white"
                } ${isActive("/blog") ? "text-cyan-200" : ""}`}
              >
                BLOG
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-200 transition-all duration-200 ${
                    isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                href="/roi-calculator"
                className={`hover:text-cyan-200 font-medium px-2 relative group transition-colors duration-200 ${
                  isScrolled ? "text-white" : "text-white"
                } ${isActive("/roi-calculator") ? "text-cyan-200" : ""}`}
              >
                CALCULATOR
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-200 transition-all duration-200 ${
                    isActive("/roi-calculator")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 justify-end pr-8">
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-white to-white/90 text-gray-900 rounded-full px-8 py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="./contact" className="flex items-center gap-2">
                <span>CONTACT</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
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
                    <DropdownMenuTrigger className="flex items-center justify-between text-gray-900 text-lg font-semibold py-2 border-b border-gray-200 w-full hover:text-cyan-600 transition-colors focus:outline-none">
                      <span>EXPERTISE</span>
                      <ChevronDown className="ml-1 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white/95 backdrop-blur-sm text-gray-900 mt-1 rounded-xl border-0 shadow-lg p-2 w-full animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
                      <DropdownMenuItem
                        className={`hover:bg-teal-900/10 focus:bg-teal-900/10 cursor-pointer rounded-lg transition-colors duration-200 ${
                          isActive("/app-development") ? "bg-teal-900/10" : ""
                        }`}
                      >
                        <Link
                          href={"./app-development"}
                          className="w-full py-3 px-4 flex items-center gap-3 group"
                          onClick={() => setOpen(false)}
                        >
                          <div
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                              isActive("/app-development")
                                ? "bg-teal-900"
                                : "bg-teal-900/60 group-hover:bg-teal-900"
                            }`}
                          ></div>
                          <span className="font-medium text-base">
                            App Development
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={`hover:bg-teal-900/10 focus:bg-teal-900/10 cursor-pointer rounded-lg transition-colors duration-200 ${
                          isActive("/automated-solutions")
                            ? "bg-teal-900/10"
                            : ""
                        }`}
                      >
                        <Link
                          href={"./automated-solutions"}
                          className="w-full py-3 px-4 flex items-center gap-3 group"
                          onClick={() => setOpen(false)}
                        >
                          <div
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                              isActive("/automated-solutions")
                                ? "bg-teal-900"
                                : "bg-teal-900/60 group-hover:bg-teal-900"
                            }`}
                          ></div>
                          <span className="font-medium text-base">
                            Automated Solutions
                          </span>
                        </Link>
                      </DropdownMenuItem>
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

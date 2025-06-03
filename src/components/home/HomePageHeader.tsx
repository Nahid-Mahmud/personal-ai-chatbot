"use client";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeChange from "../shared/ThemeChange";
import { useState, useEffect, useRef } from "react";

function HomePageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Handle clicks outside the header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="border-b bg-white/80 dark:bg-black backdrop-blur-sm dark:border-gray-800 relative z-10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">AIO Chat</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {" "}
          <Link
            href="#about"
            className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="#features"
            className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            prefetch={true}
            href={"/chat"}
            className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Get Started
          </Link>
          <ThemeChange />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeChange />
          <button onClick={toggleMobileMenu} className="p-2 text-slate-700 dark:text-gray-300 focus:outline-none">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        <div
          className={`md:hidden absolute w-full transition-all duration-500 bg-white dark:bg-gray-900 border-b dark:border-gray-800 py-4 px-4 shadow-lg ${
            mobileMenuOpen ? "top-[73px] left-0 opacity-100" : "-top-[200px] left-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#features"
              className="text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>

            <Link
              prefetch={true}
              href={"/chat"}
              className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      }
    </header>
  );
}

export default HomePageHeader;

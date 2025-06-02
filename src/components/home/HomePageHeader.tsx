"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import ThemeChange from "../shared/ThemeChange";

function HomePageHeader() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">AIO Chat</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </Link>
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
            About
          </a>

          <Link
            prefetch={true}
            href={"/chat"}
            className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Get Started
          </Link>
          <ThemeChange />
        </nav>
      </div>
    </header>
  );
}

export default HomePageHeader;

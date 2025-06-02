import { MessageCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HomePageHeader() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">AIO Chat</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
            About
          </a>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Link
            prefetch={true}
            href={"/chat"}
            className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HomePageHeader;

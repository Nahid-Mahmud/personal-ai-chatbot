import { MessageCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function HomePageHeader() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">AI Chat Pro</span>
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
          <Button size="sm">Get Started</Button>
        </nav>
      </div>
    </header>
  );
}

export default HomePageHeader;

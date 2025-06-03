import { Shield, Users, Zap } from "lucide-react";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 dark:bg-[#0B192C] dark:text-white  dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose AI Chat Pro?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Built for professionals who need reliable, flexible AI assistance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Lightning Fast</h3>
            <p className="text-slate-600">Real-time responses with optimized performance across all AI models</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Secure & Private</h3>
            <p className="text-slate-600">Your conversations are encrypted and never stored without permission</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">User-Friendly</h3>
            <p className="text-slate-600">Intuitive interface designed for both beginners and power users</p>
          </div>
        </div>
      </div>
    </section>
  );
}

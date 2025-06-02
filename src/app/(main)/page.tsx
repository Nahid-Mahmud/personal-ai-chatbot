import { FeatureCard } from "@/components/home/FeatureCard";
import HomePageHeader from "@/components/home/HomePageHeader";
import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, Settings, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MessageCircle,
    title: "AI-Powered Chat",
    description: "Real-time conversation interface with intelligent responses",
    bulletPoints: [
      "Instant message streaming",
      "Natural conversation flow",
      "Message history & search",
      "Export conversations",
    ],
    gradientFrom: "blue-500",
    gradientTo: "blue-600",
  },
  {
    icon: Brain,
    title: "Multiple AI Models",
    description: "Choose from various AI models through OpenRouter integration",
    bulletPoints: [
      "GPT-4, Claude, Gemini & more",
      "Easy model switching",
      "Cost-effective pricing",
      "Performance optimization",
    ],
    gradientFrom: "purple-500",
    gradientTo: "purple-600",
  },
  {
    icon: Settings,
    title: "Context Management",
    description: "Create and manage custom conversation contexts",
    bulletPoints: ["Custom context creation", "Context templates", "Easy editing & deletion", "Role-based responses"],
    gradientFrom: "green-500",
    gradientTo: "green-600",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <HomePageHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Your Personal
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              AI Assistant
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience intelligent conversations with multiple AI models, custom contexts, and real-time responses.
            Built for professionals who demand flexibility and control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/chat"} prefetch={true}>
              <Button size="lg" className="text-lg px-8 py-3">
                Start Chatting Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need for intelligent AI conversations in one streamlined platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* AI-Powered Chat */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bulletPoints={feature.bulletPoints}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
            />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Transform Your AI Experience?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of professionals using AI Chat Pro for smarter conversations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-4">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AI Chat Pro</span>
              </div>
              <p className="text-slate-400">
                Your intelligent AI assistant for professional conversations and productivity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AI Chat Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

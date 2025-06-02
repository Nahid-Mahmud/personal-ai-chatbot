// import { features } from "@/data/features";
import { Brain, MessageCircle, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
export const features = [
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

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Everything you need for intelligent AI conversations in one streamlined platform
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* AI-Powered Chat */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 z-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">AI-Powered Chat</CardTitle>
            <CardDescription className="text-base">
              Real-time conversation interface with intelligent responses
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="text-slate-600 space-y-2">
              <li>• Instant message streaming</li>
              <li>• Natural conversation flow</li>
              <li>• Message history & search</li>
              <li>• Export conversations</li>
            </ul>
          </CardContent>
        </Card>

        {/* AI Model Selection */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Multiple AI Models</CardTitle>
            <CardDescription className="text-base">
              Choose from various AI models through OpenRouter integration
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="text-slate-600 space-y-2">
              <li>• GPT-4, Claude, Gemini & more</li>
              <li>• Easy model switching</li>
              <li>• Cost-effective pricing</li>
              <li>• Performance optimization</li>
            </ul>
          </CardContent>
        </Card>

        {/* Context Management */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Context Management</CardTitle>
            <CardDescription className="text-base">Create and manage custom conversation contexts</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="text-slate-600 space-y-2">
              <li>• Custom context creation</li>
              <li>• Context templates</li>
              <li>• Easy editing & deletion</li>
              <li>• Role-based responses</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

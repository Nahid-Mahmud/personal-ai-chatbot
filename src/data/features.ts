import { Brain, MessageCircle, Settings } from "lucide-react";

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

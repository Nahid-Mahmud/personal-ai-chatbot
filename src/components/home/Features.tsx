// import { features } from "@/data/features";
import { Brain, MessageCircle, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

//  {
//     id: 1,
//     name: "Meta: Llama 3.2 3B Instruct",
//     model: "meta-llama/llama-3.2-3b-instruct:free",
//   },
//   // {
//   //   id: 2,
//   //   name: "Google: LearnLM 1.5 Pro Experimental",
//   //   model: "google/learnlm-1.5-pro-experimental:free",
//   // },
//   {
//     id: 3,
//     name: "Qwen2.5 7B Instruct",
//     model: "qwen/qwen-2.5-7b-instruct:free",
//   },
//   {
//     id: 4,
//     name: "DeepSeek: R1 Distill Llama 70B",
//     model: "deepseek/deepseek-r1-distill-llama-70b:free",
//   },
//   {
//     id: 5,
//     name: "Qwen: Qwen3 0.6B",
//     model: "qwen/qwen3-0.6b-04-28:free",
//   },
export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Powerful Features</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
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
            <ul className="text-slate-600 space-y-2 dark:text-slate-400">
              <li>• Instant message streaming</li>
              <li>• Natural conversation flow</li>
              {/* <li>• Message history & search</li>
              <li>• Export conversations</li> */}
              <li>• Copy Code Snippets</li>
              <li>• Code Syntax Highlighting</li>
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
            <ul className="text-slate-600 space-y-2 dark:text-slate-400">
              <li>• Meta Llama, Qwen, DeepSeek and more </li>
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
            <ul className="text-slate-600 space-y-2 dark:text-slate-400">
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

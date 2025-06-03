import { Badge, Brain, MessageCircle, Settings } from "lucide-react";
import React from "react";
import GradientText from "../providers/GradientText";

function About() {
  return (
    <div>
      <section id="about" className="bg-white dark:bg-[#080b14] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 dark:text-white">About AIO Chat</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                The ALL-in-One solution for intelligent AI conversations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 dark:text-slate-200">
                  One Platform, <GradientText text="Endless Possibilities" />
                  {/* <span className="text-blue-600">Endless Possibilities</span> */}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  AIO Chat revolutionizes how you interact with artificial intelligence by bringing together multiple AI
                  models, customizable contexts, and powerful conversation management into a single, streamlined
                  platform.
                </p>
                <p className="text-lg text-slate-600 mb-6 dark:text-slate-400 leading-relaxed">
                  Whether you&npsb;re a developer, researcher, content creator, or business professional, AIO Chat
                  adapts to your workflow and amplifies your productivity with intelligent, context-aware conversations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Universal AI Access</h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Connect to multiple AI models through a single interface
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Smart Context Management</h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Create custom contexts that shape AI responses to your needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">Seamless Experience</h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Intuitive design that makes AI accessible to everyone
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white dark:bg-[#09122C] rounded-2xl shadow-2xl p-8 border">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100">AIO Chat</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-200 ">ALL-in-One AI Platform</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">Multiple AI Models</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs">GPT-4</Badge>
                        <Badge className="text-xs">Claude</Badge>
                        <Badge className="text-xs">Gemini</Badge>
                        <Badge className="text-xs">+More</Badge>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Settings className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-slate-700">Custom Contexts</span>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white rounded px-3 py-2 text-xs text-slate-600">Developer Assistant</div>
                        <div className="bg-white rounded px-3 py-2 text-xs text-slate-600">Content Writer</div>
                        <div className="bg-white rounded px-3 py-2 text-xs text-slate-600">Research Helper</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements for visual appeal */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 dark:text-slate-100">Our Mission</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                To democratize access to artificial intelligence by creating an intuitive, powerful platform that brings
                together the best AI models and tools in one place. We believe that everyone should have access to
                cutting-edge AI technology, regardless of their technical background.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

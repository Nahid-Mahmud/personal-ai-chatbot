"use client";

import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";

import { Message } from "@/types/chat";
import { AddContextModal } from "./AddContextModal";
import { ChatInput } from "./ChatInput";

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [contexts, setContexts] = useState<{ id: string; title: string; content: string }[]>([]);
  const [isAddContextModalOpen, setIsAddContextModalOpen] = useState(false);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `This is a simulated response to "${content}". In a real implementation, this would come from the AI model.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleAddContext = (title: string, content: string) => {
    const newContext = {
      id: Date.now().toString(),
      title,
      content,
    };
    setContexts((prev) => [...prev, newContext]);
    setSelectedContext(newContext.id);
    setIsAddContextModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <ChatHeader
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
        selectedContext={selectedContext}
        contexts={contexts}
        onContextChange={setSelectedContext}
        onAddContextClick={() => setIsAddContextModalOpen(true)}
      />

      <div className="flex-1 flex h-full overflow-hidden ">
        <div className=" flex-1 ">
          <ChatMessages messages={messages} isTyping={isTyping} />
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} isTyping={isTyping} />
      <AddContextModal
        isOpen={isAddContextModalOpen}
        onClose={() => setIsAddContextModalOpen(false)}
        onAddContext={handleAddContext}
      />
    </div>
  );
}

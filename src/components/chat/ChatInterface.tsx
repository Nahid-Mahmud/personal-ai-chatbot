"use client";

import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { Message } from "@/types/chat";
import { AddContextModal } from "./AddContextModal";
import { ChatInput } from "./ChatInput";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { callOpenRouter } from "@/utils/callOpenRouter";

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "system",
      content: "Hello! How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // const [selectedContext, setSelectedContext] = useState<string | null>(null);
  // const [contexts, setContexts] = useState<{ id: string; title: string; content: string }[]>([]);
  const [isAddContextModalOpen, setIsAddContextModalOpen] = useState(false);

  const contextsFormReduxStore = useSelector((state: RootState) => state?.context?.contexts);
  const selectedContextFromReduxStore = useSelector((state: RootState) => state?.context?.selectedContext);

  // Get selected model from Redux
  const selectedModel = useSelector((state: RootState) => state.model.model);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Format messages for API call
      const apiMessages = messages
        .filter((message) => message.role === "user")
        .map((message) => ({
          role: message.role,
          content: message.content,
        }));

      // Add context if selected
      if (selectedContextFromReduxStore) {
        const contextData = contextsFormReduxStore.find(
          (ctx: { id: string; title: string; content: string }) => ctx.id === selectedContextFromReduxStore
        );
        if (contextData) {
          apiMessages.unshift({
            role: "system" as const,
            content: `Context information: ${contextData.content}`,
          });
        }
      }

      // Add the newest user message
      apiMessages.push({
        role: "user",
        content,
      });

      // Call API
      const responseContent = await callOpenRouter(apiMessages, selectedModel);

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "system",
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      // Handle error
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "system",
        content: "Sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error getting response:", error);
    } finally {
      setIsTyping(false);
    }
  };

  // const handleAddContext = (title: string, content: string) => {
  //   const newContext = {
  //     id: Date.now().toString(),
  //     title,
  //     content,
  //   };
  //   setContexts((prev) => [...prev, newContext]);
  //   setSelectedContext(newContext.id);
  //   setIsAddContextModalOpen(false);
  // };

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <ChatHeader onAddContextClick={() => setIsAddContextModalOpen(true)} />

      <div className="flex-1 flex h-full overflow-hidden ">
        <div className=" flex-1 ">
          <ChatMessages messages={messages} isTyping={isTyping} />
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} isTyping={isTyping} />
      <AddContextModal isOpen={isAddContextModalOpen} onClose={() => setIsAddContextModalOpen(false)} />
    </div>
  );
}

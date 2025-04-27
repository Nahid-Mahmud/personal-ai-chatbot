"use client";

import { useEffect, useRef } from "react";
import { Message } from "@/types/chat";
import { ChatMessageItem } from "./ChatMessageItem";
import { Loader2 } from "lucide-react";

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

export function ChatMessages({ messages, isTyping }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 h-full overflow-y-auto  py-4 px-4 md:px-6 space-y-6 scroll-smooth">
      <div className="container mx-auto space-y-6">
        {messages.map((message) => (
          <ChatMessageItem key={message.id} message={message} />
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-300">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p className="text-sm">AI is thinking...</p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

"use client";

import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  isTyping: boolean;
}

export function ChatInput({ onSendMessage, isTyping }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isTyping) return;

    onSendMessage(message);
    setMessage("");

    // Focus textarea after sending
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  }, [message]);

  // Focus textarea on mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t px-5 ">
      <form onSubmit={handleSubmit} className="mx-auto relative gap-5 p-4 flex items-center  container px-0">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          className="max-h-[50px]  resize-none pr-14 shadow-sm placeholder:text-xl dark:bg-[#0A0A0A] dark:text-white dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-opacity-50 transition-all duration-200 ease-in-out"
          disabled={isTyping}
        />
        <button
          type="submit"
          className="cursor-pointer absolute right-5  shadow drop-shadow-2xl border p-2.5 rounded hover:bg-accent transition-colors duration-200 ease-in-out"
          disabled={!message.trim() || isTyping}
        >
          <SendIcon className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
}

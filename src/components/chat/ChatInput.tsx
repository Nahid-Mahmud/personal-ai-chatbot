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
    <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t ">
      <form onSubmit={handleSubmit} className="mx-auto gap-5 p-4 flex items-center  container px-0">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="min-h-[50px] max-h-[200px] resize-none pr-14 shadow-sm"
          disabled={isTyping}
        />
        <button
          type="submit"
          className="cursor-pointer  shadow drop-shadow-2xl border p-2.5 rounded hover:bg-accent transition-colors duration-200 ease-in-out"
          disabled={!message.trim() || isTyping}
        >
          <SendIcon className="h-6 w-6" />
          <span className="sr-only">Send message</span>
        </button>
      </form>
    </div>
  );
}

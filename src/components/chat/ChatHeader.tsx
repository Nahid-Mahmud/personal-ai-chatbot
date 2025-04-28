"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Moon, PlusCircle, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ChatHeaderProps {
  selectedContext: string | null;
  contexts: { id: string; title: string; content: string }[];
  onContextChange: (contextId: string | null) => void;
  onAddContextClick: () => void;
}

export function ChatHeader({ selectedContext, contexts, onContextChange, onAddContextClick }: ChatHeaderProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [selectedModel, setSelectedModel] = useState("gpt-4");

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between py-4 mx-auto container">
        <div className="flex items-center space-x-4">
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
              <SelectItem value="gpt-4">GPT-4</SelectItem>
              <SelectItem value="claude-3">Claude 3</SelectItem>
              <SelectItem value="llama-3">Llama 3</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-2">
            <Select
              value={selectedContext || "no-context"}
              onValueChange={(value) => onContextChange(value === "no-context" ? null : value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select context" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no-context">No context</SelectItem>
                {contexts.map((context) => (
                  <SelectItem key={context.id} value={context.id}>
                    {context.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              onClick={onAddContextClick}
              className="h-9 w-9 rounded-full transition-colors hover:bg-accent"
            >
              <PlusCircle className="h-5 w-5" />
              <span className="sr-only">Add context</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="h-9 w-9 rounded-full transition-colors hover:bg-accent"
          >
            {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

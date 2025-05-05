"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { setModel } from "@/redux/features/chatModelSlice";
import { RootState } from "@/redux/store";
import { Moon, PlusCircle, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ChatHeaderProps {
  selectedContext: string | null;
  contexts: { id: string; title: string; content: string }[];
  onContextChange: (contextId: string | null) => void;
  onAddContextClick: () => void;
}

interface AIModel {
  id: number;
  name: string;
  model: string;
}

const aiModels: AIModel[] = [
  {
    id: 1,
    name: "Meta: Llama 3.2 3B Instruct",
    model: "meta-llama/llama-3.2-3b-instruct:free",
  },
  {
    id: 2,
    name: "Google: LearnLM 1.5 Pro Experimental",
    model: "google/learnlm-1.5-pro-experimental:free",
  },
  {
    id: 3,
    name: "Qwen2.5 7B Instruct",
    model: "qwen/qwen-2.5-7b-instruct:free",
  },
];

export function ChatHeader({ selectedContext, contexts, onContextChange, onAddContextClick }: ChatHeaderProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [selectedModel, setSelectedModel] = useState<string>("");

  // get existing from redux store
  const selectedModelFromReduxStore = useSelector((state: RootState) => state.model.model);

  const dispatch = useDispatch();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedModelFromReduxStore) {
      setSelectedModel(aiModels[0].model);
      dispatch(setModel({ model: aiModels[0].model }));
    } else {
      dispatch(setModel({ model: selectedModel }));
    }
  }, [selectedModelFromReduxStore, dispatch, selectedModel]);

  if (!mounted) return null;

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex md:items-center md:justify-between py-4 container">
        <div className="flex ml-10 flex-col gap-5 md:flex-row md:items-center ">
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              {aiModels.map((model) => (
                <SelectItem key={model.id} value={model.model}>
                  {model.name}
                </SelectItem>
              ))}
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
              className="h-9 w-9 hidden md:inline-flex rounded-full transition-colors hover:bg-accent"
            >
              <PlusCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="h-9 w-9 flex-1 md:flex-none rounded-full transition-colors hover:bg-accent"
          >
            {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onAddContextClick}
            className="h-9 w-9 md:hidden rounded-full transition-colors hover:bg-accent"
          >
            <PlusCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

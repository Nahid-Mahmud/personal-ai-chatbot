"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { selectContext } from "@/redux/features/chatContextSlice";
import { setModel } from "@/redux/features/chatModelSlice";
import { RootState } from "@/redux/store";
import { Github, Linkedin, Moon, PlusCircle, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddContextModal } from "../context/AddContextModal";
import Link from "next/link";

// interface ChatHeaderProps {
//   // onAddContextClick: () => void;
// }

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
  {
    id: 4,
    name: "DeepSeek: R1 Distill Llama 70B",
    model: "deepseek/deepseek-r1-distill-llama-70b:free",
  },
  {
    id: 5,
    name: "Qwen: Qwen3 0.6B",
    model: "qwen/qwen3-0.6b-04-28:free",
  },
  // {
  //   id: 6,
  //   name: "",
  //   model: "",
  // },
  // {
  //   id: 7,
  //   name: "",
  //   model: "",
  // },
  // {
  //   id: 8,
  //   name: "",
  //   model: "",
  // },
  // {
  //   id: 9,
  //   name: "",
  //   model: "",
  // },
];

export function ChatHeader() {
  const [isAddContextModalOpen, setIsAddContextModalOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [selectedModel, setSelectedModel] = useState<string>("");

  // const router = useRouter();

  // get existing from redux store
  const selectedModelFromReduxStore = useSelector((state: RootState) => state.model.model);
  const contextsFormReduxStore = useSelector((state: RootState) => state?.context?.contexts);
  const selectedContextFromReduxStore = useSelector((state: RootState) => state?.context?.selectedContext);

  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedModelFromReduxStore) {
      setSelectedModel(aiModels[0].model);
      dispatch(setModel({ model: aiModels[0].model }));
    }
  }, [selectedModelFromReduxStore, dispatch, selectedModel]);

  useEffect(() => {
    if (!selectedContextFromReduxStore && contextsFormReduxStore && contextsFormReduxStore.length > 0) {
      dispatch(selectContext({ id: contextsFormReduxStore[0]?.id }));
    }
  }, [contextsFormReduxStore, selectedContextFromReduxStore, dispatch]);

  const handleContextChange = (contextId: string) => {
    dispatch(selectContext({ id: contextId }));
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    dispatch(setModel({ model }));
  };

  if (!mounted) return null;

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex md:items-center md:justify-between py-4 container">
        <div className="flex ml-10 flex-col gap-5 md:flex-row md:items-center ">
          <Select value={selectedModelFromReduxStore || ""} onValueChange={handleModelChange}>
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
            <Select value={selectedContextFromReduxStore || ""} onValueChange={handleContextChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select context" />
              </SelectTrigger>
              <SelectContent>
                {contextsFormReduxStore.map((context: { id: string; title: string; content: string }) => (
                  <SelectItem key={context.id} value={context.id}>
                    {context.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAddContextModalOpen(true)}
              className="h-9 w-9 hidden md:inline-flex rounded-full transition-colors hover:bg-accent"
            >
              <PlusCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:items-center gap-2">
          <div>
            <Link target="_blank" href={"https://www.linkedin.com/in/md-nahid-mahmud/"} rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 flex-1 md:flex-none rounded-full transition-colors hover:bg-accent"
              >
                <Linkedin />
              </Button>
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/Nahid-Mahmud/personal-ai-chatbot"}
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 flex-1 md:flex-none rounded-full transition-colors hover:bg-accent"
              >
                <Github />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="h-9 w-9 flex-1 md:flex-none rounded-full transition-colors hover:bg-accent"
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsAddContextModalOpen(true)}
            className="h-9 w-9 md:hidden rounded-full transition-colors hover:bg-accent"
          >
            <PlusCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <AddContextModal isOpen={isAddContextModalOpen} onClose={() => setIsAddContextModalOpen(false)} />
    </header>
  );
}

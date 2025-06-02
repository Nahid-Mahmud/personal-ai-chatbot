/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { MessageCircle, Plus } from "lucide-react";
import { HiOutlineLightningBolt } from "react-icons/hi";
// import { useState } from "react";
import { resetChat } from "@/redux/features/chatSlice";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import NavItem from "./NavItem";
import { RootState } from "@/redux/store";
import { setLocalAi, setLocalAiModel } from "@/redux/features/localAISlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [localChatAIList, setLocalChatAILis] = useState([]);
  const [error, setError] = useState<unknown | null>(null);

  const dispatch = useDispatch();

  const pathname = usePathname();

  const localModeState = useSelector((state: RootState) => state.localAi.localAi);
  const localAiModel = useSelector((state: RootState) => state.localAi.localAiModel);
  const router = useRouter();
  console.log(localAiModel);

  useEffect(() => {
    const getOllamaModels = async () => {
      try {
        const res = await fetch("http://localhost:11434/api/tags");
        if (!res.ok) {
          throw new Error("Failed to fetch models");
        }
        const data = await res.json();
        setLocalChatAILis(data?.models || []);
        // console.log(data);
      } catch (error: unknown) {
        console.error("Error fetching models:", error);
        setError(error);
      }
    };
    // getOllamaModels();
  }, []);

  return (
    <div className="h-screen w-64 flex flex-col bg-white dark:bg-[#0A0A0A] text-black dark:text-white border-r border-gray-100 dark:border-gray-700 shadow-lg">
      {/* Top + Middle */}
      <div className="flex flex-col flex-grow p-4 overflow-hidden">
        {/* Logo */}
        <div
          className="text-2xl font-bold mb-6 text-center tracking-tight 
          bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 
        "
        >
          <Link href={"/"}>AIO Chat</Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <NavItem icon={<HiOutlineLightningBolt size={20} />} label="Chat" url="/chat" />
          <NavItem icon={<MessageCircle size={20} />} label="Contexts" url="/contexts" />
          {/* <div>
            <div className="flex items-center gap-2 p-2 mb-2">
              <Checkbox
                checked={localModeState}
                onCheckedChange={() => {
                  dispatch(setLocalAi(!localModeState));
                }}
                id="terms"
              />
              <label
                htmlFor="terms"
                className=" leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Select Local Model
              </label>
            </div>
            <div className="pb-2 px-2">
              <Select
                disabled={(error ? true : false) || localChatAIList.length === 0 || !localModeState}
                onValueChange={(value) => dispatch(setLocalAiModel(value))}
                value={localAiModel}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder={
                      error
                        ? `Ollama not available`
                        : localChatAIList.length === 0
                        ? "No local model available"
                        : "Select an Ai Model"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Models</SelectLabel>

                    {localChatAIList.map(
                      (
                        model: {
                          name: string;
                          model: string;
                          modified_at: string;
                          size: number;
                          digest: string;
                          details: {
                            parent_model: string;
                            format: string;
                            family: string;
                            families: string[];
                            parameter_size: string;
                            quantization_level: string;
                          };
                        },
                        index: number
                      ) => (
                        <SelectItem key={index} value={model?.model}>
                          {model?.name}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div> */}
        </nav>
      </div>

      {/* Footer - always visible */}
      <div className="p-4 dark:border-gray-700">
        {
          <button
            onClick={() => {
              if (pathname !== "/chat") {
                router.push("/chat");
              }
              dispatch(resetChat());
            }}
            className="w-full cursor-pointer flex items-center justify-center gap-2 transition rounded-xl py-2 px-4 font-semibold border"
          >
            <Plus size={18} />
            New Chat
          </button>
        }
      </div>
    </div>
  );
}

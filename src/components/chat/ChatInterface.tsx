"use client";

import { Message } from "@/types/chat";
import { useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

import { RootState } from "@/redux/store";
import { callOpenRouter } from "@/utils/callOpenRouter";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "@/redux/features/chatSlice";
import { callOllama } from "@/utils/callOllamaLocalAI";
import { toast } from "react-toastify";

export function ChatInterface() {
  const dispatch = useDispatch();
  const [isTyping, setIsTyping] = useState(false);

  const useLocalAi = useSelector((state: RootState) => state.localAi.localAi);
  const localAiModel = useSelector((state: RootState) => state.localAi.localAiModel);

  // Get messages from Redux store
  const messages = useSelector((state: RootState) => state.chat.messages);
  const contextsFormReduxStore = useSelector((state: RootState) => state?.context?.contexts);
  const selectedContextFromReduxStore = useSelector((state: RootState) => state?.context?.selectedContext);
  const selectedModel = useSelector((state: RootState) => state.model.model);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    if (useLocalAi && localAiModel === "") {
      toast.error("Please select a local model");
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
    };

    dispatch(addMessage(userMessage));
    setIsTyping(true);

    try {
      // Format messages for API call
      const apiMessages = messages
        .filter((message: Message) => message.role === "user")
        .map((message: Message) => ({
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
      let responseContent;

      if (useLocalAi) {
        if (localAiModel === "") {
          toast.error("Please select a local model");
          return;
        }
        // Use local Ollama instance
        responseContent = await callOllama(
          apiMessages,
          localAiModel, // You can replace with a default local model or use a selector
          selectedContextFromReduxStore
        );

        // console.log("Response from local AI:", responseContent);
        // return;
      } else {
        // Use OpenRouter
        responseContent = await callOpenRouter(apiMessages, selectedModel);
      }

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "system",
        content: responseContent,
        timestamp: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      };

      dispatch(addMessage(assistantMessage));
    } catch (error) {
      console.log(error);
      // Handle error
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "system",
        // content: "Sorry, I encountered an error. Please try again later.",
        content: "Todays Limit Reached. Please try again tomorrow.(Free Tier)",
        timestamp: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      };

      dispatch(addMessage(errorMessage));
      console.error("Error getting response:", error);
    } finally {
      setIsTyping(false);

      // const audio = new Audio("/notification.mp3");
      // audio.play().catch((error) => {
      //   console.error("Audio playback failed:", error);
      //   // Consider showing a notification to the user about enabling audio permissions
      // });
      enableSound();
    }
  };

  // Add somewhere in your component
  const enableSound = () => {
    const audio = new Audio("/notification.mp3");

    audio.volume = 1;
    audio
      .play()
      .then(() => {
        console.log("Audio enabled successfully");
      })
      .catch((err) => {
        console.error("Could not enable audio:", err);
      });
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex-1 flex h-full overflow-hidden ">
        <div className=" flex-1 ">
          <ChatMessages messages={messages} isTyping={isTyping} />
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} isTyping={isTyping} />
    </div>
  );
}

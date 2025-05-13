// send request to Ollama , local ai

import { Message } from "@/types/chat";

export async function callOllama(
  messages: Message[],
  model: string = "qwen2.5-coder:7b",
  context?: string 
) {
  try {
   
    const formattedMessages = [...messages];

    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: formattedMessages,
        stream: false,
        context,
     
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to get response from Ollama");
    }

    const data = await response.json();
   
    if (data.created_at) {
      data.created_at = data.created_at.toString();
    }


    if (data.timestamp) {
      data.timestamp = data.timestamp.toString();
    }


    const res = JSON.parse(JSON.stringify(data));
    return res.message.content;
  } catch (error) {
    console.error("Error calling Ollama:", error);
    throw error;
  }
}



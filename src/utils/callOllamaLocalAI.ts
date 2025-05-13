// send request to Ollama , local ai

import { Message } from "@/types/chat";

export async function callOllama(
  messages: Message[],
  model: string = "qwen2.5-coder:7b",
  context?: string // optional system-level context
) {
  try {
    // If there's a system context, add it as a system message at the beginning
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
        // keep_alive: "20m",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to get response from Ollama");
    }

    const data = await response.json();
    // console.log(Math.ceil(data?.eval_duration / 1000000000));

    // 1000000000

    // Explicitly handle created_at by converting it to a string if it exists
    if (data.created_at) {
      data.created_at = data.created_at.toString();
    }

    // Handle any nested timestamps that might cause serialization issues
    if (data.timestamp) {
      data.timestamp = data.timestamp.toString();
    }

    // Return a fully serialized version of the response
    const res = JSON.parse(JSON.stringify(data));
    return res.message.content;
  } catch (error) {
    console.error("Error calling Ollama:", error);
    throw error;
  }
}

// The capitalizeRole function is no longer needed since we're using the messages array directly

type Message = {
  role: "assistant" | "user" | "system";
  content: string;
};

const API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;

export async function callOpenRouter(messages: Message[], model: string) {
  if (!API_KEY) {
    throw new Error("API key is not set");
  }
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || window.location.origin,
        "X-Title": "Personal Chatbot",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to get response");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling OpenRouter:", error);
    throw error;
  }
}

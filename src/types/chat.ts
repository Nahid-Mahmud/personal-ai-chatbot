export interface Message {
  id: string;
  role: "assistant" | "user" | "system";
  content: string;
  timestamp: Date;
}

export interface Context {
  id: string;
  title: string;
  content: string;
}

export interface AIModel {
  id: string;
  name: string;
  description?: string;
}

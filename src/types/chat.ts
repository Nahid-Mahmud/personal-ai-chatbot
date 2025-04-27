export interface Message {
  id: string;
  role: "user" | "assistant";
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
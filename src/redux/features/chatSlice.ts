import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "@/types/chat";

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [
    {
      id: "1",
      role: "system",
      content: "Hello! How can I assist you today?",
      // add time with date bd time gmt +6
      timestamp: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
    },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    resetChat: (state) => {
      state.messages = [...initialState.messages];
    },
  },
});

export const { addMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;

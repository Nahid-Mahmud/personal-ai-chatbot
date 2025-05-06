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
      timestamp: new Date(),
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

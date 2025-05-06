import { createSlice } from "@reduxjs/toolkit";

interface ChatContextState {
  id: string;
  title: string;
  content: string;
}

// Define the initial state of the chat context slice
const initialState: ChatContextState[] = [
  {
    id: "1",
    title: "Default Context",
    content: "No specific context provided.",
  },
];

const chatContextSlice = createSlice({
  name: "chatContext",
  initialState: {
    contexts: initialState,
    selectedContext: null as string | null,
  },
  reducers: {
    addContext: (state, action) => {
      const { title, content } = action.payload;

      const id = Date.now().toString();

      state.contexts.push({ id, title, content });
    },
    removeContext: (state, action) => {
      const { id } = action.payload;
      state.contexts = state.contexts.filter((context) => context.id !== id);
      if (state.selectedContext === id) {
        state.selectedContext = null;
      }
    },
    selectContext: (state, action) => {
      const { id } = action.payload;
      state.selectedContext = id;
    },
    editContext: (state, action) => {
      const { id, title, content } = action.payload;
      const contextIndex = state.contexts.findIndex((context) => context.id === id);
      if (contextIndex !== -1) {
        state.contexts[contextIndex] = { ...state.contexts[contextIndex], title, content };
      }
    },
  },
});

export const { addContext, removeContext, selectContext, editContext } = chatContextSlice.actions;
export default chatContextSlice.reducer;

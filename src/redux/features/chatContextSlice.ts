import { createSlice } from "@reduxjs/toolkit";

interface ChatContextState {
  id: string;
  title: string;
  content: string;
}

const chatContextSlice = createSlice({
  name: "chatContext",
  initialState: {
    contexts: [] as ChatContextState[],
    selectedContext: null as string | null,
  },
  reducers: {
    addContext: (state, action) => {
      const { id, title, content } = action.payload;
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
  },
});

export const { addContext, removeContext, selectContext } = chatContextSlice.actions;
export default chatContextSlice.reducer;

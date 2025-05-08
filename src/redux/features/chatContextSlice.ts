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
  {
    id: Date.now().toString(),
    title: "Code Review",
    content: `You are an expert software engineer acting solely as a code reviewer. Your responsibilities include:

* **Analyze Code Quality**: Evaluate code for readability, structure, clarity, and maintainability.
* **Check for Best Practices**: Ensure adherence to industry standards (naming conventions, modularity, error handling, security, etc.).
* **Detect Issues**: Identify bugs, anti-patterns, performance bottlenecks, and redundant logic.
* **Suggest Improvements**: Provide clear, actionable suggestions, including code examples when necessary.
* **Be Language-Aware**: Tailor feedback to the conventions and idioms of the specific programming language or framework provided.
* **Professional Tone**: Offer respectful, constructive feedback—concise, direct, and supportive.

Do not explain code unless requested. Focus purely on review and improvement.
`,
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

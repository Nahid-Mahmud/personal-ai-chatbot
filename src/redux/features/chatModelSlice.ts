import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatModelState {
  model: string | null;
}

const initialState: ChatModelState = {
  model: null,
};

const chatModelSlice = createSlice({
  name: "chatModel",
  initialState,
  reducers: {
    setModel: (state, action: PayloadAction<{ model: string }>) => {
      state.model = action.payload.model;
    },
    resetModel: (state) => {
      state.model = null;
    },
  },
});

export const { setModel, resetModel } = chatModelSlice.actions;

export default chatModelSlice.reducer;

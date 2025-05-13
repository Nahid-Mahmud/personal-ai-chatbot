import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalAiSliceState {
  localAi: boolean;
  localAiModel: string;
}

const initialState: LocalAiSliceState = {
  localAi: false,
  localAiModel: "",
};

const localAiSlice = createSlice({
  name: "localAi",
  initialState,
  reducers: {
    setLocalAi: (state, action: PayloadAction<boolean>) => {
      state.localAi = action.payload;
    },
    setLocalAiModel: (state, action: PayloadAction<string>) => {
      state.localAiModel = action.payload;
    },
  },
});
export const { setLocalAi, setLocalAiModel } = localAiSlice.actions;
export default localAiSlice.reducer;

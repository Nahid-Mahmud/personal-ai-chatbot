import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
// import authReducer from "@/redux/features/authSlice";
import modelReducer from "@/redux/features/chatModelSlice";
import chatContextReducer from "@/redux/features/chatContextSlice";
import chatReducer from "@/redux/features/chatSlice";
import localAiReducer from "@/redux/features/localAISlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  // auth: authReducer,
  model: modelReducer,
  context: chatContextReducer,
  chat: chatReducer,
  localAi: localAiReducer,
});

export default rootReducer;

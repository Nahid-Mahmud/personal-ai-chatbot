import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
// import authReducer from "@/redux/features/authSlice";
import modelReducer from "@/redux/features/chatModelSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  // auth: authReducer,
  model: modelReducer,
});

export default rootReducer;

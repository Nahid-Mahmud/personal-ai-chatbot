/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/authSlice";
import { RootState } from "../store";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

if (!baseUrl) {
  throw new Error("Environment variable NEXT_PUBLIC_BASE_URL is not set");
}

const baseQueryWithAuth: ReturnType<typeof fetchBaseQuery> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && (result.error.status === 401 || result.error.status === 403)) {
    api.dispatch(logout());
    // Redirect to login page
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

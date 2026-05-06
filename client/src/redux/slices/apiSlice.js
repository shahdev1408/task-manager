import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL
    ? import.meta.env.VITE_APP_BASE_URL + "/api"
    : "/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.user?.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
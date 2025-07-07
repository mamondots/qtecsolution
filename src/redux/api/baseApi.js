import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "http://localhost:5174/";

export const baseApi = createApi({
  reducerPath: baseUrl,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

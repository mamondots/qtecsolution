import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "http://localhost:5000/api/v1";

export const baseApi = createApi({
  reducerPath: baseUrl,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["product", "cart"],
  endpoints: () => ({}),
});

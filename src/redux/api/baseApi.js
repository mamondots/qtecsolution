import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://server-one-zeta-21.vercel.app/api/v1";

export const baseApi = createApi({
  reducerPath: baseUrl,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["product", "cart"],
  endpoints: () => ({}),
});

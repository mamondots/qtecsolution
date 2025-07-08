import { baseApi } from "@/redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ params }) => ({
        url: `/cart/create-cart`,
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["cart"],
    }),

    getAllCarts: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),

    updateSingleCart: builder.mutation({
      query: ({ id, params = {} }) => ({
        url: `/cart/${id}`,
        method: "PUT",
        body: params,
      }),
      invalidatesTags: ["cart"],
    }),

    deleteSingleCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetAllCartsQuery,
  useUpdateSingleCartMutation,
  useDeleteSingleCartMutation,
} = cartApi;

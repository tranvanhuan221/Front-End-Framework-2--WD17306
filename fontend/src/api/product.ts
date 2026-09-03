import { IProduct } from '@/interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'product',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `/product`,
            providesTags: ['Product']
        }),
        getProductById: builder.query<IProduct, number | string>({
            query: (id) => `/product/${id}`,
            providesTags: ['Product']
        }),
        removeProduct: builder.mutation<void, number>({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Product']
        }),
        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/product`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/product/${product.id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ['Product']
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useRemoveProductMutation,
    useAddProductMutation,
    useUpdateProductMutation
} = productApi;
export const productReducer = productApi.reducer;
export default productApi;
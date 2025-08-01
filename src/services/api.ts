import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { typeProduct } from '../store/reducers/cart'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<typeProduct[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProductsQuery } = api
export default api

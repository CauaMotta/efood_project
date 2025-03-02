import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantModel } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantModel[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantProfile: builder.query<RestaurantModel, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantProfileQuery } = api
export default api

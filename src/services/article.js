import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
        //which API we wanna call
        baseUrl: 'https://5f98726d310c4a0016afecb7.mockapi.io/articles/'
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query : (params)=> `test`,
        })
    })
})
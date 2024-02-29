import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICountry } from "@/model/type.interface"

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500" }),
  endpoints: (build) => ({
    getCountry: build.query<ICountry[], null>({
      query: () => "/country",
    }),
  }),
})

export const { useGetCountryQuery } = countryApi

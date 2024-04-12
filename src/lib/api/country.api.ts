import { ICountry } from "@/model/type.interface"
import { api } from "./index.api"

const countryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCountry: builder.query<ICountry[], void>({
      query: () => "/country",
    }),
  }),
})

export const { useGetCountryQuery } = countryApi

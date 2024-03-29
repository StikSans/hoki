import { getCookie } from "@/utils/cookie"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { url } from "./config"

const baseQuery = fetchBaseQuery({
  baseUrl: `${url}/api`,

  prepareHeaders: (headers: any) => {
    const token = getCookie("accetss") || null

    if (token && token !== null) {
      headers.set(`authorization`, `Bearer ${token}`)
    }
    return headers
  },
})

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Post", "User"],
  endpoints: (build) => ({
    empty: build.query({
      query: () => "/",
    }),
  }),
})

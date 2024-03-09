import { ILogin } from "@/model/ILogin.interface"
import { api } from "./index.api"

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<string, ILogin>({
      query: (login) => ({
        url: "/auth/login",
        method: "POST",
        body: login,
      }),
    }),
  }),
})

export const { useLoginUserMutation } = userApi

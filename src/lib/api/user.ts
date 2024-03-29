import { ILogin } from "@/model/ILogin.interface"
import { api } from "./index.api"
import { IUser } from "@/model/IUser.interface"
import { IRegistration } from "@/model/IRegister"

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<{ access_token: string }, ILogin>({
      query: (login) => ({
        url: "/auth/login",
        method: "POST",
        body: login,
      }),
    }),
    update: build.mutation({
      query: (avatar) => ({
        url: "/user",
        method: "PATCH",
        body: avatar,
      }),
      invalidatesTags: ["User"],
    }),
    regUser: build.mutation<{ access_token: string }, IRegistration>({
      query: (regist: any) => ({
        url: "auth/registration",
        method: "POST",
        body: regist,
      }),
    }),
    getUserById: build.query<IUser, void>({
      query: () => "/user/profile",
      providesTags: ["User"],
    }),
    getOneUserById: build.query<IUser, number>({
      query: (id) => `/user/${id}`,
    }),
  }),
})

export const {
  useLoginUserMutation,
  useGetUserByIdQuery,
  useRegUserMutation,
  useGetOneUserByIdQuery,
  useUpdateMutation,
} = userApi

import { IPost } from "@/model/IPost.interface"
import { api } from "./index.api"

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPost: build.query<IPost[], void>({
      query: () => "/post",
      providesTags: ["Post", "User"],
    }),
    findAllPostById: build.query<IPost[], number>({
      query: (id) => `/post/user/${id}`,
      providesTags: ["Post", "User"],
    }),
    createPost: build.mutation<void, FormData>({
      query: (post) => ({
        url: "/post",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    like: build.mutation<void, number>({
      query: (postId) => ({
        url: `/post/${postId}/like`,
        method: "POST",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
})

export const {
  useGetPostQuery,
  useFindAllPostByIdQuery,
  useCreatePostMutation,
  useLikeMutation,
} = postApi

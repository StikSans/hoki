import { api } from "@/lib/api/index.api"

export const commentApi = api.injectEndpoints({
  endpoints: (build) => ({
    createComment: build.mutation<void, { text: string; post_id: number }>({
      query: (comment) => ({
        url: "/coment/",
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
})

export const { useCreateCommentMutation } = commentApi

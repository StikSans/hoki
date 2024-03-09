import { IPost } from "@/model/IPost.interface";
import { api } from "./index.api";


export const postApi = api.injectEndpoints({
  endpoints: build => ({
    getPost: build.query<IPost[], null>({
      query: () => '/post'
    })
    
  })
})

export const {useGetPostQuery} = postApi
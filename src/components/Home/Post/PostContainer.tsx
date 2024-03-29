"use client"

import Container from "@/components/global/Container/Container"
import { useGetPostQuery } from "@/lib/api/post"
import PostItem from "./PostItem"
import { IPost } from "@/model/IPost.interface"
import PostSkeleton from "@/components/Home/Post/PostSkeleton"

const PostContainer = () => {
  const { data: posts, error, isLoading } = useGetPostQuery()

  return (
    <Container>
      {isLoading && (
        <div className="">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <PostSkeleton key={idx} />
            ))}
        </div>
      )}
      <div>
        {posts &&
          posts.map((post: IPost) => <PostItem key={post.id} post={post} />)}
      </div>
    </Container>
  )
}

export default PostContainer

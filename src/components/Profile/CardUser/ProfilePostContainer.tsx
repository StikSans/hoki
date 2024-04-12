"use client"

import PostSkeleton from "@/components/Home/Post/PostSkeleton"
import { IPost } from "@/model/IPost.interface"
import ProfilePostItem from "@/components/Profile/CardUser/ProfilePostItem"

const ProfilePostContainer = ({
  posts,
  isLoading,
}: {
  posts: IPost[]
  isLoading: boolean
}) => {
  return (
    <>
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
          posts.map((post: IPost) => (
            <ProfilePostItem key={post.id} post={post} />
          ))}
      </div>
    </>
  )
}

export default ProfilePostContainer

"use client"
import { url } from "@/lib/api/config"
import { IPost } from "@/model/IPost.interface"
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  useDisclosure,
} from "@nextui-org/react"
import { useLikeMutation } from "@/lib/api/post"
import { useGetUserByIdQuery } from "@/lib/api/user"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./PostItem.module.css"

import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import PostModal from "./PostModal"

interface IPostItem {
  post: IPost
}

const PostItem = ({ post }: IPostItem) => {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()
  const [like] = useLikeMutation()
  const { data } = useGetUserByIdQuery()

  const handleLike = async (id: number) => {
    await like(id)
  }

  return (
    <>
      <Card className="max-w-[600px] mx-auto mb-3">
        <CardHeader>
          <Avatar
            showFallback
            name={post.user.name}
            isBordered
            radius="full"
            size="sm"
            src={post.user.avatar ? `${url}/${post.user.avatar}` : ""}
          />
          <h4 className="text- font-bold ml-3">
            {`${post.user.name} ${post.user.sur_name}`}
          </h4>
        </CardHeader>
        <CardBody className="gap-3 ">
          {post.img?.length == 1 ? (
            <Image src={`${url}/${post.img[0].img}`} />
          ) : (
            <Swiper
              className={styles.swiperAdaptive}
              slidesPerView={1}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                320: {
                  width: 280,
                },
                375: {
                  width: 345,
                },
                425: {
                  width: 395,
                },
                768: {
                  width: 570,
                },
                1000: {
                  width: 570,
                },
              }}
            >
              {post.img &&
                post.img.map((el) => (
                  <SwiperSlide key={el.id}>
                    <Image src={`${url}/${el.img}`} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}

          {post.text && <p>{post.text}</p>}
        </CardBody>
        <CardFooter className="gap-3">
          <Button
            onClick={() => handleLike(post.id)}
            variant="flat"
            radius="full"
            size="sm"
            startContent={
              <i
                className={`fi fi-${
                  post.user_likes.filter((el) => el.id === data?.id)[0]
                    ? "sr"
                    : "rr"
                }-heart text-[18px]`}
              ></i>
            }
          >
            {post.user_likes.length}
          </Button>
          <Button
            onPress={onOpen}
            variant="flat"
            radius="full"
            size="sm"
            startContent={
              <i className={`fi fi-rr-comment-alt text-[18px]`}></i>
            }
          >
            {post.coment.length}
          </Button>
        </CardFooter>
      </Card>
      <PostModal isOpen={isOpen} onOpenChange={onOpenChange} post={post} />
    </>
  )
}

export default PostItem

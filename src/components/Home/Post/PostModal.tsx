import { url } from "@/lib/api/config"
import { IPost } from "@/model/IPost.interface"
import {
  ModalContent,
  Modal,
  ModalHeader,
  Avatar,
  ModalBody,
  ScrollShadow,
  Image,
  Button,
  ModalFooter,
  Input,
} from "@nextui-org/react"
import { useForm } from "react-hook-form"
import PostComment from "./PostComment"
import { useGetUserByIdQuery } from "@/lib/api/user"
import { useCreateCommentMutation } from "@/lib/api/comment.api"
import { useLikeMutation } from "@/lib/api/post"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

const PostModal = ({
  isOpen,
  onOpenChange,
  post,
}: {
  isOpen: boolean
  onOpenChange: () => void
  post: IPost
}) => {
  const { register, handleSubmit, reset } = useForm<{ text: string }>()
  const { data } = useGetUserByIdQuery()
  const [createComment] = useCreateCommentMutation()
  const [like] = useLikeMutation()

  const onSubmit = async (data: { text: string }) => {
    if (data.text) {
      await createComment({ text: data.text, post_id: post.id })
      reset()
    }
  }

  const handleLike = async (id: number) => {
    await like(id)
  }

  return (
    <Modal
      placement="center"
      size="2xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
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
            </ModalHeader>
            <ModalBody>
              <ScrollShadow className="max-w-full h-[400px] flex flex-col gap-3">
                <Swiper
                  navigation
                  // spaceBetween={10}
                  slidesPerView={1}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  breakpoints={{
                    320: {
                      width: 300,
                      // spaceBetween: 10,
                    },
                    375: {
                      width: 355,
                    },
                    425: {
                      width: 405,
                    },
                    768: {
                      width: 580,
                    },
                    1000: {
                      width: 570,
                    },
                  }}
                >
                  {post.img &&
                    post.img.map((el) => (
                      <SwiperSlide key={el.id}>
                        <Image
                          className="max-h-auto"
                          src={`${url}/${el.img}`}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
                {post.text && <p>{post.text}</p>}
                <div className="flex gap-3">
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
                </div>
                {post.coment.map((el) => (
                  <PostComment key={el.id} comment={el} />
                ))}
              </ScrollShadow>
              {data && (
                <form
                  method="post"
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3 max-w-full"
                >
                  <Input
                    {...register("text")}
                    type="text"
                    label="Коментарий к посту"
                  />
                  <Button type="submit" fullWidth size="lg" color="primary">
                    Создать комментарий
                  </Button>
                </form>
              )}
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default PostModal

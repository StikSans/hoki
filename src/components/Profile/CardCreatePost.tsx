"use client"
import Container from "@/components/global/Container/Container"
import {
  Button,
  Card,
  CardHeader,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import ProfilePostContainer from "@/components/Profile/ProfilePostContainer"
import { useGetUserByIdQuery } from "@/lib/api/user"
import { useCreatePostMutation, useFindAllPostByIdQuery } from "@/lib/api/post"
import { Uploader } from "@/components/Ui/Uploader"
import { useState } from "react"
import { useForm } from "react-hook-form"

const CardCreatePost = () => {
  const [file, setFile] = useState<File | null>(null)
  const { data } = useGetUserByIdQuery()
  const { onOpen, isOpen, onOpenChange } = useDisclosure()
  const { register, handleSubmit } = useForm<{ text: string }>()
  const { data: posts, isLoading } = useFindAllPostByIdQuery(data ? data.id : 0)
  const [createPost] = useCreatePostMutation()

  const onSubmit = async (data: { text: string }) => {
    const formData = new FormData()
    if (data.text || file) {
      formData.append("text", data.text)
      formData.append("img", file as Blob)
      await createPost(formData)
    }
  }

  return (
    <Container>
      <Modal
        placement="center"
        size="2xl"
        onOpenChange={onOpenChange}
        isOpen={isOpen}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Создание поста</ModalHeader>
              <form
                onSubmit={handleSubmit(onSubmit)}
                method="post"
                className="flex flex-col gap-3"
              >
                <ModalBody>
                  <Input
                    {...register("text")}
                    type="text"
                    label="Текс к посту"
                  />
                  <Uploader setFileProps={setFile} title="Фотография" />
                  <Button
                    size="lg"
                    onPress={onClose}
                    type="submit"
                    className="max-w-full"
                    color="primary"
                  >
                    Создать
                  </Button>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <Card className="mb-3 max-w-[600px] mx-auto">
        <CardHeader>
          <Button onPress={onOpen} fullWidth size="lg" color="primary">
            Создать Пост
          </Button>
        </CardHeader>
      </Card>
      {posts && <ProfilePostContainer isLoading={isLoading} posts={posts} />}
    </Container>
  )
}

export default CardCreatePost

"use client"

import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import Container from "../../global/Container/Container"
import {useGetUserByIdQuery, useUpdateMutation} from "@/lib/api/user"
import {url} from "@/lib/api/config"
import {Uploader} from "@/components/Ui/Uploader"
import {SyntheticEvent, useState} from "react"

const CardUser = () => {
  const [file, setFile] = useState<File | null>(null)

  const {data} = useGetUserByIdQuery()
  const {onOpen, isOpen, onOpenChange} = useDisclosure()
  const {
    onOpen: onOpenCardAvatar,
    isOpen: isOpenCardAvatar,
    onOpenChange: onOpenChangeCardAvatar,
  } = useDisclosure()
  const [update] = useUpdateMutation()

  const deleteAvatar = async () => {
    await update({avatar: null})
  }

  const onSubmit = async () => {
    if (file) {
      const formData = new FormData()
      formData.append("avatar", file as Blob)
      await update(formData)
    }
  }

  return (
    <Container>
      <Card className=" mx-auto mb-3 max-w-[600px]">
        <CardHeader className="gap-3">
          {data && (
            <>
              <Dropdown>
                <DropdownTrigger>
                  <Avatar
                    showFallback
                    className="w-20 h-20 text-large"
                    name={data.name}
                    src={`${url}/${data.avatar}`}
                  />
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key="uodate" onPress={onOpen}>
                    {data.avatar ? 'Изменить' : 'Добавить'}
                  </DropdownItem>
                  {data.avatar && (
                    <DropdownItem key="open" onPress={onOpenCardAvatar}>
                      Посмотреть
                    </DropdownItem>
                  )}
                  {data.avatar && (
                    <DropdownItem
                      className="text-danger"
                      key="delete"
                      onClick={deleteAvatar}
                    >
                      Удалить
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
              <div>
                <h4>
                  {data.name} {data.sur_name}
                </h4>
                {data.login && (
                  <h3 className="text-[13px] text-[#006FEE]">{data.login}</h3>
                )}
              </div>
            </>
          )}
        </CardHeader>
      </Card>
      {data?.avatar && (
        <Modal
          size="5xl"
          placement="center"
          onOpenChange={onOpenChangeCardAvatar}
          isOpen={isOpenCardAvatar}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader/>
                <ModalBody className="p-4">
                  <Image src={`${url}/${data?.avatar}`}/>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}

      <Modal placement="center" onOpenChange={onOpenChange} isOpen={isOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Изменить фотографию</ModalHeader>
              <form
                onSubmit={(e: SyntheticEvent<HTMLFormElement>) => {
                  e.preventDefault()
                  onSubmit()
                }}
                method="post"
                className="flex flex-col gap-3"
              >
                <ModalBody>
                  <Uploader setFileProps={setFile} title="Добавте фото"/>
                </ModalBody>
                <ModalFooter>
                  <Button
                    size="lg"
                    onPress={onClose}
                    type="submit"
                    color="primary"
                    className="max-w-full"
                  >
                    Изменить
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default CardUser

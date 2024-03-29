"use client"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react"
import { SyntheticEvent, useEffect, useState } from "react"
import Link from "next/link"
import Container from "@/components/global/Container/Container"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLoginUserMutation } from "@/lib/api/user"
import { ILogin } from "@/model/ILogin.interface"
import { setCookie } from "@/utils/cookie"
import { useRouter } from "next/navigation"

interface IFormInput {
  login: string
  password: string
}

const LoginForm = () => {
  const [typeValue, setTypeValue] = useState<"password" | "text">("password")
  const router = useRouter()

  const { register, handleSubmit } = useForm<IFormInput>()
  const [loginUser, { data: user }] = useLoginUserMutation()

  const renameType = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (typeValue == "password") {
      setTypeValue("text")
    } else {
      setTypeValue("password")
    }
  }

  useEffect(() => {
    if (user) {
      setCookie("accetss", user.access_token)
      router.push("/")
    }
  }, [user])

  const onSubmit: SubmitHandler<IFormInput> = async (date: ILogin) => {
    await loginUser(date)
  }

  return (
    <Container>
      <Card shadow="lg" className="max-w-[600px] mx-auto p-3">
        <CardHeader className="justify-center">
          <h2 className="text-2xl font-bold">Войти в аккаунт</h2>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            method="post"
            className="flex flex-col gap-3"
          >
            <Input
              type="email"
              label="Электроная почта"
              {...register("login")}
            />
            <Input
              type={typeValue}
              label="Пароль"
              {...register("password")}
              endContent={
                <button className="h-fit" onClick={renameType}>
                  <i
                    className={`mr-2 text-default-400 fi fi-rr-eye${
                      typeValue === "text" ? "-crossed" : ""
                    }`}
                  ></i>
                </button>
              }
            />
            <Button type="submit" fullWidth size="lg" color="primary">
              Войти
            </Button>
          </form>
        </CardBody>
        <CardFooter className="justify-center">
          <Link className={"text-[#0070F0]"} href={"/auth/registration"}>
            Зарегистрироваться
          </Link>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default LoginForm

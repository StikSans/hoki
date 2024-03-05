"use client"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react"
import { SyntheticEvent, useState } from "react"
import Link from "next/link"
import Container from "@/components/global/Container/Container"
import { SubmitHandler, useForm } from "react-hook-form"

interface IFormInput {
  login: string
  password: string
}

const LoginForm = () => {
  const [typeValue, setTypeValue] = useState<"password" | "text">("password")

  const { register, handleSubmit } = useForm<IFormInput>()

  const renameType = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (typeValue == "password") {
      setTypeValue("text")
    } else {
      setTypeValue("password")
    }
  }
  const onSubmit: SubmitHandler<IFormInput> = (date: object) => console.log(date)

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
            <Button type="submit" fullWidth={true} size="lg" color="primary">
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

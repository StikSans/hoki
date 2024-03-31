"use client"
import Container from "@/components/global/Container/Container"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react"
import Link from "next/link"
import { SyntheticEvent, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { IRegInput } from "@/model/IRegister"
import { useRegUserMutation } from "@/lib/api/user"
import { setCookie } from "@/utils/cookie"
import { useRouter } from "next/navigation"

export const RegForm = () => {
  const [typeBool, setTypeBool] = useState<boolean>(true)
  const [typeBoolRes, setTypeBoolRes] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const { register, handleSubmit } = useForm<IRegInput>()
  const [regUser, { data: user }] = useRegUserMutation()
  const router = useRouter()

  const onHandleSubmit: SubmitHandler<IRegInput> = async (date: IRegInput) => {
    if (date.password != date.res_password) {
      throw setError(true)
    }
    const { res_password: _, ...newDate } = date
    await regUser(newDate)
  }

  useEffect(() => {
    if (user) {
      setCookie("accetss", user.access_token)
      router.push("/")
    }
  }, [user])

  const renameTypeInput = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTypeBool(!typeBool)
  }
  const renameTypeInputRes = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTypeBoolRes(!typeBoolRes)
  }

  return (
    <Container>
      <Card shadow="lg" className={"max-w-[600px] mx-auto p-3"}>
        <CardHeader className={"justify-center"}>
          <h2 className={"text-[25px]"}>Регистрация</h2>
        </CardHeader>
        <CardBody>
          <form
            className="flex flex-col gap-3"
            action="post"
            onSubmit={handleSubmit(onHandleSubmit)}
          >
            <Input
              type="email"
              label="Электронная почта"
              {...register("login")}
            />
            <Input type="text" label="Фамилия" {...register("sur_name")} />
            <Input type="text" label="Имя" {...register("name")} />
            <Input
              {...register("password")}
              type={typeBool ? "password" : "text"}
              label="Придумайте пароль"
              endContent={
                <button onClick={renameTypeInput}>
                  <i
                    className={`mr-2 text-default-400 fi fi-rr-eye${
                      !typeBool ? "-crossed" : ""
                    }`}
                  ></i>
                </button>
              }
            />
            <Input
              isInvalid={error}
              {...register("res_password")}
              type={typeBoolRes ? "password" : "text"}
              label="Повторите пароль"
              endContent={
                <button onClick={renameTypeInputRes}>
                  <i
                    className={`mr-2 text-default-400 fi fi-rr-eye${
                      !typeBoolRes ? "-crossed" : ""
                    }`}
                  ></i>
                </button>
              }
            />
            {/* <Select className={"max-w-full"} label="Пол">
              {sex.map((el) => (
                <SelectItem key={el.text} value={el.value}>
                  {el.text}
                </SelectItem>
              ))}
            </Select>

            <Select className={"max-w-full "} label="Страна">
              {data ? (
                data.map((el: ICountry) => (
                  <SelectItem key={el.id} value={el.id}>
                    {el.country}
                  </SelectItem>
                ))
              ) : (
                <SelectItem isDisabled key="error">
                  Ошибка
                </SelectItem>
              )}
            </Select>
            <Input type="file" />

            <Input type="date" /> */}
            <Button type="submit" size="lg" color={"primary"} fullWidth>
              Зарегистрироваться
            </Button>
          </form>
        </CardBody>
        <CardFooter className="justify-center">
          <Link className="text-[#0070F0]" href={"/auth/login"}>
            Войти в аккаунт
          </Link>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default RegForm

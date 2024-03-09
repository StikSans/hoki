"use client"
import Container from "@/components/global/Container/Container"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react"
import { sex } from "./arrayTypeInput"
import { useGetCountryQuery } from "@/lib/api/country.api"
import Link from "next/link"
import { SyntheticEvent, useState } from "react"
import { ICountry } from "@/model/type.interface"

export const RegForm = () => {
  const { data, isLoading, error } = useGetCountryQuery(null)

  const [typeBool, setTypeBool] = useState<boolean>(true)
  const [typeBoolRes, setTypeBoolRes] = useState<boolean>(true)

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
          <form className="flex flex-col gap-3" action="">
            <Input type="email" label="Электронная почта" />
            <Input type="text" label="Фамилия" />
            <Input type="text" label="Имя" />
            <Input
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
            <Select className={"max-w-full"} label="Пол">
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

            <Input type="date" />
            <Button size="lg" color={"primary"} fullWidth>
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

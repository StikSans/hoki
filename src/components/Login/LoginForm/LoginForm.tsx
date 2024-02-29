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

const LoginForm = () => {
  const [typeValue, setTypeValue] = useState<"password" | "text">("password")

  const renameType = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (typeValue == "password") {
      setTypeValue("text")
    } else {
      setTypeValue("password")
    }
  }

  return (
    <Container>
      <Card shadow="lg" className="max-w-[600px] mx-auto p-3">
        <CardHeader className="justify-center">
          <h2 className="text-2xl font-bold">Войти в аккаунт</h2>
        </CardHeader>
        <CardBody>
          <form action="" className="flex flex-col gap-3">
            <Input type="email" label="Электроная почта" />
            <Input
              type={typeValue}
              label="Пароль"
              endContent={
                <button className="h-fit" onClick={renameType}>
                  <i
                    className={`mr-2 text-default-400 fi fi-rr-eye${typeValue === "text" ? "-crossed" : ""}`}
                  ></i>
                </button>
              }
            />
            <Button fullWidth={true} size="lg" color="primary">
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

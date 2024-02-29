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
import { regInputs, sex } from "./arrayTypeInput"
import { useGetCountryQuery } from "@/lib/api/caountry"
import Link from "next/link"

export const RegForm = () => {
  const { data, isLoading, error } = useGetCountryQuery(null)

  return (
    <Container>
      <Card shadow="lg" className={"max-w-[600px] mx-auto p-3"}>
        <CardHeader className={"justify-center"}>
          <h2 className={"text-[25px]"}>Регистрация</h2>
        </CardHeader>
        <CardBody className="flex-col gap-3">
          {regInputs.map((el) => (
            <Input key={el.label} type={el.type} label={el.label} />
          ))}
          <Select className={"max-w-full"} label="Пол">
            {sex.map((el) => (
              <SelectItem key={el.text} value={el.value}>
                {el.text}
              </SelectItem>
            ))}
          </Select>

          <Select className={"max-w-full "} label="Страна">
            {data ? (
              data.map((el) => (
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

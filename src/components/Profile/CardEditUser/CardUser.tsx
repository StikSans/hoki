"use client"
import Container from "@/components/global/Container/Container"
import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react"
import { useGetUserByIdQuery, useUpdateMutation } from "@/lib/api/user"
import { useForm } from "react-hook-form"
import { SyntheticEvent, useState } from "react"
import { sex } from "@/components/Registration/RegForm/arrayTypeInput"
import { ICountry } from "@/model/type.interface"
import { useGetCountryQuery } from "@/lib/api/country.api"
import { IReg } from "@/model/IRegister"

const CardUser = () => {
  const { data } = useGetUserByIdQuery()
  const { data: country } = useGetCountryQuery()
  const [update] = useUpdateMutation()
  const { register, handleSubmit } = useForm<IReg>({ defaultValues: data })

  const [typeBool, setTypeBool] = useState<boolean>(true)
  const [typeBoolRes, setTypeBoolRes] = useState<boolean>(true)
  const [newPassword, setNewPassword] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const today: Date | undefined = new Date(data?.date)
  const yyyy = today.getFullYear()
  let mm: string | number = today.getMonth() + 1
  let dd: string | number = today.getDate()

  if (dd < 10) {
    dd = "0" + dd
  }
  if (mm < 10) {
    mm = "0" + mm
  }
  console.log(`${yyyy}-${mm}-${dd}`)

  const onHandleSubmit = async (date: IReg) => {
    if (date.password != date.res_password && error) {
      throw setError(true)
    }

    const { res_password: _, ...newDate } = date
    await update(newDate)
  }

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
          <h3 className={"text-[25px]"}>Редактирование профиля</h3>
        </CardHeader>
        <form
          onSubmit={handleSubmit(onHandleSubmit)}
          action=""
          method="post"
          className="flex flex-col gap-3"
        >
          <Input
            type="email"
            // name="login"
            label="Электронная почта"
            defaultValue={data?.login && data.login}
            {...register("login")}
          />
          <Input
            type="text"
            defaultValue={data?.sur_name}
            label="Фамилия"
            {...register("sur_name")}
          />
          <Input
            type="text"
            defaultValue={data?.name}
            label="Имя"
            {...register("name")}
          />
          <Checkbox isSelected={newPassword} onValueChange={setNewPassword}>
            Изменить пароль
          </Checkbox>
          {newPassword && (
            <>
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
            </>
          )}
          <Select
            {...register("sex")}
            className={"max-w-full"}
            defaultSelectedKeys={[`${data?.sex}`]}
            label="Пол"
          >
            {sex.map((el) => (
              <SelectItem key={el.value} value={el.value}>
                {el.text}
              </SelectItem>
            ))}
          </Select>

          <Select
            {...register("country_id")}
            defaultSelectedKeys={[`${data?.country_id}`]}
            className={"max-w-full "}
            label="Страна"
          >
            {country ? (
              country.map((el: ICountry) => (
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
          <Input
            type="date"
            {...register("date")}
            defaultValue={data?.date && `${yyyy}-${mm}-${dd}`}
          />
          <Button type="submit" size="lg" color={"primary"} fullWidth>
            Изменить
          </Button>
        </form>
      </Card>
    </Container>
  )
}
export default CardUser

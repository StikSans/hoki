import { IRegInput, ISex } from "@/model/type.interface"

export const regInputs: IRegInput[] = [
  {
    type: "email",
    label: "Электронная почта",
  },
  {
    type: "text",
    label: "Фамилия",
  },
  {
    type: "text",
    label: "Имя",
  },
  {
    type: "password",
    label: "Придумайте пароль",
  },
  {
    type: "password",
    label: "Повторите пароль",
  },
]

export const sex: ISex[] = [
  {
    value: "m",
    text: "Мужской",
  },
  {
    value: "f",
    text: "Женский",
  },
]

import { IUser } from "@/model/IUser.interface"

export interface IPost {
  id: number
  text?: string
  img?: string
  likes: number
  user_id: number
  user: IUser
}

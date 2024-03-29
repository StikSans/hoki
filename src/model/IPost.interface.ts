import { IUser } from "@/model/IUser.interface"

export interface IPost {
  id: number
  text?: string
  user_likes: IUserLikes[]
  user_id: number
  user: IUser
  img?: IImg[]
  coment: Coment[]
}

export interface Coment {
  id: number
  post_id: number
  user_id: number
  text: string
  createdAt: string
  updatedAt: string
}

interface IImg {
  id: number
  img: string
  post_id: number
}

interface IUserLikes extends Likes, IUser {}

interface Likes {
  id: number
  post_id: number
  user_id: number
  createdAt: string
}

// export interface ICreatePost {
//   text?: string
//   img?: File[]
// }

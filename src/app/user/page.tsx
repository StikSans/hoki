import CardUser from "@/components/Profile/CardUser/CardUser"
import { Metadata } from "next/types"
import CardCreatePost from "@/components/Profile/CardUser/CardCreatePost"

export const metadata: Metadata = {
  title: "Личный кабинет",
}

const UserPage = () => {
  return (
    <div>
      <CardUser />
      <CardCreatePost />
    </div>
  )
}

export default UserPage

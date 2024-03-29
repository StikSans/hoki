import CardUser from "@/components/Profile/CardUser"
import { Metadata } from "next/types"
import CardCreatePost from "@/components/Profile/CardCreatePost"

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

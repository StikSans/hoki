import CardUser from "@/components/Profile/CardEditUser/CardUser"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Редактирование данных",
}

const page = () => {
  return (
    <section>
      <CardUser />
    </section>
  )
}

export default page

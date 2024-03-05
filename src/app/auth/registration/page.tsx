import RegForm from "@/components/Registration/RegForm/RegForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Регистрация",
}

const RegistrationPage = () => {
  return (
    <div>
      <RegForm />
    </div>
  )
}

export default RegistrationPage

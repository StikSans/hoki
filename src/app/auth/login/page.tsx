import LoginForm from "@/components/Login/LoginForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Вход",

}

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default LoginPage

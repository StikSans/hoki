import LoginForm from "@/components/Login/LoginForm/LoginForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Вход",
  // icons: [
  //   {
  //     rel: "icon",
  //     type: "image/svg",
  //     sizes: "16x16",
  //     url: "/sync.svg",
  //   },
  // ],
}

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default LoginPage

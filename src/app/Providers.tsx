"use client"
import { Provider } from "react-redux"
import { store } from "@/lib/store"
import { ReactNode } from "react"
import { NextUIProvider } from "@nextui-org/react"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  )
}

export default Providers

"use client"

import { url } from "@/lib/api/config"
import { useGetUserByIdQuery } from "@/lib/api/user"
import {
  Avatar,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()
  const { data } = useGetUserByIdQuery()

  return (
    <Navbar>
      <NavbarBrand onClick={() => router.push("/")}>
        <Image src={"/sync.svg"} width={40} radius={"none"} />
        <div className="font-bold text-lg ml-3">sync</div>
      </NavbarBrand>
      {!data && (
        <NavbarContent as="div" justify="end">
          <Link href="/auth/login">Вход</Link>
          <Link href="/auth/registration">Регистрация</Link>
        </NavbarContent>
      )}
      {!!data && (
        <NavbarContent as="div" justify="end">
          <Link href="/user">
            {data.name} {data.sur_name}
          </Link>
          <Avatar
            as={Link}
            href="/user"
            showFallback
            name={data.name}
            radius="full"
            src={`${url}/${data.avatar}`}
          />
        </NavbarContent>
      )}
    </Navbar>
  )
}

export default Header

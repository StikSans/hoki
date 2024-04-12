"use client"

import { url } from "@/lib/api/config"
import { useGetUserByIdQuery } from "@/lib/api/user"
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { setCookie } from "@/utils/cookie"

const Header = () => {
  const router = useRouter()

  const { data, refetch } = useGetUserByIdQuery()

  const logOut = async () => {
    setCookie("accetss", "")
    await refetch()
    setTimeout(() => router.push("/auth/login"), 300)
  }

  return (
    <header>
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
            <p>{`${data.name} ${data.sur_name}`}</p>
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  showFallback
                  name={data.name}
                  radius="full"
                  src={`${url}/${data.avatar}`}
                />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="user" as={Link} href="/user">
                  Личный кабинет
                </DropdownItem>
                <DropdownItem key="edit" as={Link} href="/user/edit">
                  Редактировать профиль
                </DropdownItem>
                <DropdownItem
                  key="LogOut"
                  onClick={logOut}
                  className="text-danger"
                >
                  Выйти
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        )}
      </Navbar>
    </header>
  )
}

export default Header

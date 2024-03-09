'use client'

import Container from "@/components/global/Container/Container"
import { Image, Navbar, NavbarBrand } from "@nextui-org/react"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()

  return (
    <Navbar>
      <Container>
        <NavbarBrand onClick={() => router.push('/')}>
          <Image src={"/sync.svg"} width={40} radius={"none"} />
          <div className="font-bold text-lg ml-3">sync</div>
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}

export default Header

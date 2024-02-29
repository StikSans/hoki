import Container from "@/components/global/Container/Container"
import { Image, Navbar, NavbarBrand } from "@nextui-org/react"

const Header = () => {
  return (
    <Navbar isBordered>
      <Container>
        <NavbarBrand>
          <Image src={"/logo.svg"} width={100} radius={"none"} />
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}

export default Header

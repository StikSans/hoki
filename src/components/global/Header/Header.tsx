import Container from "@/components/global/Container/Container"
import { Image, Navbar, NavbarBrand } from "@nextui-org/react"

const Header = () => {
  return (
    <Navbar>
      <Container>
        <NavbarBrand>
          <Image src={"/sync.svg"} width={40} radius={"none"} />
          <div className="font-bold text-lg ml-3">sync</div>
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}

export default Header

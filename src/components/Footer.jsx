import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="https://ayoub-portfolio.vercel.app">Created By Ayoub Abidi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Footer
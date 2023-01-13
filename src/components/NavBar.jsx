import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
            <img
                src="https://i.ibb.co/XVK6WwJ/mars-1.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Mars logo"
            />{' '}
            Mars Rover
            </Navbar.Brand>
            <Nav className="me-auto">
            </Nav>
        </Container>
    </Navbar>
  )
}

export default NavBar
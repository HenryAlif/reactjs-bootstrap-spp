import { Navbar, Nav, Container } from "react-bootstrap";

const Header = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
        <Navbar.Brand href="/home">Educon!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
                Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;
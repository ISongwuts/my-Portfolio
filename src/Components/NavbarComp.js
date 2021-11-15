import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Customize.css";
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

function NavbarComp() {
  return (
    <Navbar expand="lg" className="nav-bg-color">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#main-section">Home</Nav.Link>
            <Nav.Link href="#about-section">About</Nav.Link>
            <Nav.Link href="#link">Skill</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Certificates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.facebook.com/profile.php?id=100009561062285">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/isongwut.me/">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@isongwut?is_copy_url=1&is_from_webapp=v1&lang=th-TH">
              <FaTiktok />
            </Nav.Link>
            <Nav.Link href="https://github.com/ISongwuts">
              <FaGithub />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoBlack from "../Multimedia/logoblancoSINfondo.png";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="secundary"
      variant="dark"
      style={{
        background: "rgb(45,43,39)",
        background:
          "linear-gradient(54deg, rgba(45,43,39,0.9668242296918768) 28%, rgba(143,87,2,1) 45%, rgba(140,88,8,1) 71%, rgba(231,153,35,0.9360119047619048) 91%)",
        color: "white",
        borderBottom: "white 4px solid",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logoBlack}
            style={{
              width: "60%",
              height: "50%",
              borderRadius: "5%",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{}}>
            <Link className="link" to="/Content">
              Contenido
            </Link>
            <Link className="link" to="/Channels/">
              Canales
            </Link>
            <Link className="link" as={NavLink} to="/Poduction Center/">
              Centro de Producciones
            </Link>
            <Link className="link" as={NavLink} to="/Television Mobiles/">
              Moviles de Televisión
            </Link>
            <Link className="link" as={NavLink} to="/Transmissions/">
              Transmisiones
            </Link>
            <Link className="link" as={NavLink} to="/Rights Management/">
              Gestión de Derechos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoBlack from "../Multimedia/logo1.jpeg";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="secundary"
      variant="dark"
      style={{
        backgroundColor: "rgb(240,155,6)",
        background:
          "linear-gradient(54deg, rgba(240,155,6,0.9668242296918768) 34%, rgba(143,87,2,1) 58%, rgba(137,84,3,1) 71%, rgba(15,15,15,0.5634628851540616) 91%)",
        color: "white",
        borderBottom: "white 4px solid",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logoBlack}
            style={{
              width: "80%",
              height: "70%",
              borderRadius: "5%",
              border: "white 5px solid",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
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

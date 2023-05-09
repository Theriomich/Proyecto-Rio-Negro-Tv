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
        background: "black",
        color: "white",
        borderBottom: "white 4px solid",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            className="imgbrand"
            src={logoBlack}
            style={{
              width: "100px",
              height: "50%",
              borderRadius: "5%",
              marginBottom: "5%",
              "@media (min-width: 2000px)": {
                width: "800%",
              },
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link className="link" to="/Content">
              Contenido
            </Link>
            <Link className="link" to="/Channels/">
              Canales
            </Link>
            <Link className="link" as={NavLink} to="/Poduction_Center/">
              Centro de Producciones
            </Link>
            <Link className="link" as={NavLink} to="/Television_Mobiles/">
              Moviles de Televisión
            </Link>
            <Link className="link" as={NavLink} to="/Transmissions/">
              Transmisiones
            </Link>
            <Link className="link" as={NavLink} to="/Rights_Management/">
              Gestión de Derechos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoBlack from "../Multimedia/logoblancoSINfondo.png";
import sloMo from "../Multimedia/logo2.png";
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
        borderBottom: "#f68e2e 4px solid",
        display: "flex",
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
              justifyContent: "space-between",
            }}
          >
            <Link className="link" to="/Content">
              Contenido
            </Link>
            <Link className="link" to="/Channels/">
              Administración de Canales
            </Link>
            <Link className="link" as={NavLink} to="/Poduction_Center/">
              Centro de Producción
            </Link>
            <Link className="link" as={NavLink} to="/Television_Mobiles/">
              Móviles de Televisión
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
      <Navbar.Brand>
        <div className="imgNavSlo">
          <img className="imgSlo" src={sloMo} />
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default CustomNavbar;

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/Logos/logo2.png";

import "./MainNavigation.css";

const mainNavigation = props => {

  return (
    <header className="main-navigation">
      <Navbar
        collapseOnSelect
        // fixed="top"
        expand="md"
        variant="dark"
        style={{ backgroundColor: props.navbarColor }}
      >
        <Nav.Link as={NavLink} to="/inicio">
          <img src={logo} className="logo" alt="Fiesta-magica-Logo"/>
        </Nav.Link>
        <Navbar.Toggle className="ml-auto"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/inicio">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo">
              Catálogo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/servicios">
              Servicios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr className="top-line bg-green" />
    </header>
  );
};

export default mainNavigation;

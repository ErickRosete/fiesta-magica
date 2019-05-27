import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap"
import { Container } from "react-bootstrap";
import logoAstra from "../../../Assets/Images/Logos/logo-astra.png"

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-blue footer-top">
          <Col xs={12} md={6}>
            <p>@2019 Fiesta Mágica</p>
            <a href="mailto:fiestamagica@gmail.com"> fiestamagica@gmail.com</a>
          </Col>
          <Col xs={12} md={6}>
            <p>Coyoacán, CDMX</p>
            <p>Tel. 55-9627-8073 | 55-4443-3759</p>
          </Col>
        </Row>
        <Row className="bg-purple footer-bottom">
          <Col xs={12} md={6}>
            Aviso de privacidad| Términos de uso
          </Col>
          <Col xs={12} md={6}>
            Desarrollado por <img src={logoAstra} className="logo-astra" alt="Astradev"></img>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

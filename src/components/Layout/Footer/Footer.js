import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import logoAstra from "../../../Assets/Images/Logos/logo-astra.png"

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            ©2019 Fiesta mágica
            <br /> <br />
            Desarrollado por
            <a target="_blank" rel="noopener noreferrer" href="http://astradev.com">
              <img src={logoAstra} href="#" className="logo-astra" alt="astradev"></img>
            </a>
          </Col>

          <Col>
            Tel. (686) 123-45-67 <br/>
            <a target="_blank" rel="noopener noreferrer" href="mailto:fiestamagica@gmail.com">
              fiestamagica@gmail.com
            </a><br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Aviso de privacidad y cookies
            </a>
          </Col>

          <Col className="social-networks">
            <a target="_blank" rel="noopener noreferrer" href="">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
              <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

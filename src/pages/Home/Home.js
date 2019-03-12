import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap"

import { Helmet } from "react-helmet";

import Layout from "../../components/Layout/Layout";

import "./Home.css";

import foto2 from "../../Assets/Images/Home/foto2.png"
import populares1 from "../../Assets/Images/Home/populares1.png"
import populares2 from "../../Assets/Images/Home/populares2.png"
import populares3 from "../../Assets/Images/Home/populares3.png"

export class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Fiesta mágica | Eventos infantiles</title>
          <meta
            name="description"
            content="Renta de equipo para eventos infantiles"
          />
        </Helmet>

        <div className="home">
          <Container fluid>
            <Row className="banner-fiestas">
              <Col sm={5} className="banner-fiestas-container py-5">
                <h1 className='mb-3'>Todo para tus <div className='fiestas-header'> fiestas </div>
                </h1>
                <button className='btn btn-outline-light mt-3'> Ver catálogo </button>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} className="p-0">
                <img className="img-fluid" src={foto2} alt="foto-2"></img>
              </Col>
              <Col xs={12} md={6} className="pl-3 pr-3 py-4 quienes-somos">
                <h2 className="mb-3"> ¿Quienes Somos?</h2>
                <span className="site-font">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum
                </span>
                <button className='btn btn-outline-dark mt-3'> Conoce más </button>
              </Col>
            </Row>

            <Row className="populares-container">
              <h2>Populares</h2>
              <Col xs={12}>
                <Row>
                  <Col xs={12} md={4}>
                    <img className="img-fluid" src={populares1} alt="brincolinas"></img>
                    <h3>Brincolinas</h3>
                  </Col>
                  <Col xs={12} md={4}>
                    <img className="img-fluid" src={populares2} alt="decoraciones"></img>
                    <h3>Decoraciones</h3>
                  </Col>
                  <Col xs={12} md={4}>
                    <img className="img-fluid" src={populares3} alt="manteles"></img>
                    <h3> Manteles</h3>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Container>
        </div>
      </Layout>);

  }
}
export default HomePage;

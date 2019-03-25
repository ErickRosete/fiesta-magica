import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"

import { Helmet } from "react-helmet";

import Layout from "../../components/Layout/Layout";

import "./Services.css";

import placeholder from "../../Assets/Images/Home/foto2.png"

export class ServicesPage extends Component {
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

                <div className="services_list">
                    <h2>Servicios </h2>
                    <Container>
                        <Row>
                            <Col className="bg-pink txt-white p-0" sm={4} xs={12}>
                                <img src={placeholder} alt="FOTO" className="img-fluid" ></img>
                            </Col>
                            <Col className="bg-light-pink txt-white" sm={8} xs={12}>
                                <div className="services_list-content">
                                    <h1>Nombre</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="info_request">
                    <h2> Solicita más información</h2>
                    <Button variant="outline-dark"> Enviar mensaje </Button>
                </div>
            </Layout>);

    }
}
export default ServicesPage;
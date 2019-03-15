import React, { Component } from 'react'
import aboutBanner from '../../Assets/Images/About/placeholder.png'
import { Col, Container, Row, Button } from "react-bootstrap"
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout/Layout";
import "./About.css";

export class About extends Component {
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
                <div className="about">
                    <Container fluid className="px-0">
                        <img src={aboutBanner} className="img-fluid" ></img>
                    </Container>
                    <Container fluid className="nosotros flex-center">
                        <h2> Nosotros </h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                        </span>
                    </Container>
                    <Container fluid className="py-4 bg-purple">
                        <Row>
                            <Col xs={12} md={6} className="vision">
                                <h1>Misión</h1>
                                <span className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum
                                </span>
                            </Col>
                            <Col xs={12} md={6} className="vl vision">
                                <h1 className="">Visión</h1>
                                <span className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum
                                </span>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="flex-center py-4">
                        <h2> Valores </h2>
                        <div className="valores">
                            <span> Responsabilidad </span>
                            <span> Confianza </span>
                            <span> Integridad </span>
                            <span> Amabilidad </span>
                            <span> Respeto </span>
                        </div>
                    </Container>    
                </div>
            </Layout>
        )
    }
}

export default About

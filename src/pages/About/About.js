import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Layout from "../../components/Layout/Layout";

import { Container, Col } from "react-bootstrap"
import { Helmet } from "react-helmet";
import "./About.css"
import aboutBanner from "../../Assets/Images/About/placeholder.png"

export class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

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
                        <img src={aboutBanner} className="img-fluid" alt="about"></img>
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
                    <Container fluid className="bg-purple vision_container">
                        <Row>
                            <Col xs={12} md={6} className="vr">
                                <div className="vision">
                                    <h1>Misión</h1>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum
                                    </span>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="vision">
                                    <h1 className="">Visión</h1>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <div className="valores">
                            <h2> Valores </h2>
                            <div className="valores-list">
                                <span> Responsabilidad </span>
                                <span> Confianza </span>
                                <span> Integridad </span>
                                <span> Amabilidad </span>
                                <span> Respeto </span>
                            </div>
                        </div>
                    </Container>
                </div>
            </Layout>
        )
    }

}
export default AboutPage

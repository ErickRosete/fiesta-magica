import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"

import { Helmet } from "react-helmet";

import Layout from "../../components/Layout/Layout";

import "./Services.css";
import ServiceItem from '../../components/Services/ServiceItem'
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

                        <ServiceItem
                            img={placeholder}
                            title="este es un titulo"
                            desc="esta es una descripcion"
                        />

                        <ServiceItem
                            img={placeholder}
                            title="este es un titulo x2"
                            desc="esta es una descripcion mas.."
                        />

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
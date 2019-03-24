import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Layout from "../../components/Layout/Layout";

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
                            <Col xs={12} md={6} >
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
                            <Col xs={12} md={6} className="vl">
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
                        <div className="flex-center valores">
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

  static propTypes = {

  }

    initMap = () => {
        this.setState({
            scriptLoaded: true,
        })
    }

    componentDidMount() {
        window.initMap = this.initMap
        const gmapScriptEl = document.createElement(`script`)
        gmapScriptEl.src = placesScript
        gmapScriptEl.async = true
        document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
    }

  render() {
    return (
        <Layout>
            <div style={{marginBottom:'4rem'}}>
                <div className="papa" style={{marginBottom:"2rem",marginTop:"3rem"}}>
                    <div className="hijo">Contacto</div>
                </div>
                <div className="papa">
                    <div style={{ width:"50vw", marginLeft:"4rem",marginRight:"4rem"}}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label style={{color:"#1a1d50",fontSize:"1.3rem",fontWeight:"bold"}}>Nombre Completo:</Form.Label>
                                <Form.Control size="lg" type="text" className="bordes" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput2">
                                <Form.Label style={{color:"#1a1d50",fontSize:"1.3rem",fontWeight:"bold"}}>Correo electrónico:</Form.Label>
                                <Form.Control size="lg" type="email" className="bordes" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput2">
                                <Form.Label style={{color:"#1a1d50",fontSize:"1.3rem",fontWeight:"bold"}}>Teléfono:</Form.Label>
                                <Form.Control size="lg" type="phone"  className="bordes"  />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{color:"#1a1d50",fontSize:"1.3rem",fontWeight:"bold"}}>Mensaje:</Form.Label>
                                <Form.Control as="textarea" rows="10" className="bordes"  />
                            </Form.Group>
                            <Button variant="outline-dark" size="lg" className="btn-especial">Enviar</Button>
                        </Form>
                    </div>
                    {this.state.scriptLoaded &&
                        <div>
                            <Row>
                                <div style={{ height: '50vh', width: '50vw' ,marginRight:"4rem"}}>
                                    {/* mapa */}
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: key }}
                                        center={this.state.center}
                                        defaultZoom={this.state.zoom}
                                    >
                                    <AnyReactComponent
                                        lat={this.state.center.lat}
                                        lng={this.state.center.lng}
                                        text="My Marker"
                                    />
                                    </GoogleMapReact>
                                </div>
                            </Row>
                            <Row noGutters="true">
                                <div className="direccion" style={{marginRight:"4rem"}}>
                                    <p style={{marginBottom:"0",marginTop:"1rem"}}>
                                        Calle A #360 Local 5
                                    </p>
                                    <p style={{marginBottom:"0"}}>
                                        Col Segunda Seccion C.P. 21100
                                    </p>
                                    <p>
                                        Mexicali, B.C. México
                                    </p>
                                    <p>
                                        Tel. (686) 123-45-67
                                    </p>
                                </div>
                            </Row>
                        </div>
                    }
                </div>  
            </div>
        </Layout>
    )
  }
}
export default AboutPage

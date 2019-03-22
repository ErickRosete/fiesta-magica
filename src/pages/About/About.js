import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Layout from "../../components/Layout/Layout";

// npm i google-map-react -s
import GoogleMapReact from 'google-map-react';

import "./About.css"

// import Form from 'react-bootstrap/Form';
// import Form from 'react-bootstrap/Form'

// import PropTypes from 'prop-types'
// import { withStyles } from "@material-ui/core/styles";
const AnyReactComponent = ({ text }) => <div style={{backgroundColor:"#191c51",width: 62, height: 60,color:"white",display: 'flex', justifyContent: 'center', alignItems: 'center',}}>{text}</div>;

const key = "AIzaSyC0OyV5AleQHaNYkrwPC8q2DegYgSagb5E";
const placesScript = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=initMap`
export class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptLoaded: false,
            center: [32.6614358, -115.48000560000003],
            zoom: 15,
            greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
        };
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
                                        text="Ubicación"
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

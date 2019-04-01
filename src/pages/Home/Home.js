import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"

import { Helmet } from "react-helmet";

import Layout from "../../components/Layout/Layout";
import CSSTransition from "react-transition-group/CSSTransition";


import "./Home.css";

import foto2 from "../../Assets/Images/Home/foto2.png"
import populares1 from "../../Assets/Images/Home/populares1.png"
import populares2 from "../../Assets/Images/Home/populares2.png"
import populares3 from "../../Assets/Images/Home/populares3.png"
import globos from "../../Assets/Images/Home/globos.png"

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.popularesRef = React.createRef();
    this.state = {
      aboutAnimations: false,
      popularesAnimations: false
    };
  }

  componentDidMount() {
    if (window.screen.width >= 768) {
      window.addEventListener("scroll", this.scrollHandlerAbout);
      window.addEventListener("scroll", this.scrollHandlerPopulares);
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollHandlerPopulares);
    window.removeEventListener("scroll", this.scrollHandlerPopulares);
  };

  scrollHandlerAbout = () => {
    const scrollOnAbout = window.scrollY > this.aboutRef.current.clientHeight - 100 &&
      window.scrollY < this.popularesRef.current.clientHeight + 300;
    if (scrollOnAbout) {
      this.setState({
        aboutAnimations: true
      })
    } else {
      this.setState({
        aboutAnimations: false
      })
    }
    console.log("scroll in " + this.state.aboutAnimations + "-" + window.scrollY + ":" + this.aboutRef.current.clientHeight + ":" + this.popularesRef.current.clientHeight);
  }

  scrollHandlerPopulares = () => {
    const scrollOnAbout = window.scrollY < this.popularesRef.current.clientHeight - 90;
    this.setState({
      popularesAnimations: true
    })
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

        <div className="home">
          <Container fluid>
            <Row className="banner-fiestas">
              <Col sm={5} className="banner-fiestas-container py-5">
                <h1 className='mb-3'>Todo para tus <div className='fiestas-header'> fiestas </div>
                </h1>
                <Button variant="outline-light" className="mt-3"> Ver catálogo </Button>
              </Col>
            </Row>
            <div ref={this.aboutRef}>
              <Row >
                <Col xs={12} md={6} className="p-0 bg-white">
                  <img className="hidden img-fluid" src={foto2} alt="foto-2"></img>
                  <CSSTransition
                    in={this.state.aboutAnimations}
                    appear={false}
                    timeout={1000}
                    classNames="slideLeft"
                  >
                    <img className="img-fluid absolute" src={foto2} alt="foto-2"></img>
                  </CSSTransition>
                </Col>
                <Col xs={12} md={6} className="bg-white">
                  <div className=" pl-3 pr-3 py-4 quienes-somos">
                    <h2 className="mb-3"> ¿Quienes Somos?</h2>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum
                      </span>
                    <Button variant="outline-dark" className="mt-3 btn-custom-block"> Conoce más </Button>
                  </div>
                </Col>
              </Row>
            </div>
            <div ref={this.popularesRef}>
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
            </div>
            <Row>
              <div className="personal-banner">
                <h1>¡Personaliza tu fiesta! </h1>
                <h2>Agrega ese toque especial</h2>
                <Button variant="outline-light" className="mt-3"> Ver catálogo </Button>
              </div>
            </Row>

            <Row className="pt-3">
              <Col xs={3} md={4} className="interesa_globos">
                <img className="img-fluid" src={globos} alt="globos"></img></Col>
              <Col xs={6} md={4} className="px-0">
                <div className="interesa_container">
                  <h2>¿Te interesa?</h2>
                  <Button variant="outline-dark"> Solicitar presupuesto </Button>
                </div>
              </Col>
              <Col xs={3} md={4} className="interesa_globos">
                <img className="img-fluid" src={globos} alt="blogos"></img>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>);

  }
}
export default HomePage;

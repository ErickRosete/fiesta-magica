import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"

import { Helmet } from "react-helmet";

import Layout from "../../components/Layout/Layout";
import CSSTransition from "react-transition-group/CSSTransition";


import "./Home.css";
import foto2 from "../../Assets/Images/Home/foto2.png"
import globos from "../../Assets/Images/Home/globos.png"
import Populares from "../../components/Home/Populares"

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.popularesRef = React.createRef();
    this.state = {
      aboutAnimations: false,
      popularesTransition: [false, false, false, false]
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollHandler);
  };

  scrollHandler = () => {
    const scrollOnAbout = window.scrollY > this.aboutRef.current.clientHeight;
    if (scrollOnAbout) {
      this.setState({
        aboutAnimations: true
      })
    }
    const scrollOn = window.scrollY > this.popularesRef.current.clientHeight;
    if (scrollOn && !this.state.popularesTransition[0]) {
      this.popularesAnimation();
    }
    console.log("scroll in " + scrollOn + "-" + window.scrollY + ":" + this.aboutRef.current.clientHeight + ":" + this.popularesRef.current.clientHeight);
  }


  popularesAnimation = () => {
    const popularesTransition = [...this.state.popularesTransition]
    for (let i = 0; i < popularesTransition.length; i++) {
      setTimeout(
        () => {
          popularesTransition[i] = true;
          this.setState({ popularesTransition })
        },
        1000 * i);
      console.log()
    }
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
                  <CSSTransition
                    in={this.state.aboutAnimations}
                    timeout={1000}
                    classNames="slideLeft"
                  >
                    <img className="img-fluid opacity-0" src={foto2} alt="foto-2"></img>
                  </CSSTransition>
                </Col>

                <Col xs={12} md={6} className="bg-white overflow-hidden">
                  <CSSTransition
                    in={this.state.aboutAnimations}
                    timeout={1000}
                    classNames="slideRight"
                  >
                    <div className=" pl-3 pr-3 py-4 quienes-somos opacity-0">
                      <h2 className="mb-3"> ¿Quienes Somos?</h2>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum
                      </span>
                      <Button variant="outline-dark" className="mt-3 btn-custom-block"> Conoce más </Button>
                    </div>
                  </CSSTransition>
                </Col>
              </Row>
            </div>

            <div ref={this.popularesRef}>
              <Populares transition={this.state.popularesTransition}></Populares>
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

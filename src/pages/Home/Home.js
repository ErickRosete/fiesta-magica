import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"

import { Helmet } from "react-helmet";

import Layout from "../../components/Layout/Layout";
import CSSTransition from "react-transition-group/CSSTransition";


import "./Home.css";
import foto2 from "../../Assets/Images/Home/foto2.png"
import globos from "../../Assets/Images/Home/globos.png"
import Populares from "../../components/Home/Populares"
import { withApollo  } from "react-apollo";
import { GET_PRODUCTS } from "./constants";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.popularesRef = React.createRef();
    this.state = {
      aboutAnimations: false,
      popularesTransition: [false, false, false, false],
      filteredProducts:[""]
    };
  }

  getProducts=()=>{
    console.log("starting query")
    // const id= this.props.match.params.id
    // console.log(this.props.client)
    console.log(GET_PRODUCTS)
    this.props.client
      .query({
        query: GET_PRODUCTS,
      })
      .then(data => {
          console.log("===productos")
          console.log(data.data.products)
          const filtrados=data.data.products.filter((producto)=>{
            return producto.popular
          })
          console.log("===populares")
          console.log(filtrados)
          console.log(filtrados.slice(0,3))
          this.setState({
            filteredProducts:filtrados.slice(0,3)
          })
        // this.setState({
        //     filteredProducts:data.data.products,
        //     products:data.data.products
        // })
        // this.setState({
        //   id:data.data.user._id
        // })
      })
      .catch(error => {
        console.log("error")
        console.log(error)
        if(error.graphQLErrors.length>0)
        console.log(`error: ${error.graphQLErrors[0].message}`)
        this.setState({
          error:true
        })
    });
  }

  componentDidMount() {
    this.getProducts();
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
    }
  }
  
  handleClick=(url)=>{
    console.log(url)
    this.props.history.push(url);
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
                <Button variant="outline-light" className="mt-3" onClick={this.handleClick.bind(this,"/catalogo")}> Ver catálogo </Button>
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
                      Fiesta Mágica busca ofrecer la mejor experiencia de entretenimiento de niñ@s a través de servicios de la mas alta calidad, organizando fiestas y eventos sociales que todos los invitados recuerden como un día de diversión inolvidable.
                      </span>
                      <Button variant="outline-dark" className="mt-3 btn-custom-block" onClick={this.handleClick.bind(this,"/nosotros")}> Conoce más </Button>
                    </div>
                  </CSSTransition>
                </Col>
              </Row>
            </div>

            <div ref={this.popularesRef}>
              <Populares transition={this.state.popularesTransition} products={this.state.filteredProducts}></Populares>
            </div>

            <Row>
              <div className="personal-banner">
                <h1>¡Personaliza tu fiesta! </h1>
                <h2>Agrega ese toque especial</h2>
                <Button variant="outline-light" className="mt-3" onClick={this.handleClick.bind(this,"/catalogo")}> Ver catálogo </Button>
              </div>
            </Row>

            <Row className="pt-3">
              <Col xs={3} md={4} className="interesa_globos">
                <img className="img-fluid" src={globos} alt="globos"></img></Col>
              <Col xs={6} md={4} className="px-0">
                <div className="interesa_container">
                  <h2>¿Te interesa?</h2>
                  <Button variant="outline-dark" onClick={this.handleClick.bind(this,"/contacto")}> Solicitar presupuesto </Button>
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
export default withApollo(HomePage);

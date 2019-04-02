import React from 'react'
import { Col, Row } from "react-bootstrap"
import "./Populares.css";
import CSSTransition from "react-transition-group/CSSTransition";

import populares1 from "../../Assets/Images/Home/populares1.png"
import populares2 from "../../Assets/Images/Home/populares2.png"
import populares3 from "../../Assets/Images/Home/populares3.png"

const Populares = (props) => {
    return (
        <Row className="populares-container">
            <CSSTransition in={props.transition[0]} timeout={400} classNames="fade" >
                <h2 className="opacity-0">Populares</h2>
            </CSSTransition>
            <Col xs={12}>
                <Row>
                    <CSSTransition in={props.transition[1]} timeout={400} classNames="fade" >
                        <Col xs={12} md={4} className="opacity-0">
                            <img className="img-fluid" src={populares1} alt="brincolinas"></img>
                            <h3>Brincolinas</h3>
                        </Col>
                    </CSSTransition>
                    <CSSTransition in={props.transition[2]} timeout={400} classNames="fade" >
                        <Col xs={12} md={4} className="opacity-0">
                            <img className="img-fluid" src={populares2} alt="decoraciones"></img>
                            <h3>Decoraciones</h3>
                        </Col>
                    </CSSTransition>
                    <CSSTransition in={props.transition[3]} timeout={400} classNames="fade" >
                        <Col xs={12} md={4} className="opacity-0">
                            <img className="img-fluid" src={populares3} alt="manteles"></img>
                            <h3> Manteles</h3>
                        </Col>
                    </CSSTransition>

                </Row>
            </Col>
        </Row>
    );
}

export default Populares;
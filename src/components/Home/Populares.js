import React from 'react'
import { Col, Row } from "react-bootstrap"
import "./Populares.css";
import CSSTransition from "react-transition-group/CSSTransition";

import populares1 from "../../Assets/Images/Home/populares1.png"
import populares2 from "../../Assets/Images/Home/populares2.png"
import populares3 from "../../Assets/Images/Home/populares3.png"
var classNames = require('classnames');
var circularImage = classNames('img-fluid','circular');


const Populares = (props) => {
    console.log(props.products)
    return (
        props.products[0]!=="" && 
        <Row className="populares-container">
            <CSSTransition in={props.transition[0]} timeout={400} classNames="fade" >
                <h2 className="animation-object">Populares</h2>
            </CSSTransition>
            <Col xs={12}>
                <Row>
                    <CSSTransition in={props.transition[1]} timeout={400} classNames="fade" >
                        <Col xs={12} md={4} className="animation-object">
                            <img className={circularImage} src={props.products[0].imageLinks[0]} alt="brincolinas"></img>
                            <h3>{props.products[0].name}</h3>
                        </Col>
                    </CSSTransition>
                    <CSSTransition in={props.transition[2]} timeout={400} classNames="fade" >
                        <Col xs={12} md={4} className="animation-object">
                            <img className={circularImage} src={props.products[1].imageLinks[0]} alt="decoraciones"></img>
                            <h3>{props.products[1].name}</h3>
                        </Col>
                    </CSSTransition>
                    <CSSTransition in={props.transition[3]} timeout={400} classNames="fade" >
                        <Col xs={12} md={4} className="animation-object">
                            <img className={circularImage} src={props.products[2].imageLinks[0]} alt="manteles"></img>
                            <h3>{props.products[2].name}</h3>
                        </Col>
                    </CSSTransition>

                </Row>
            </Col>
        </Row>
        
    );
}

export default Populares;
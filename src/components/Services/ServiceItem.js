import React from 'react'
import { Col, Row } from "react-bootstrap"
import "./ServiceItem.css";
import placeholder from "../../Assets/Images/Home/foto2.png"

const ServiceItem = (props) => {
    const img = props.img ? props.img : placeholder;
    const title = props.title ? props.title : "";
    const desc = props.desc ? props.desc : "";

    return (
        <Row className="service">
            <Col className="bg-pink txt-white p-0" sm={4} xs={12}>
                <img src={img} alt="FOTO" className="serviceImage" ></img>
            </Col>
            <Col className="bg-light-pink txt-white" sm={8} xs={12}>
                <div className="services_list-content">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </Col>
        </Row>
    );
}

export default ServiceItem;
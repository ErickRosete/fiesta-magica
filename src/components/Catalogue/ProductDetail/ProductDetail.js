import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./ProductDetail.css"
import classNames from 'classnames';

const placeholder="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now"

const rowClass = classNames(
    'adicional-container',
    'justify-content-center'
);
const colClass = classNames(
    'adicional-element-container'
);
export class ProductDetail extends Component {
    imageLink;
    constructor(props) {
        super(props);
        this.state = {
        };
        props.img.includes("https") || props.img.includes("http")?this.imageLink=props.img:this.imageLink=placeholder;
        console.log(`selected image: ${props.img}`)
        console.log(`selected name: ${props.name}`)
        console.log(`selected description: ${props.desc}`)
    }
    render() {
        return (
            <div>
                <Row style={{marginBottom:"1rem"}}>
                    <Col md="4">
                        <Image className="imageClass2"  src={this.imageLink}></Image>
                    </Col>
                    <Col md="8">
                        <p className="title">
                            {this.props.name}
                        </p>
                        <p className="title">
                            Descripcion:
                        </p>
                        <p className="content">
                            {this.props.desc}
                        </p>
                    </Col>
                </Row>
                <Row className={rowClass}>
                    <div className={colClass}>
                        <span className="adicional">Alto</span><span className="secSpec">10cm</span>
                    </div>
                    <div className={colClass}>
                        <span className="adicional">Ancho</span><span className="secSpec">20cm</span>
                    </div>
                    <div className={colClass}>
                        <span className="adicional">Largo</span><span className="secSpec">30cm</span>
                    </div>
                </Row>
            </div>
        )
    }
}
export default ProductDetail

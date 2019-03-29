import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./Card.css"
import classNames from 'classnames';


// https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now 
// https://placeholder.com/
// https://snowball.digital/blog/responsive-images-in-react-with-srcset
const placeholder="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now"
// const small = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg';
// const medium = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_768.jpg';
// const large = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_1280.jpg';
// const xlarge = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_3200.jpg';
/* <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} onLoad={this.onLoad} /> */
/* <img src={small} srcSet={`${small} 300w`}onLoad={this.onLoad} /> */

/* <img className="img-fluid"src="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg"></img> */
/* <Image FLUID src="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg"></Image> */

const textClass = classNames(
    'descripcion',
    'justify-content-center'
);

const imageClass=classNames(
    "cardImage",
    "imageClass"
)
export class Card extends Component {
    imageLink;
    constructor(props) {
        super(props);
        this.state = {
            bloque:textClass,
            animate:false
        };
        props.img.includes("https") || props.img.includes("http")?this.imageLink=props.img:this.imageLink=placeholder;
        console.log(`indice: ${props.id}`)
    }

    render() {
        // https://medium.freecodecamp.org/deliberate-practice-what-i-learned-from-reading-classnames-f9b89cb785e4
        // https://react-bootstrap.github.io/layout/grid/
        return (
            <Col md="4" xs="6" className="tarjeta">
                <div className="card" style={{position:"relative"}}>
                        <Row noGutters className="imageContainer" onClick={this.props.clickHandler.bind(this, this.props.id)}>
                            <Image className={imageClass}  src={this.imageLink}></Image>
                        </Row>
                        <Row noGutters className={this.state.bloque} style={{position:"absolute",bottom:"0",width:"100%"}}>
                            <p className="mb-0">{this.props.description}</p>
                        </Row>
                </div>
            </Col>
        )
    }
}
export default Card

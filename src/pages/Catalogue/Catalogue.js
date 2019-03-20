import React, { Component } from 'react'
import Layout from "../../components/Layout/Layout";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from "../../components/Catalogue/Card/Card";
import "./Catalogue.css";
// npm i react-apollo -s
import { withApollo  } from "react-apollo";
import { GET_PRODUCTS,GET_CATEGORIES } from "./constants";
// import Modal from '@material-ui/core/Modal';
import Modal from 'react-bootstrap/Modal'

import ProductDetail from "../../components/Catalogue/ProductDetail/ProductDetail";


// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');


const small = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg';

export class CataloguePage extends Component {
    getCategories=()=>{
         //==============categories
         this.props.client
         .query({
           query: GET_CATEGORIES,
         })
         .then(data => {
            console.log("correcto")
           console.log(data.data.subcategories)
           this.setState({
               categories:data.data.subcategories
           })
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
              console.log("correcto")
            console.log(data.data.products)
            this.setState({
                products:data.data.products
            })
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

    componentDidMount(){
        this.getProducts();
        this.getCategories();
    }
   
    closeModal = () => this.setState({ modal: false });

    constructor(props) {
        super(props);
        this.state = { 
            currentSrc: '',
            products:[""],
            categories:[""],
            modal: false,
            selectedImage:"nothing",
            selectedName:"nombrecito",
            selectedDescription:"descripcioncita"
        };
    }
   
    onLoad = (event) => {
        this.setState({
        currentSrc: event.target.currentSrc
        });
    }
    
    json=[
        {
            img:"stuff",description:"descripcion1",id:"1"
        },
        {
            img:"stuff2",description:"descripcion2",id:"2"
        },
        {
            img:"stuff3",description:"descripcion3",id:"3"
        },
        {
            img:small,description:"descripcion2",id:"4"
        }
    ];
    
    json2=[{txt:"Decoraciones",id:"1"},{txt:"Brincolinas",id:"2"},{txt:"Trampolines",id:"3"},{txt:"Juegos",id:"4"},
    {txt:"Rockolas",id:"5"},{txt:"Globoflexia",id:"6"},{txt:"Carpas y lonas",id:"7"},{txt:"Mesas y sillas",id:"8"}]
    clickHandler=(index,event)=>{
        // console.log(index)
        // console.log(event.target)
        // console.log(event)
        console.log("youclickedme")
        console.log(this.state.products[index])
        const json3={
            selectedDescription:this.state.products[index].shortDescription,
            selectedImage:this.state.products[index].imageLinks[0],
            selectedName:this.state.products[index].name
        }
        this.setState({modal:true,...json3})
        console.log(json3)
        // this.setState({modal:true})
    }
    render() {
        return (
            <Layout>
                <div className="papa" style={{marginTop:"2rem"}}>
                    <div className="hijo">Catálogo</div>
                </div>
                
                <Modal
                    dialogClassName="modal-special"
                    show={this.state.modal}
                    onHide={this.closeModal}
                    aria-labelledby="example-modal-sizes-title-lg"
                    >
                    {/* <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                        </Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <ProductDetail 
                            img={this.state.selectedImage}
                            name={this.state.selectedName}
                            desc={this.state.selectedDescription}
                            centered
                        />
                    </Modal.Body>
                </Modal>
                
                <Row style={{margin:"0",padding:"1rem",paddingLeft:"4rem",paddingRight:"4rem"}}>
                    {this.state.categories[0]!=="" && this.state.categories.map((element)=>{
                        return(
                            <Col xs="3" style={{marginBottom:"1rem"}} key={element._id}>
                                <Button variant="outline-primary" className="catalogueButton" block>{element.name}</Button>
                            </Col>                        
                        )
                    })}
                </Row>
               
                <Row className="renglon">
                    {this.state.products[0]!=="" && this.state.products.map((element,index)=>{
                        return(
                            <Card 
                                img={element.imageLinks[0]} 
                                description={element.name} 
                                clickHandler={this.clickHandler}
                                key={element._id}
                                id={index}>
                            </Card>
                        )
                    })}
                </Row>
                <div className="papa2" >
                    <div className="hijo2">Solicita más información</div>
                    <Button className="especial"variant="outline-dark" size="lg">Enviar Mensaje</Button>
                </div>
            
            </Layout>
        )
    }
}
//height:100% width 100%
export default withApollo(CataloguePage)

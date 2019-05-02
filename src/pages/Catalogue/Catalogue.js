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

//npm i react-transition-group --s 
import CSSTransition from "react-transition-group/CSSTransition";
const placeholder="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now"

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
                filteredProducts:data.data.products,
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
        setTimeout(() => {
            this.setState({animate:true})
        }, 1000);
    }
   
    closeModal = () => this.setState({ modal: false });

    constructor(props) {
        super(props);
        this.state = { 
            currentSrc: '',
            products:[""],
            filteredProducts:[""],
            categories:[""],
            modal: false,
            selectedImage:"nothing",
            selectedName:"nombrecito",
            selectedDescription:"descripcioncita",
            selectedHeight:-1,
            selectedWidth:-1,
            selectedLong:-1,
            animate:false
        };
    }
   
    getFinal=(image,serverPath)=>{
        let imagePath;
        let finalPath;
        if(image !==undefined){
            if(image.split("http://localhost:5000/")[1] !==undefined)
            {
                imagePath=image.split("http://localhost:5000/")[1] 
                finalPath=serverPath+imagePath;
            }
            else if(image.split("https")[1]!==undefined){
                finalPath=image;
            }
            else{
                //no empieza con localhost la imagen guardada
                finalPath=small;

            }         
        }
        else{
            finalPath=small;
        }
        return finalPath
    }

    handleClick=(url)=>{
        console.log(url)
        this.props.history.push(url);
      }

      
    onLoad = (event) => {
        this.setState({
        currentSrc: event.target.currentSrc
        });
    }
    
    CatalogueClick=(event)=>{
        console.log("clickeaste una categoria")
        // console.log(event.target)
        // console.log(typeof(event.target))
        // event.target.className="    ed"
        console.log()
        if(event.target.classList.contains("activado")){
            this.setState({
                filteredProducts:this.state.products
            })
            event.target.classList.remove("activado")
        }
        else{
            const botones=document.querySelectorAll(".catalogueButton")
            botones.forEach((boton)=>{
                boton.classList.remove("activado")
            })
            console.log(event.target.classList)
            console.log( typeof(event.target.classList))
            event.target.classList.add("activado")
            const selectedCat=event.target.innerHTML
            console.log(`categoria seleccionada ${selectedCat}`)
            console.log("===productos")
            console.log(this.state.products)
            const filteredProducts=[]
            this.state.products.forEach((product)=>{
                // console.log(product.subcategories)
                let encontre=false;
                for(let subcategory of product.subcategories){
                    // console.log(subcategory.name)
                    encontre=subcategory.name===selectedCat?true:false
                    // console.log(`encontre ${encontre}`)
                    if(encontre){
                        filteredProducts.push(product)
                        break;
                    }
                }
            })
            console.log(filteredProducts)
            this.setState({filteredProducts})
        }
        // const filtrados=this.state.products.filter((product)=>{
        //     return product.subcategories.include(event.target.innerHTML);
            
        // })
        // console.log(filtrados)
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
    
    clickHandler=(id,event)=>{
        console.log("debuggint")
        console.log(event.target)
        console.log(id)
        let products=this.state.products;
        console.log(products)
        var found = products.find(function(element) {
            return element._id== id;
        });
        console.log("clicked product")
        console.log(found)
        const serverPath="https://fiesta-magica-consola.herokuapp.com/"
        const finalPath=this.getFinal(found.imageLinks[0],serverPath);
        const json3={
            selectedDescription:found.shortDescription,
            selectedImage:finalPath,
            selectedName:found.name,
            selectedHeight:found.height,
            selectedWidth:found.width,
            selectedLong:found.long
        }
        this.setState({modal:true,...json3})
        console.log(json3)
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
  
                    <Modal.Body>
                        <ProductDetail 
                            img={this.state.selectedImage}
                            name={this.state.selectedName}
                            desc={this.state.selectedDescription}
                            height={this.state.selectedHeight}
                            width={this.state.selectedWidth}
                            long={this.state.selectedLong}

                            centered
                        />
                    </Modal.Body>
                </Modal>
                
                <Row className="catalogueContainer" >
                    {this.state.categories[0]!=="" && this.state.categories.map((element)=>{
                        return(
                            <Col xs="6" sm="3" style={{marginBottom:"1rem"}} key={element._id}>
                                <Button variant="outline-primary" className="catalogueButton" block onClick={this.CatalogueClick}>{element.name}</Button>
                            </Col>                        
                        )
                    })}
                </Row>
               
                <Row className="renglon">
                    {/* <CSSTransition in={this.state.animate} timeout={500} classNames="detail"   key={1} >
                        <Card 
                            img={placeholder} 
                            description={"descripcion"} 
                            clickHandler={this.clickHandler}
                            >
                        </Card>
                    </CSSTransition> */}
                    {this.state.filteredProducts[0]!=="" && this.state.filteredProducts.map((element,index)=>{
                        const serverPath="https://fiesta-magica-consola.herokuapp.com/"
                        const finalPath=this.getFinal(element.imageLinks[0],serverPath);
                        // console.log(finalPath)
                        return(
                            <Card 
                                img={finalPath} 
                                description={element.name} 
                                clickHandler={this.clickHandler}
                                key={element._id}
                                id={element._id}>
                            </Card>
                        )
                    })}
                </Row>
                <div className="papa2" >
                    <div className="hijo2">Solicita más información</div>
                    <Button className="especial"variant="outline-dark" size="lg" onClick={this.handleClick.bind(this,"/contacto")}>Enviar Mensaje</Button>
                </div>
            
            </Layout>
        )
    }
}
//height:100% width 100%
export default withApollo(CataloguePage)

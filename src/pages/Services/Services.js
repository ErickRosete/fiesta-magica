import React, { Component } from "react";
import {  Button } from "react-bootstrap"

import { Helmet } from "react-helmet";

import Layout from "../../components/Layout/Layout";

import "./Services.css";
import { withApollo  } from "react-apollo";
import { GET_SERVICES } from "./constants";
import ServiceItem from '../../components/Services/ServiceItem'
// import placeholder from "../../Assets/Images/Home/foto2.png"

//npm i react-transition-group --s 
import CSSTransition from "react-transition-group/CSSTransition";

const small = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg';

export class ServicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            services:[""],
            serviceTransition:[false]
        };

    }
    
    getServices=()=>{
        console.log("starting query")
        // console.log(GET_SERVICES)
        this.props.client
          .query({
            query: GET_SERVICES,
          })
          .then(data => {
              console.log(data.data.services)
              let serviceTransition=[]
              for(let i=0;i<data.data.services.length;i++){
                serviceTransition.push(false);
              }
              console.log(serviceTransition)
                this.setState({
                    services:data.data.services,
                    serviceTransition
                })
                this.servicesAnimation();

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

    servicesAnimation=()=>{
        const serviceTransition=[...this.state.serviceTransition];
        for(let i=0;i<this.state.serviceTransition.length;i++){
            setTimeout(() => {
                serviceTransition[i]=true;
                console.log(serviceTransition)
                this.setState({
                    serviceTransition
                })
            }, 500*i);
        }
    }

    componentDidMount(){
        this.getServices();
    }

    handleClick=(url)=>{
        console.log(url)
        this.props.history.push(url);
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

                <div className="services_list">
                    <h2>Servicios </h2>
                    <div style={{padding:"0 5vw"}}>
                        {this.state.services[0]!=="" && this.state.services.map((element,index)=>{
                            // const serverPath="https://fiesta-magica-consola.herokuapp.com/"
                            const serverPath=process.env.REACT_APP_SERVER_URL+"/"
                            // const imagePath=element.imageLinks[0].split("http://localhost:5000/")[1];
                            // const path=serverPath+imagePath;
                            const finalPath=this.getFinal(element.imageLinks[0],serverPath);

                            // console.log(index)
                            // console.log(path)
                            return(
                                <CSSTransition in={this.state.serviceTransition[index]} timeout={500} classNames="fade"   key={element._id} >
                                    <ServiceItem
                                        img={finalPath}
                                        title={element.name}
                                        desc={element.shortDescription}
                                    />
                                </CSSTransition>
                            )
                        })}
                    </div>
                </div>

                <div className="info_request">
                    <h2> Solicita más información</h2>
                    <Button variant="outline-dark" onClick={this.handleClick.bind(this,"/contacto")}> Enviar mensaje </Button>
                </div>
            </Layout>
        );
    }
}
export default withApollo(ServicesPage);
// https://www.atayan.viajes/
// https://stackoverflow.com/questions/52687229/font-awesome-5-use-social-brand-icons-in-react
// https://github.com/FortAwesome/react-fontawesome
import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer/Footer"
import "./Layout.css";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const whatsUrl="https://wa.me/15551234567?text=Iam%20interested%20"
const whatsUrlButton=`javascript:window.open('${whatsUrl}', 'yourWindowName', 'width=700,height=600,top=200, left=460');`
const mimetodo=()=>{
  window.open(whatsUrl, 'yourWindowName', 'width=700,height=600,top=200, left=460')
}

const Layout = props => {
  return (
    <React.Fragment>
      <MainNavigation navbarColor={props.navbarColor} />
      <main className="main-content">{props.children}</main>
      {/* <a href="https://api.whatsapp.com/send?phone=6862124736&text=mensaje">Contactame</a> */}
      {/* <a href="https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale">contact</a> */}
      {/* <a href={whatsUrlButton}>Test</a> */}
      <Button variant="success" className="contactWhats" onClick={mimetodo}>
          WhatsApp <FontAwesomeIcon icon={['fab', 'whatsapp']}  size="1x"/>
      </Button>
      {/* <FontAwesomeIcon className="marcadormagico"  icon="whatsapp-square" size="5x" /> */}

      <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;

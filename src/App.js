import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChevronLeft,
  faMapMarkerAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import "./App.css";

import HomePage from "./pages/Home/Home"

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URL}/graphql`
});

class App extends Component {
  render() {
    // console.log(process.env.REACT_APP_SERVER_URL);
    library.add([
      faFacebook,
      faLinkedin,
      faSearch,
      faHome,
      faChevronLeft,
      faMapMarkerAlt
    ]);

    return (
      <BrowserRouter>
        <ScrollToTop>
          <ApolloProvider client={client}>
            <Switch>
              <Route path="/inicio" component={HomePage} />
              <Redirect to="/inicio" />
            </Switch>
          </ApolloProvider>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;

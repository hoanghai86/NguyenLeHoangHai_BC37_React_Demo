import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Item from "./Item";
import Footer from "./Footer";

import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Banner />
          <Item />
        </div>

        <Footer />
      </div>
    );
  }
}

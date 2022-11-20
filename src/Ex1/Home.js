import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import './Home.css'
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;

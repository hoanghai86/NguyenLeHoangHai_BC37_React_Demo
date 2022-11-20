import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <a href="#" className="logo">
            Start Boostrap
          </a>
          <nav className="navbar">
            <a href="#" className="active">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    );
  }
}

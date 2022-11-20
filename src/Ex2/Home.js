import React, { Component } from "react";
import Blackcar from "../assets/img/black-car.jpg";
import Redcar from "../assets/img/red-car.jpg";
import Silvercar from "../assets/img/silver-car.jpg";
import Steelcar from "../assets/img/steel-car.jpg";

class Home extends Component {
  state = {
    carImage: Blackcar,
  };

  handleChangeColor = (img) => {
    this.setState({
      carImage: img,
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.carImage} style={{ width: 500 }} />
        <h2>Pick Color</h2>
        <button onClick={()=>{this.handleChangeColor(Blackcar)}}>Black</button>
        <button onClick={()=>{this.handleChangeColor(Redcar)}}>Red</button>
        <button onClick={()=>{this.handleChangeColor(Silvercar)}}>Silver</button>
        <button onClick={()=>{this.handleChangeColor(Steelcar)}}>Steel</button>
      </div>
    );
  }
}

export default Home;

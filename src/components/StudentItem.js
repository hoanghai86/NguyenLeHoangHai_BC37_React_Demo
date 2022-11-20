import React, { Component } from 'react'

export default class StudentItem extends Component {
  render() {
    // console.log(this.props.name, this.props.age);
    return (
      <div style={{backgroundColor: "yellow"}}>
        <h1>Student Item</h1>
        <h4>Name: {this.props.name}</h4>
        <h4>Age: {this.props.age}</h4>
      </div>
    )
  }
}

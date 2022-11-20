import React, { Component } from "react";
import "./Model.css";
import { connect } from "react-redux";

class Model extends Component {
  render() {
    console.log(
      "kiểm tra xem component Model nhận props từ store chưa: ",
      this.props
    );
    const { model } = this.props;
    return (
      <div
        className="contain"
        style={{
          backgroundImage: `url(${model.background})`,
        }}
      >
        <div
          className="body"
          style={{ backgroundImage: "url(images/allbody/bodynew.png)" }}
        />
        <div
          className="model"
          style={{ backgroundImage: "url(images/model/1000new.png)" }}
        />
        <div
          className="bikinitop"
          style={{ backgroundImage: "url(images/allbody/bikini_branew.png)" }}
        />
        <div
          className="bikinitop top-cloth"
          style={{ backgroundImage: `url(${model.topclothes})` }}
        />
        <div
          className="bikinibottom"
          style={{
            backgroundImage: "url(images/allbody/bikini_pantsnew.png)",
          }}
        />
        <div
          className="bikinibottom bot-cloth"
          style={{ backgroundImage: `url(${model.botclothes})` }}
        />
        <div
          className="feetleft"
          style={{
            backgroundImage: "url(images/allbody/feet_high_leftnew.png)",
          }}
        />
        <div
          className="feetright"
          style={{
            backgroundImage: "url(images/allbody/feet_high_rightnew.png)",
          }}
        />
        <div
          className="shoes"
          style={{ backgroundImage: `url(${model.shoes})` }}
        />
        <div
          className="hairstyle"
          style={{ backgroundImage: `url(${model.hairstyle})` }}
        />
        <div
          className="necklace"
          style={{ backgroundImage: `url(${model.necklaces})` }}
        />
        <div
          className="handbag"
          style={{ backgroundImage: `url(${model.handbags})` }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    model: state.model.models,
  };
};

export default connect(mapStateToProps)(Model);

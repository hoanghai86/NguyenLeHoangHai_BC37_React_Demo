import React, { Component } from "react";
import { connect } from "react-redux";
import "./Model.css";

class Model extends Component {
  render() {
    //khai báo biến model để hứng dữ liệu từ store
    const {model} = this.props;

    return (
      //không thể xử lý link ảnh trong css nên phải để inline ngoài component
      <div
        className="contain"
        style={{ backgroundImage: `url(${model.background})` }}
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
          style={{ backgroundImage: "url(images/allbody/bikini_pantsnew.png)" }}
        />
        <div
          className="bikinitop bot-cloth"
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
          className="handbag"
          style={{ backgroundImage: `url(${model.handbags})` }}
        />
        <div
          className="necklace"
          style={{ backgroundImage: `url(${model.necklaces})` }}
        />
      </div>
    );
  }
}

//lấy dữ liệu từ trên store xuống để component xài
const mapStateToProps = (state) => {
  return {
    model: state.model.model,
  };
};

export default connect(mapStateToProps)(Model);

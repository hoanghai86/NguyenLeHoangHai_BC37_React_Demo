import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    //bóc tách 2 lần
    const {
      item: { imgSrc_jpg, name, type, imgSrc_png },
      handleModel,
    } = this.props;
    // const { imgSrc_jpg, name } = this.props.item;
    return (
      <div className="card p-2 mb-4">
        <img alt="" src={imgSrc_jpg} />
        <h3>{name}</h3>
        <button
          className="btn btn-info"
          onClick={() => {
            handleModel(type, imgSrc_png);
          }}
        >
          Mặc thử
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleModel: (type, value) => {
      dispatch({
        type: "CHANGE_MODEL",
        //thay đổi thuộc tính và giá trị của models trên store
        payload: {
          properties: type,
          value,
        },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);

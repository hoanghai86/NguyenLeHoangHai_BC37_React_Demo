import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    const {
      handleModel,
      item: { imgSrc_jpg, name, type, imgSrc_png },
    } = this.props;
    // const {imgSrc_jpg, name} = this.props.item;
    return (
      <div className="card p-2 mb-4">
        <img alt="" src={imgSrc_jpg} />
        <h3>{name}</h3>
        <button
          className="btn btn-primary"
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
        payload: {
          //object literal (có thể ghi type: type thành type không cũng được, ES6 vẫn hiểu)
          type,
          value,
        },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);

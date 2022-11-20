import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./chair.css";

class Chair extends Component {
  render() {
    const { item, chairSelectedList, handleChair } = this.props;
    return (
      <div>
        <button
          className={clsx("chair", {
            booked: item.daDat, //nếu daDat bằng true thì thêm class booked

            //hàm find: nếu có thì trả về item thỏa mãn điều kiện, ngược lại trả về undefined
            booking: chairSelectedList.find((ele) => ele.soGhe === item.soGhe),
          })}
          disabled={item.daDat}
          onClick={() => {handleChair(item)}}
        >
          {item.soGhe}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChair: (chair) => {
      dispatch({
        type: "CHANGE_CHAIR",
        payload: chair,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chair);

//falsy: undefined, null, NAN, 0, '', false, document.all

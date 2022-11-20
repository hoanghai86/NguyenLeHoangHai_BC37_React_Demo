import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux"; //cung cấp lệnh để kết nối react với store

class Category extends Component {
  render() {
    console.log(this.props.categoryList);
    //destructuring (bóc tách phần tử)
    const { categoryList, handleSelectedTab, selectedTab } = this.props;
    return (
      <div className="btn-group d-flex justify-content-center">
        {categoryList.map((item) => {
          return (
            //active tab category khi click
            <button
              key={item.tabName}
              className={clsx("btn btn-secondary", {
                "btn-danger": selectedTab === item.type,
              })}
              onClick={() => {
                handleSelectedTab(item.type);
              }}
            >
              {item.showName}
            </button>
          );
        })}
      </div>
    );
  }
}

//lấy dữ liệu từ trên store xuống để component xài
const mapStateToProps = (state) => {
  return {
    //key: value
    //key là tên prop của component
    //value là dữ liệu lấy từ store
    categoryList: state.category.categories,
    selectedTab: state.product.selectedTab,
  };
};

//đẩy action lên store, hàm lọc loại sản phẩm theo TAB (áo, quần...)
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedTab: (type) => {
      //đẩy lên trên store 1  object có 2 thuộc tính
      dispatch({
        type: "CHANGE_TAB",
        payload: type,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

//cái hàm connect sẽ kết nối dữ liệu lên state, gọi hàm mapStateToProps chạy
//connect(state) --> mapStateToProps(state) --> return về categoryList, lúc này trong component con sẽ có cái props

// connect() => {function(Category) => <Component> <Category></Category></Component>}

//nếu không cần lấy dữ liệu từ store về thì để null, mapDispatchToProps phải để sau mapStateToProps
// => export default connect(null, mapDispatchToProps)(Category);

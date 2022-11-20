import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  render() {
    console.log(
      "Kiểm tra xem component Category có nhận props chưa: ",
      this.props
    );

    //destructuring
    const { categoryList, handleSelectedTab, selectedTab } = this.props;

    return (
      <div className="btn-group d-flex justify-content-center">
        {categoryList.map((item) => {
          return (
            <button
              key={item.tabName}
              className={clsx("btn btn-secondary", {
                "btn-danger": selectedTab === item.type, //nếu giá trị của selectedTab bằng với giá trị của thuộc tính type trong categoryList, kết quả sẻ trả về true, và nếu true thì sẽ thêm class btn-danger vào sau class btn-secondary, coi như 1 dạng ghi đè class
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

const mapStateToProps = (state) => {
  return {
    categoryList: state.category.categories,
    selectedTab: state.product.selectedTab,
  };
};

//hàm gửi 1 hành động để thay đổi state trên store
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedTab: (type) => {
      dispatch({
        type: "CHANGE_TAB",
        payload: type,
      });
    },
  };
};

//sau khi hàm connnect chạy thì nó sẽ return về 1 function con, công dụng function con này là nó sẽ return về 1 component khác, cái component này sẽ nhận vào cái component Category
//hàm connect sẽ kết nối với store, lấy cái state trên store truyền vào hàm mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Category);

{
  /*connect() => return function(Category) => return <ComponentOther><Category></Category></ComponentOther> */
}

import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    //hàm filter lọc ra những item trong productList mà có giá trị của thuộc tính type bằng với giá trị của thuộc tính selectedTab
    const productFilter = this.props.productList.filter(
      (item) => item.type === this.props.selectedTab
    );
    console.log("productFilter", productFilter);

    return (
      <div className="row mt-3">
        {productFilter.map((item) => {
          return (
            <div key={item.id} className="col-4">
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

//hàm map dữ liệu từ store của redux thành props của component
const mapStateToProps = (state) => {
  return {
    productList: state.product.products, //productList là tên của props, đặt tên gì cũng được
    selectedTab: state.product.selectedTab,
  };
};



//khi connect lên store thì gọi hàm map này chạy, nó map dữ liệu xuống, lấy dữ liệu products ra, chuyển thành tên productList, và truyền cho component ProductList
export default connect(mapStateToProps)(ProductList);

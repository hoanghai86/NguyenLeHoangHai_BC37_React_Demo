import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    // console.log(this.props);
    const productFilter = this.props.productList.filter(
      (prd) => (prd.type === this.props.selectedTab)
    );
    console.log("ProductFilter: ", productFilter);
    return (
      <div className="row">
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

const mapStateToProps = (state) => {
  return {
    productList: state.product.products,
    selectedTab: state.product.selectedTab,
  };
};

export default connect(mapStateToProps)(ProductList);

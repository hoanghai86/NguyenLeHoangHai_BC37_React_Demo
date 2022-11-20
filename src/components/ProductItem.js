import React, { Component } from "react";
import styles from "./ProductItem.module.css";

export default class ProductItem extends Component {
  render() {
    //bên trong mỗi component đều có sẵn 1 thuộc tính mặc định là props, dùng để hứng dữ liệu mà component cha truyền vô nếu có
    //prod là tên dữ liệu mà component cha ProductList truyền vô, lưu ý: phải gõ đúng tên
    console.log(this.props);
    return (
      <div className={styles.item}>
        <h3>Tên SP: {this.props.prod.name}</h3>
        {/* đỗ dữ liệu từng cái item vào mấy cái div */}
        <p>Giá: {this.props.prod.price}</p>
      </div>
    );
  }
}

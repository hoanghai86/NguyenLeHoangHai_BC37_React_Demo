import React, { Component } from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

export default class ProductList extends Component {
  products = [
    { id: 1, name: "iphone 14", price: 1400 },
    { id: 2, name: "samsung ZFlip 4", price: 1000 },
    { id: 3, name: "Apple watch S8", price: 500 },
  ];

  //tiến hành chuyển mảng 3 object ra thành mảng mới có 3 cái div
  //[{},{},{}] => [div.col, div.col, div.col]
  renderProducts = () => {
    //this.product là cái mảng sản phẩm của mình
    //dùng hàm map bên EX6 để lặp từng phần tử trong mảng sản phẩm, mỗi lần lặp là truyền 1 cái call back function, 1 item ứng với 1 div
    const html = this.products.map((item) => {
      return (
        //1 cái div phải có 1 cái key để định danh, ở đây là dùng id sản phẩm để làm key, và key ko được trùng nhau
        <div key={item.id} className={styles.col}>
          <ProductItem prod={item} a="abc" b={123}/> {/* truyền cho component con ProductItem cái item với tên prod, chỗ này đặt tên gì cũng được, để thằng con nó xài */}
        </div>
      );
    });
    // console.log(html);
    return html;
  };

  render() {
    return (
      <div>
        <h1>Danh sách sản phẩm</h1>
        <div className={styles.row}>{this.renderProducts()}</div>
      </div>
    );
  }
}

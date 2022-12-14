import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import styles from "./ProductList.module.css";

export default class ProductList extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  //????? th???ng con truy???n d??? li???u l??n cho th???ng cha, th?? t???o 1 c??i bi???n h???ng, m?? c??i bi???n n??y l?? 1 c??i bi???n b??nh th?????ng, khi n?? thay ?????i th?? component kh??ng quan t??m, n??n mu???n giao di???n load l???i ???????c th?? ph???i b??? n?? v??o state, ch??? n??o s??? d???ng bi???n selectedItem n??y th?? ph???i d??ng h??m this.setState
  state = { selectedItem: null, isShowCart: false, cart: [] };

  //sau ???? t???o 1 function ????? ch???nh s???a c??i bi???n h???ng ????, r???i ti???p t???c truy???n ng?????c l???i qua cho th???ng con
  //ng??? c???nh l??c n??y s??? l?? khi th???ng con nh???n n??t, v?? d??? n??t "xem chi ti???t", nh??ng c??i h??m l???i ch???y ??? th???ng cha, tham s??? th???ng con truy???n v??o c??i h??m l?? nguy??n c??i ?????i t?????ng item l??n cho th???ng cha, th???ng cha h???ng v?? set l???i c??i bi???n h???ng l??c n??y l?? item
  //t??m l???i th???ng cha vi???t ra 1 c??i c??ng c???, r???i qu??ng cho th???ng con s??? d???ng
  setSelectedItem = (dataFromChild) => {
    this.setState({
      selectedItem: dataFromChild, //l??u d??? li???u t??? th???ng con productItem v??o bi???n h???ng ????? truy???n ti???p qua productDetail
    });
  };

  renderProducts = () => {
    //map c??c ?????i t?????ng trong m???ng products th??nh t???ng th??? div, sau ???? truy???n qua th???ng component con ProductItem, v?? th???ng item ch???u tr??ch nhi???m x??? l?? nh???ng c??i li??n quan ?????n item
    const html = this.products.map((item) => {
      return (
        <div key={item.id} className={styles.col}>
          <ProductItem
            item={item}
            setSelectedItem={this.setSelectedItem}
            addToCart={this.addToCart}
          />
          {/* truy???n c??c ?????i t?????ng trong m???ng products sang component con ProductItem v???i c??i t??n l?? item, nguy??n t???c truy???n d??? li???u b??i t???p n??y l?? th???ng cha truy???n qua con, ho???c con l??n cha l???y, c??c th???ng con th?? kh??ng ???????c truy???n cho nhau, ph???i th??ng qua cha */}
          {/* truy???n c??i h??m setSelectedItem cho th???ng con productItem v???i c??i t??n l?? setSelectedItem */}
        </div>
      );
    });
    return html;
  };

  //h??m c?? ch???c n??ng hi???n component Cart khi b???m n??t "Gi??? h??ng"
  showCart = () => {
    this.setState({
      isShowCart: true,
    });
  };

  //h??m c?? ch???c n??ng t???t component Cart khi b???m n??t "X" tr??n component Cart, ngh??a l?? ph???i render l???i giao di???n th???ng cha l?? productList, nh??ng d???u "X" th?? ??? component con l?? Cart, c??n h??m th?? l???i vi???t ??? th???ng cha productList, n??n ????? c?? th??? render l???i ???????c giao di???n th?? khi vi???t xong h??m hideCart th?? ta ph???i truy???n xu???ng th???ng con
  //??? th???ng con th?? khi nh???n n??t, s??? g???i ng?????c h??m c???a th???ng cha ch???y
  hideCart = () => {
    this.setState({
      isShowCart: false,
    });
  };

  //h??m th??m s???n ph???m v??o gi??? h??ng
  addToCart = (prod) => {
    const cartItem = {
      prod: prod,
      quantity: 1,
    };
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => prod.id === item.prod.id);

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      cloneCart.push(cartItem);
    }

    //c???p nh???t l???i bi???n cart trong state
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  //h??m t??nh t???ng s??? l?????ng s???n ph???m trong cart
  calcTotalProductInCart = () => {
    return this.state.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  //x??a s???n ph???m trong gi??? h??ng
  deleteCartItem = (id) => {
    const cloneCart = [...this.state.cart];
    const foundIndex = cloneCart.findIndex((item) => id === item.prod.id);
    cloneCart.splice(foundIndex, 1);
    this.setState({
      cart: cloneCart,
    });
  };

  //t??ng s???n ph???m trong gi??? h??ng
  increaseQuantity = (id) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.prod.id);

    if (foundItem) {
      foundItem.quantity += 1;
    }

    //c???p nh???t l???i bi???n cart trong state
    this.setState({
      cart: cloneCart,
    });
  };

  //gi???m s???n ph???m trong gi??? h??ng
  decreaseQuantity = (id) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.prod.id);

    if (foundItem && foundItem.quantity > 1) {
      foundItem.quantity -= 1;
    }

    //c???p nh???t l???i bi???n cart trong state
    this.setState({
      cart: cloneCart,
    });
  };

  //th???ng productList l?? th???ng component cha, khi n?? b??? render l???i th?? n?? s??? k??o theo to??n b??? component con render l???i
  render() {
    return (
      <div>
        <h1
          onClick={this.showCart}
          className="text-end pe-5"
          style={{ cursor: "pointer" }}
        >
          Gi??? h??ng ({this.calcTotalProductInCart()})
        </h1>
        <div className={styles.row}>{this.renderProducts()}</div>

        {/*productList s??? truy???n bi???n h???ng ???????c l?? selectedItem t??? productItem sang productDetail v???i c??i t??n l?? item */}
        {/* ban ?????u khi b???t trang web, n???u ng?????i d??ng kh??ng b???m xem chi ti???t th?? c??n b???n l?? component productDetail kh??ng c???n hi???n, selectedItem trong state s??? null, n???u ko null th?? hi???n component productDetail l??n */}
        {this.state.selectedItem ? (
          <ProductDetail item={this.state.selectedItem} />
        ) : null}

        {/* n???u isShowCart trong state b???ng true th?? hi???n component gi??? h??ng l??n */}
        {/* truy???n m???ng cart t??? state v??o component cart */}
        {this.state.isShowCart && (
          <Cart
            deleteCartItem={this.deleteCartItem}
            cart={this.state.cart}
            hideCart={this.hideCart}
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity={this.decreaseQuantity}
          />
        )}
      </div>
    );
  }
}

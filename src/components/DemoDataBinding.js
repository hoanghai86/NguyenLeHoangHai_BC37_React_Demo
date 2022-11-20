import React, { Component } from "react";
import styles from "./DemoDataBinding.module.css"; //đặt tên cho css của component DemoDataBinding là "styles", khai báo đường dẫn css, để file App.js không bị dính CSS của các component con
import clsx from "clsx";

class DemoDataBinding extends Component {
  //tạo biến trong component
  fullName = "Hiếu Đặng";
  age = 27;
  state = {
    isLogIn: false,
  };

  //tạo hàm trong component
  showMessage() {
    return "Hello World!";
  }

  showAlert() {
    alert("Warning...");
  }

  showAlert2(mes) {
    alert(mes);
  }

  showAlert3 = () => {
    alert(this.fullName + " " + this.age);
  };

  handleLogin = () => {
    this.setState({
      isLogIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLogIn: false,
    });
  };

  renderLogin() {
    if (this.state.isLogIn) {
      return (
        <div style={{ backgroundColor: "yellow", width: 300, padding: 30 }}>  {/* nếu chỉnh inline css, nếu là chuỗi thì để trong dấu nháy kép, nếu là số thì bỏ px đi, vì đây không phải là HTML */}
          <h1 className={styles.title}>Welcome</h1>
          {/* nếu trong className đặt nhiều tên thì dùng cú pháp nối chuỗi `${styles.btn} ${styles.btn1}` hoặc clsx*/}
          {/* clsx vừa cho phép chúng ta ghép các class nối nhau, vừa cho phép xét true false mới hiện class */}
          <button
            className={clsx(styles.btn, styles.btn1, { [styles.btn2]: true })}
            onClick={this.handleLogout}
          >
            Log out
          </button>
        </div>
      );
    }
    return (
      <button className={styles.btn} onClick={this.handleLogin}>
        Login
      </button>
    );
  }

  //hàm này sẽ chạy đâu tiên khi bên App.js gọi component DemoDataBinding
  render() {
    return (
      <div>
        {/* <h1>
          Hello, {this.fullName}. I'm {this.age - 7}
        </h1>
        <p>CyberSoft</p>
        {this.showMessage()}
        <button onClick={this.showAlert}>Alert 1</button>
        <button
          onClick={() => {
            this.showAlert2("Hello");
          }}
        >
          Alert 2
        </button>
        <button onClick={this.showAlert3}>Alert 3</button> */}

        {this.renderLogin()}
      </div>
    );
  }
}

export default DemoDataBinding;

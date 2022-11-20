import React from "react"; //import thư viện từ package.json
import "./Header.css"

//tạo 1 component header có sẵn được kế thừa thừ react component
//component là thành phần trên giao diện
//component bao gồm: HTML, CSS, JS
class Header extends React.Component {
  render() {
    //return giao diện của header
    return (
      <div className="header">
        <a className="logo">Logo</a>
        <nav className="navbar">
          <a>Home</a>
          <a>About</a>
          <a>Login</a>
        </nav>
      </div>
    );
  }
}

export default Header;
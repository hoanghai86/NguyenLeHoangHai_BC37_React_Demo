import React, { Component, PureComponent } from "react";

export default class demo extends PureComponent {
  //LifeCycle mounting: là method sẽ chạy khi khởi tạo component
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      g: 1,
      f: 2,
      count: props.a,
    };
  }

  //hàm quan trọng trong quá trình render giao diện ra
  static getDerivedStateFromProps(nextProps, currentState) {
    // console.log("getDerivedStateFromProps");
    return {
      ...currentState,
      count: nextProps.a,
    };
  }
  //currentState = {g: 1, f: 2, count: 1}
  // {g: 1, f: 2, count: 1, count: 2} = {g: 1, f: 2, count: 2}

  render() {
    console.log("render");
    return (
      <div>
        <h1>Demo LifeCycle</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }

  componentDidMount() {
    //CALL API
    console.log("componentDidMount");
  }

  //LifeCycle Updating

  //hàm quan trọng trong quá trình render giao diện ra
  //nếu hàm should này return false thì sẽ bỏ tất cả hàm phía sau, giao diện sẽ không đổi. Hàm này quyết định component có nên cập nhật lại hay không
  //trong React, khi app render thì nó sẽ kéo theo toàn bộ component render, vì vậy hàm này được sinh ra với mục đích viết code cho pro hơn, tối ưu hóa trang web
  // hàm này sẽ kiểm tra props mà component nhận vào, khi component cha cập nhật lại, chúng ta sẽ kiểm tra xem props nhận vào có thay đổi gì không, nếu không thay đổi thì không cần render lại
  //cái hàm này khó nên React viết sẵn cho mình cái component PureComponent luôn, mình extends trên đầu class để xài

//   shouldComponentUpdate(nextProps, nextState) {
//     // console.log("shouldComponentUpdate");
//     if (this.props.a !== nextProps.a || this.state.count !== nextState.count) {
//       return true;
//     }
//     return false;
//   }

  //hàm chạy sau render và trước khi cập nhật lên màn hình, nghĩa là khi muốn cập nhật gì đó, sau khi cập nhật xong, nhưng trước khi hiện lên màn hình cho user thấy, ta muốn làm 1 cái gì đó thì ta dùng hàm này
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }

  //sau khi toàn bộ đã chạy xong, giao diện lên xong xuôi hết rồi, update xong hết rồi, ta muốn làm gì thì dùng hàm này
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //LifeCycle Unmounting: hàm chạy khi component biến mất khỏi giao diện, dùng hàm này cho các tác vụ dọn dẹp, ví dụ là xóa data trên store khi rời khỏi trang
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux"; //cài redux ngoài index.js, cung cấp những cái lệnh cần thiết để tạo cái store
import { Provider } from "react-redux"; //là component của react-redux, làm trung gian để kết nối store với các component
import categoryReducer from "./Ex4Ver1/redux/categoryReducer";
import productReducer from "./Ex4Ver1/redux/productReducer";
import modelReducer from "./Ex4Ver1/redux/modelReducer";
import chairReducer from "./Ex5/redux/chairReducer";
import studentReducer from "./Ex6/redux/studentReducer";
import thunk from "redux-thunk";

// middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log(action);
      //truyền action đi tiếp
      next(action);
    };
  };
};

//reducer tổng có tác dụng quản lý các reducer con, khai báo tên các reducer con cho thằng root
const rootReducer = combineReducers({
  //Ex4
  category: categoryReducer,
  product: productReducer,
  model: modelReducer,

  //Ex5
  chair: chairReducer,

  //Ex6
  student: studentReducer,
});

//để thấy được store, ta cài extension Redux, sau đó vào link: https://github.com/zalmoxisus/redux-devtools-extension, và copy đoạn code: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() bỏ vào createStore để show cái store, mục đích để kiểm tra store có hoạt động hay chưa
//F12 bên giao diện, tab Redux, tab State để kiểm tra có category chưa
const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(logger, thunk)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import axios from "axios";
import actionType from "./type"

//async action
export const fetchStudentsAction = async (next) => {
  try {
    //hàm next có công dụng như dispatch
    next({
      type: actionType.SHOW_LOADING,
    });

    //side-effect là những hành động gián tiếp nhưng lại ảnh hưởng tới state, ví dụ ta call API rồi đẩy dữ liệu lên store, làm ảnh hưởng state
    const res = await axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "api/students",
    });

    next({
      type: actionType.SET_STUDENT_LIST,
      payload: res.data, //lưu dữ liệu từ API lên store để chỗ nào muốn xài thì xài
    });
  } catch (err) {
    console.log(err);
  } finally {
    next({
      type: actionType.HIDE_LOADING,
    });
  }
};

export const fetchStudentDetailsAction = (id) => {
  return async (next) => {
    try {
      const res = await axios({
        method: "GET",
        url: process.env.REACT_APP_API_URL + "api/students" + id,
      });
      next({
        type: actionType.SET_SELECTED_STUDENT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

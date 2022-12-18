import actionType from "./type";

const initialState = {
  studentList: [],
  isLoading: false, //biến tắt mở biểu tượng tiến trình spinner
  selectedStudent: null, //lưu sinh viên cần cập nhật lên store
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_STUDENT_LIST:
      state.studentList = action.payload;
      return { ...state }; //trả về mảng copy để redux nhận thấy sự thay đổi và render lại giao diện

    case actionType.SHOW_LOADING:
      state.isLoading = true;
      return { ...state };

    case actionType.HIDE_LOADING:
      state.isLoading = false;
      return { ...state };

    case actionType.SET_SELECTED_STUDENT:
      state.selectedStudent = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;

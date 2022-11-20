const initialState = {
  studentList: [],
  isLoading: false, //biến tắt mở biểu tượng tiến trình spinner
  selectedStudent: null, //lưu sinh viên cần cập nhật lên store
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "student/setStudentList":
      state.studentList = action.payload;
      return { ...state }; //trả về mảng copy để redux nhận thấy sự thay đổi và render lại giao diện

    case "student/showLoading":
      state.isLoading = true;
      return { ...state };

    case "student/hideLoading":
      state.isLoading = false;
      return { ...state };

    case "student/setSelectedStudent":
      state.selectedStudent = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;

const sliceName = "student";

export const actionType = {
  SHOW_LOADING: "showLoading",
  HIDE_LOADING: "hideLoading",
  SET_STUDENT_LIST: "setStudentList",
  SET_SELECTED_STUDENT: "setSelectedStudent"
};
//convert actionType ra thành 1 cái mảng
//["SHOW_LOADING","HIDE_LOADING","SET_STUDENT_LIST"]
Object.keys(actionType).forEach((key) => {
  actionType[key] = sliceName + "/" + actionType[key];
});

// console.log(actionType);
export default actionType;

import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import axios from "axios";
import { connect } from "react-redux";

class Home extends Component {
  fetchStudents = async () => {
    try {
      this.props.dispatch({
        type: "student/showLoading",
      });

      const res = await axios({
        method: "GET",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students",
      });

      this.props.dispatch({
        type: "student/setStudentList",
        payload: res.data, //lưu dữ liệu từ API lên store để chỗ nào muốn xài thì xài
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.props.dispatch({
        type: "student/hideLoading",
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Student Management</h1>
        <StudentForm fetchStudents={this.fetchStudents} />{" "}
        {/* truyền hàm load danh sách sinh viên xuống cho component StudentForm */}
        <StudentList />
      </div>
    );
  }

  componentDidMount() {
    this.fetchStudents();
  }
}

export default connect()(Home);

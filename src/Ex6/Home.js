import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { connect } from "react-redux";
import { fetchStudentsAction } from "./redux/action";

class Home extends Component {
  fetchStudents = async () => {
    this.props.dispatch(fetchStudentsAction);
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

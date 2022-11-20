import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class StudentList extends Component {
  //khi user nhấn nút cập nhật thì lên API lấy danh sách sinh viên xuống
  fetchStudentDetail = async (id) => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students/" + id,
      });
      this.props.dispatch({
        type: "student/setSelectedStudent",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4>Student List</h4>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Dob</th>
                <th>Course</th>
                <th>GPA</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* nếu đang loading thì không map dữ liệu ra, isLoading = true thì chạy hàm map, = false thì xóa hàm map */}
              {!this.props.isLoading
                ? this.props.students.map((item) => {
                    const {
                      studentId,
                      fullName,
                      email,
                      dob,
                      course,
                      math,
                      physic,
                      chemistry,
                    } = item;
                    return (
                      <tr key={studentId}>
                        <td>{studentId}</td>
                        <td>{fullName}</td>
                        <td>{email}</td>
                        <td>{dob}</td>
                        <td>{course}</td>
                        <td>{(math + physic + chemistry) / 3}</td>
                        <td>
                          <button className="btn btn-danger me-3">
                            Delete
                          </button>
                          <button
                            onClick={() => this.fetchStudentDetail(studentId)}
                            className="btn btn-info"
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
          {this.props.isLoading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.student.studentList,
    isLoading: state.student.isLoading,
  };
};

export default connect(mapStateToProps)(StudentList);

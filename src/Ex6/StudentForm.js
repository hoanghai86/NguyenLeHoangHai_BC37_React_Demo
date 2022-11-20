import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class StudentForm extends Component {
  //tạo state để lưu trữ dữ liệu của form nhập liệu
  state = {
    formData: {
      fullName: "",
      studentId: "",
      email: "",
      dob: "",
      course: "",
      math: "",
      physic: "",
      chemistry: "",
    },
  };

  //lifecycle sẽ chạy khi mà component được cập nhật
  static getDerivedStateFromProps(nextProps, currentState) {
    if (
      !nextProps.selectedStudent ||
      currentState.formData.studentId === nextProps.selectedStudent.studentId
    ) {
      return currentState;
    }
    return {
      formData: nextProps.selectedStudent,
    };
  }

  //hàm bắt sự kiện khi user nhập vào input
  handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value, //dymamic key giống Ex4 thử quần áo
      },
    });
  };

  //hàm xảy ra khi user nhấn nút submit
  handleSubmit = async (e) => {
    // console.log(this.state.formData);
    e.preventDefault(); //bản chất của nút submit là làm trang web load lại, nên ta dùng hàm preventDefault để chặn sự kiện load lại trang

    //post dữ liệu lên API
    try {
      await axios({
        method: "POST",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students",
        data: this.state.formData,
      });
      //call API để load lại danh sách sinh viên mới
      this.props.fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4>Sign Up Form</h4>
        </div>
        <div className="card-body">
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 30,
            }}
          >
            <input
              onChange={this.handleChange} //bắt sự kiện người dùng nhập vào
              value={this.state.formData.fullName}
              name="fullName"
              type="text"
              className="form-control"
              placeholder="Full name"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.studentId}
              name="studentId"
              type="text"
              className="form-control"
              placeholder="Student Id"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.email}
              name="email"
              type="text"
              className="form-control"
              placeholder="Email"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.dob}
              name="dob"
              type="date"
              className="form-control"
              placeholder="Dob"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.course}
              name="course"
              type="text"
              className="form-control"
              placeholder="Course"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.math}
              name="math"
              type="text"
              className="form-control"
              placeholder="Math"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.physic}
              name="physic"
              type="text"
              className="form-control"
              placeholder="Physic"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.chemistry}
              name="chemistry"
              type="text"
              className="form-control"
              placeholder="Chemistry"
            />
            <button className="btn btn-success">Submit</button>
            <button className="btn btn-info">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.student.selectedStudent,
  };
};

export default connect(mapStateToProps)(StudentForm);

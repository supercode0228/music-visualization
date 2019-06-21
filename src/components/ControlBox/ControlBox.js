import React, { Component } from "react";
import { connect } from "react-redux";
import SubMainOne from "../SubMainOne/SubMainOne";
import SubMainTwo from "../SubMainTwo/SubMainTwo";

class ControlBox extends Component {
  render() {
    const { page } = this.props;
    return (
      <div className="controlbox-container">
        <div className="controlbox-header">
          <span>Animation styles</span>
        </div>
        <div className="controlbox-main">
          {page === 1 ? <SubMainOne /> : <SubMainTwo />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.controller.page
});

export default connect(mapStateToProps)(ControlBox);

import React, { Component } from "react";
import "./styles.css";

class SidebarOption extends Component {
  state = {
    clicked: false
  };

  componentDidMount() {
    const { label, clickedOption } = this.props;
    if (label === clickedOption) {
      this.setState({
        clicked: true
      });
    } else {
      this.setState({
        clicked: false
      });
    }
  }

  componentWillReceiveProps(props) {
    const { label, clickedOption } = props;
    if (label === clickedOption) {
      this.setState({
        clicked: true
      });
    } else {
      this.setState({
        clicked: false
      });
    }
  }

  render() {
    const { label, onClick } = this.props;
    const { clicked } = this.state;

    return (
      <div
        className={clicked ? "option-container-selected" : "option-container"}
        onClick={onClick}
      >
        <div
          className={
            clicked ? "option-label-selected" : "option-label"
          }
        >
          {label}
        </div>
      </div>
    );
  }
}

export default SidebarOption;

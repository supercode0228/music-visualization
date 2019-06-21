import React, { Component } from "react";
import { ThreeDots } from "../../../assets";

class SubmainOneItem extends Component {
  state = {
    active: false
  };
  componentDidMount() {
    const { index, selected } = this.props;
    if (index === selected) {
      this.setState({
        active: true
      });
    } else {
      this.setState({
        active: false
      });
    }
  }

  componentWillReceiveProps(props) {
    const { index, selected } = props;
    if (index === selected) {
      this.setState({
        active: true
      });
    } else {
      this.setState({
        active: false
      });
    }
  }
  render() {
    const { layers, time, onClick } = this.props;
    const { active } = this.state;
    return (
      <div className="submain-one-item">
        <div className="time">
          <div>
            <img src={ThreeDots} alt="" width={30} />
          </div>
          <div className={active ? "time-button-active" : "time-button"} onClick={onClick}>
            {time}
          </div>
        </div>
        <div className="layer">
          <div>{layers}</div>
        </div>
      </div>
    );
  }
}

export default SubmainOneItem;

import React, { Component } from "react";
import { SubmainOneItem } from "../common";

class SubMainOne extends Component {
  state = {
    selected: 1
  };
  onSelect = index => {
    this.setState({
      selected: index
    });
  };
  render() {
    const { selected } = this.state;
    return (
      <div className="submain-one">
        <div className="submain-one-title">
          <div className="title-time">
            <span>Time</span>
          </div>
          <div className="title-layer">
            <span>Layers changed</span>
          </div>
        </div>
        <div>
          <SubmainOneItem
            index={1}
            time="0:00"
            layers="All"
            onClick={() => this.onSelect(1)}
            selected={selected}
          />
          <SubmainOneItem
            index={2}
            time="1:02"
            layers="Violin I"
            onClick={() => this.onSelect(2)}
            selected={selected}
          />
          <SubmainOneItem
            index={3}
            time="3:50"
            layers="Violin I"
            onClick={() => this.onSelect(3)}
            selected={selected}
          />
          <SubmainOneItem
            index={4}
            time="5:28"
            layers="Violin I, Violin II"
            onClick={() => this.onSelect(4)}
            selected={selected}
          />
        </div>
      </div>
    );
  }
}

export default SubMainOne;

import React, { Component } from "react";
import { SidebarOption } from "../common";
import "./styles.css";

class SideBar extends Component {
  state = {
    clickedOption: "Color Palette"
  };

  setOption = optVal => {
    this.setState({
      clickedOption: optVal
    });
    console.log("optval----->", optVal);
  };

  render() {
    const { clickedOption } = this.state;
    return (
      <div>
        <SidebarOption
          label="Color Palette"
          onClick={() => this.setOption("Color Palette")}
          clickedOption={clickedOption}
        />
        <SidebarOption
          label="Animations"
          onClick={() => this.setOption("Animations")}
          clickedOption={clickedOption}
        />
        <SidebarOption
          label="Triggers"
          onClick={() => this.setOption("Triggers")}
          clickedOption={clickedOption}
        />
        <SidebarOption
          label="Phrasing"
          onClick={() => this.setOption("Phrasing")}
          clickedOption={clickedOption}
        />
        <SidebarOption
          label="Camera"
          onClick={() => this.setOption("Camera")}
          clickedOption={clickedOption}
        />
        <SidebarOption
          label="Moments"
          onClick={() => this.setOption("Moments")}
          clickedOption={clickedOption}
        />
      </div>
    );
  }
}

export default SideBar;

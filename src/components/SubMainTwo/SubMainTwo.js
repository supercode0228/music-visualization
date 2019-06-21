import React, { Component } from "react";
import { SketchPicker } from "react-color";

class SubMainTwo extends Component {
  state = {
    background: "#000",
    afterplaySelected: "Fade out",
    beforeplaySelected: "Hidden"
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
  };

  onAfterPlaySelect = val => {
    this.setState({
      afterplaySelected: val
    });
  };

  onBeforePlaySelect = val => {
    this.setState({
      beforeplaySelected: val
    });
  };

  render() {
    const afterplayItems = [
      "Fade out",
      "Shrink",
      "Evaporate",
      "Outline",
      "Dimmed"
    ];

    const beforeplayItems = [
      "Hidden",
      "Fade in",
      "Visible",
      "Outline",
      "Dimmed"
    ];

    const { afterplaySelected, beforeplaySelected } = this.state;
    return (
      <div className="submain-two">
        <div className="preview-label">Preview:</div>
        <div
          className="preview-box"
          style={{ backgroundColor: this.state.background }}
        />
        <div className="config-box">
          <div className="color-box">
            <div className="colorbox-label">Colors</div>
            <SketchPicker
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
              width={180}
            />
          </div>
          <div className="shape-box">
            <div className="shapebox-label">Shapes</div>
          </div>
        </div>
        <div className="animation-box">
          <div className="animationbox-label">Animation</div>
          <div className="play-options">
            <div className="afterplay-box">
              <div className="afterplaybox-label">After Play</div>
              <div className="afterplaybox-wrapper">
                <div className="afterplaybox-content">
                  <div
                    className={
                      afterplaySelected === afterplayItems[0]
                        ? "afterplay-item-active"
                        : "afterplay-item"
                    }
                    onClick={() => this.onAfterPlaySelect(afterplayItems[0])}
                  >
                    {afterplayItems[0]}
                  </div>
                  <div
                    className={
                      afterplaySelected === afterplayItems[1]
                        ? "afterplay-item-active"
                        : "afterplay-item"
                    }
                    onClick={() => this.onAfterPlaySelect(afterplayItems[1])}
                  >
                    {afterplayItems[1]}
                  </div>
                  <div
                    className={
                      afterplaySelected === afterplayItems[2]
                        ? "afterplay-item-active"
                        : "afterplay-item"
                    }
                    onClick={() => this.onAfterPlaySelect(afterplayItems[2])}
                  >
                    {afterplayItems[2]}
                  </div>
                  <div
                    className={
                      afterplaySelected === afterplayItems[3]
                        ? "afterplay-item-active"
                        : "afterplay-item"
                    }
                    onClick={() => this.onAfterPlaySelect(afterplayItems[3])}
                  >
                    {afterplayItems[3]}
                  </div>
                  <div
                    className={
                      afterplaySelected === afterplayItems[4]
                        ? "afterplay-item-active"
                        : "afterplay-item"
                    }
                    onClick={() => this.onAfterPlaySelect(afterplayItems[4])}
                  >
                    {afterplayItems[4]}
                  </div>
                </div>
              </div>
            </div>
            <div className="beforeplay-box">
              <div className="beforeplaybox-label">Before Play</div>
              <div className="beforeplaybox-wrapper">
                <div className="beforeplaybox-content">
                  <div
                    className={
                      beforeplaySelected === beforeplayItems[0]
                        ? "beforeplay-item-active"
                        : "beforeplay-item"
                    }
                    onClick={() => this.onBeforePlaySelect(beforeplayItems[0])}
                  >
                    {beforeplayItems[0]}
                  </div>
                  <div
                    className={
                      beforeplaySelected === beforeplayItems[1]
                        ? "beforeplay-item-active"
                        : "beforeplay-item"
                    }
                    onClick={() => this.onBeforePlaySelect(beforeplayItems[1])}
                  >
                    {beforeplayItems[1]}
                  </div>
                  <div
                    className={
                      beforeplaySelected === beforeplayItems[2]
                        ? "beforeplay-item-active"
                        : "beforeplay-item"
                    }
                    onClick={() => this.onBeforePlaySelect(beforeplayItems[2])}
                  >
                    {beforeplayItems[2]}
                  </div>
                  <div
                    className={
                      beforeplaySelected === beforeplayItems[3]
                        ? "beforeplay-item-active"
                        : "beforeplay-item"
                    }
                    onClick={() => this.onBeforePlaySelect(beforeplayItems[3])}
                  >
                    {beforeplayItems[3]}
                  </div>
                  <div
                    className={
                      beforeplaySelected === beforeplayItems[4]
                        ? "beforeplay-item-active"
                        : "beforeplay-item"
                    }
                    onClick={() => this.onBeforePlaySelect(beforeplayItems[4])}
                  >
                    {beforeplayItems[4]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubMainTwo;

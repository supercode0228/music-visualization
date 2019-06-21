import React, { Component } from "react";
import { connect } from 'react-redux';
import FontAwesome from "react-fontawesome";
import { changeController } from '../../actions';
import "./styles.css";

class Header extends Component {
  
  onNext = () => {
    const { changeController } = this.props;
    changeController(2);
  }

  onPrev = () => {
    const { changeController } = this.props;
    changeController(1);
  }
  
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="header-label">
            Dvorak String Serenade - I. Moderato
          </div>
          <div className="tools">
            <div className="tool-item">
              <FontAwesome
                name="square"
                size="2x"
              />
            </div>
            <div className="tool-item" onClick={() => this.onPrev()}>
              <FontAwesome
                name="arrow-left"
                size="2x"
              />
            </div>
            <div className="tool-item" onClick={() => this.onNext()}>
              <FontAwesome
                name="arrow-right"
                size="2x"
              />
            </div>
            <div className="tool-item">
              <FontAwesome
                name="history"
                size="2x"
              />
            </div>
            <div className="tool-item">
              <FontAwesome
                name="save"
                size="2x"
              />
            </div>
            <div className="tool-item">
              <FontAwesome
                name="bars"
                size="2x"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { changeController })(Header);

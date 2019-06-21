import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import { Header, SideBar, ControlBox } from "./components";
import "./App.css";

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.log('store------>', store);
    return (
      <Provider store={store}>
        <div className="app">
          <div className="container">
            <Header />
            <div className="main">
              <div className="sidebar-container">
                <SideBar />
              </div>
              <div className="player-container">
                <h1>player</h1>
              </div>
              <ControlBox />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

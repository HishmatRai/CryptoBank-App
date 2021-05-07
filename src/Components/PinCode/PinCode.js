import React, { Component } from 'react';
// import PinView from "./PinView";
import PinKeyboard from "./PinKeybord";

export default class App extends Component {
  render() {
    return (
      <PinKeyboard 
        onDone={() => console.log("onDone")}
        onSubmit={v => console.log("onSubmit", v)}
      />
    );
  }
}

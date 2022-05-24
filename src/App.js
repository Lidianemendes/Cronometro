import React from "react";
import Change from "./Change.js";
import "./styles.css";

export default class App extends React.Component {
  state = {
    num: 0
  };

  add = () => {
    const ParaAí = setInterval(() => {
      this.setState({
        num: this.state.num < 30 ? this.state.num + 1 : this.state.num
      });
    }, 1000);

    this.stop = () => {
      clearInterval(ParaAí);
    };
  };

  restart = () => {
    this.setState({ num: 0 });
  };

  render() {
    return (
      <>
        <h2> Bem vindo ao cronômetro criativo 🕗</h2>
        <h1>{this.state.num}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.stop}>STOP</button>
        <button onClick={this.restart}>RESTART</button>{" "}
        <div class="circulo">⌛⏳</div>
        <Change />
      </>
    );
  }
}

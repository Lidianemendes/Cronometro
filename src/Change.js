import React from "react";

export default class Change extends React.Component {
  state = {
    msg: "Clique abaixo e surpreenda-se"
  };

  changeColor = () => {
    setInterval(() => {
      document.body.style.backgroundColor = "pink";
      this.setState({ msg: "O tempo é valioso" });
    }, 2000);
  };

  render() {
    return (
      <>
        <h3>{this.state.msg}</h3>
        <button onClick={this.changeColor}>MUDAR O TEMA</button>
      </>
    );
  }
}

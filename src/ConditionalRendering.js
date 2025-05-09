import React, { Component } from "react";

class ConditionalRendering extends React.Component {
  state = {
    Isloged: false
  };

  Login = () => {
    this.setState({ Isloged: true });
  };

  render() {
    if (this.state.Isloged) {
      return <h1>Welcome to the Class. You are Logged In!</h1>;
    }

    return (
      <div>
        <button onClick={this.Login}>Click me</button>
      </div>
    );
  }
}

export default ConditionalRendering;

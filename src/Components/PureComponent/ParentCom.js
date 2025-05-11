
import React from "react";
import RegularComponent from "./Reg";
import PureComp from "./PureC";
class ParentComponentC1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'React' };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'React' }); // same value
    }, 2000);
  }

  render() {
    console.log('Parent Render');
    return (
      <div>
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponentC1;
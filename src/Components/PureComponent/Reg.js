import React from "react";
class RegularComponent extends React.Component {
  render() {
    console.log('Regular Component Render');
    return <div>{this.props.name}</div>;
  }
}
export default RegularComponent;

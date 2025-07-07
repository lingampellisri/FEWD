import React from "react";
class MyComponentCycle extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("Constructor called");
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h4>Count: {this.state.count}</h4>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default MyComponentCycle;
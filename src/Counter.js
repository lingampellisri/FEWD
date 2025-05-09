import React from "react";

class Count extends React.Component{

    state ={count:0};
    increment=()=>
    {
        this.setState({count:this.state.count+1});
    }



    render()
    {
        return <div>
            <h4>Count {this.state.count}</h4>
            <button onClick={this.increment} >Increment</button>
        </div>
    }
}
export default Count;
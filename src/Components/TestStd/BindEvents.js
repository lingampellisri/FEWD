import React,{useState,Component} from "react";

class BindFunction extends Component
{
    constructor()
    {
        super();
        this.state={
            message:"Hello Binding Event",
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick()
    {
        this.setState({message:"Hi Binding"});
    }

 render()
 {
    return <div>
        <button onClick={this.handleClick} >
            Click Me!
        </button>
        <p>{this.state.message}</p>
    </div>
 }


}

export default BindFunction;
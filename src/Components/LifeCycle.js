import React, { Component } from "react";

class LifeCycleA extends Component
{
    constructor()
    {
        super();

        this.state={
            name:"srinivas"
        }

        console.log("LifeCycleA Constructor");

    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount()
    {
        console.log("LifeCycleA ComponentDidMount");
    }


    render()
    {
        console.log("Render Method");
        return <div>
                <h2>LifeCycleA</h2>
        </div>
    }
}

export default LifeCycleA;
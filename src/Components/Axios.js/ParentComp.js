import React from "react";
import ChildComp from "./ChildCompPure";
class ParentComp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            name: "Srinivas Lingampelli"
        };
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Srinivas Lingampelli"
            });
        }, 2000);
    }

    render()
    {
        return(
            <div>
                <h1>Parent Component</h1>
                <ChildComp name={this.state.name}/>
                <h3>Check console for lifecycle methods</h3>
            </div>
        )
    }
}

export default ParentComp;
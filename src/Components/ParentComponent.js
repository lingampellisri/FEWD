import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component
{
    constructor()
    {
        super();

        this.state={
            Parentname: "Parent" 
        }

        this.greetParent=this.greetParent.bind(this);
    }

    greetParent(childName)
    {
        alert(`Good Morning ${this.state.Parentname} from ${childName}`);
    }

 render() {
    return (
         <div>
                <ChildComponent greetHandler={this.greetParent} />
         </div>
    );
 }

}
export default ParentComponent;
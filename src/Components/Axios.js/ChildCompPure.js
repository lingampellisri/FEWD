import React from "react";
class ChildComp extends React.PureComponent{
    render()
    {
        return(
            <div>
                <h1>Child Component  { this.props.name}</h1>
            </div>
        )
    }
}

export default ChildComp;
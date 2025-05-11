import React, {Component} from "react";

class RefComp extends Component
{
    constructor()
    {
        super();

        this.inRef=React.createRef();
       
    }

    componentDidMount()
    {
        this.inRef.current.focus();
 console.log(this.inRef);

    }

    render()
    {
      return  <div>
            <input type="text" ref={this.inRef} placeholder="ENter name" />

        </div>
    }

}

export default RefComp;
//welcome.js
import React from "react";

import { Consumer } from "./contextAPI";


const Welcome =()=>
{

    return (
        <div>
            <h1>Welcome to the user</h1>

            <Consumer>
                {(value)=>(
                    <h2>
                    Name: {value.name} id :{value.id}{" "}
                    </h2>
                ) }
            </Consumer>
        </div>
    )



}

export default Welcome;


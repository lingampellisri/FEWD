import React from "react";
import { UserContext } from "../..";
import { useContext } from "react";

function UserContextCom()
{
    const user=useContext(UserContext);
    return <div>
    UserContextCom
    <UserContext.Consumer>
       {
        name=>
        {
            return <div>User name is  :{name} and using useContext hook {user}</div>
        }
       }
    </UserContext.Consumer>
    </div>
}

export default UserContextCom;
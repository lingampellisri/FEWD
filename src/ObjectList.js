import React from "react";

const users = [
    { id: 1, name: 'Geeks', age: 30 },
    { id: 2, name: 'for', age: 25 },
    { id: 3, name: 'Geeks', age: 20 },
];

function ObjectDisplay()
{
    return <div>
        <h3>Object List Display</h3>

            <ul>
               {
                 users.map((user)=>(
                    <li key={user.id} >
                        {user.name} is {user.age} year old
                    </li>
                    
                 ))
               }
            </ul>

    </div>
}

export default ObjectDisplay;
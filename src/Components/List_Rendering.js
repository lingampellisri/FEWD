import React from "react";

function ListRender()
{
    const names=["Sri","Venu","Hero","Dad","Mom"];


    const persons = [
    { id: 1, name: 'Bruce', age: 30 },
    { id: 2, name: 'Clark', age: 32 },
    { id: 3, name: 'Diana', age: 28 }
  ];


 

    return <div>
        {
            persons.map((person)=><h2 key={person.id}>{person.id} ,  {person.name} , {person.age}</h2>)
        }
    </div>
}

export default ListRender;
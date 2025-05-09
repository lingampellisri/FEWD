import React from "react";

function ButtonDisplay()
{
    const fruits=["Apple","Banana","Jack Fruit"];

    const handleClick=(fruit)=>
    {
        alert(`you Clicked ${fruit}`)
    }

    return <div>
        <h3>Button Display </h3>
        <ul>
           {
             fruits.map((fruit,idx)=>(
                <button key={idx} onClick={()=>handleClick(fruit)}>
                    {fruit}

                </button>

            ))
           }
        </ul>
    </div>
}

export default ButtonDisplay;
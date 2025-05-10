import React from "react";

function Event_Button()
{
    function handleClick()
    {
        console.log("Button Clicked")
    }

    return <div>
        <button onClick={handleClick}  >Hit Me Bro</button>
    </div>


    
}

export default Event_Button;
import React from "react";

import { useState,useEffect } from "react";


function HooksRun()
{

    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    useEffect(()=>
    {
        console.log("useEffect is called")
        window.addEventListener("mousemove",MousePosition)
    },[])


    const MousePosition =(e)=>
    {
        console.log("mouse event");
        setX(e.clientX);
        setY(e.clientY);
    }



    return <div>
<h4>Hooks {x} - {y}</h4>
    </div>
}

export default HooksRun;;
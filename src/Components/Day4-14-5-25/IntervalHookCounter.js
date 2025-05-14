import React from "react";

import { useState,useEffect } from "react";


function HooksInterval()
{

    const [count,setCount]=useState(0);

    const tick=()=>
    {
        setCount(count+1);
    }
    

    useEffect(()=>
    {
        console.log("useEffect is called")
        const interval=setInterval(tick,1000);

        return ()=>
        {
            clearInterval(interval);
        }
      
    },[count])






    return <div>
<h4>{count}</h4>
    </div>
}

export default  HooksInterval;
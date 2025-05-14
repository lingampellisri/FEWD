import React  from "react";
import { useState,useEffect } from "react";

function Hooks()
{

    const [count,setCount]=useState(0);

    useEffect(()=>
    {
        document.title=`You Clicked ${count}`;
    })

    return <div>
        <button onClick={()=>{setCount(count+1)}}  >
          COunt  {count}
        </button>
    </div>
}

export default Hooks;
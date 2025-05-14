import React  from "react";
import { useState,useEffect } from "react";

function Hooks()
{

    const [count,setCount]=useState(0);

    return <div>
        <button onClick={()=>{setCount(count+1),
            document.title=`you clicked ${count}`
        }}  >
          COunt  {count}
        </button>
    </div>
}

export default Hooks;
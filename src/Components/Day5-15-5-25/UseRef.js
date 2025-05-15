import React from "react";
import { useRef,useEffect } from "react";

function UseRefFocus()
{
    const inpRef=useRef(null);

    useEffect(()=>
    {
        inpRef.current.focus();
    },[])

    return (
        <div>
            <input  ref={inpRef} type="text"  />
        </div>
    )
}

export default UseRefFocus;

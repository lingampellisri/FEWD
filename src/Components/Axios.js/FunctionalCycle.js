import React from "react";
import {useState, useEffect } from "react";

function MyFuncCycle()
{
    useEffect(()=>
    {
        console.log("Component mounted");

        return () => {
            console.log("Component will unmount");
        };
    }, []); 

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component updated");
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            <h4>Count: {count}</h4>
        </button>
    )
}

export default MyFuncCycle;
import React,{useState} from "react";

function DisplayTxt()
{

const [showText,setText]=useState(false);

   const onHandleClicl=()=>
    {
       setText(true);
    }


    return <div>
        <button onClick={onHandleClicl}>Clicked me </button>
        {showText && <h1>Welcome to the Earth!</h1>}
    </div>

}
 export default DisplayTxt;
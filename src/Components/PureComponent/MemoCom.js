import React from "react";

function MemoComp({name})
{

    console.log("Memo Component");
return <div>
    
    <h3>memo Component {name}</h3>
</div>
}

export default React.memo(MemoComp);
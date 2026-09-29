import React from "react";

function ChildUseCallback({ handleClick }) {

    const displayData = ()=>{
        console.log("displayData---");
    }

    console.log("child use callback component");
    return (
        <>
            <h2>child usecallback component</h2>
            <button onClick={handleClick}>Click Button</button>
            <button onClick={displayData}>DisplayData</button>
        </>
    )
}

export default React.memo(ChildUseCallback);
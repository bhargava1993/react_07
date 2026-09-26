import { useRef } from "react";

function Count(){
    const countRef = useRef(0);

    function increment(){
        console.log("incement")
        countRef.current++;
        console.log("Count:", countRef.current)
    }

    return(
        <>
        <h2>Count Component</h2>
        <h3>Count: {countRef.current}</h3>

        <button onClick={increment}>Increment</button>
        </>
    )
}

export default Count;
import { useState } from "react";

function Counter() {

    // let count = 0;

    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    const decrement = ()=>{
        setCount(count - 1)
    }   

    return (
        <>
            <h1>count component</h1>

            <h2>Count: {count}</h2>

            <button onClick={increment}>Increament</button>

            <button onClick={decrement}>Decreament:</button>
        </>
    )
}

export default Counter;
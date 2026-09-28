import { useState } from 'react'
import Child from './Child';

function ReactMemo() {
    const [count, setCount] = useState(0)
    const user = { firstname: "John" }
    function handleIncrement() {
        setCount(count + 1);
    }
    console.log("App component")
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}> Increment</button>
            <Child name={user} />
        </>
    )
}

export default ReactMemo;
import { useState, useRef } from "react";


function ControlRendaring() {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0);
    renderCount.current++;
    
    return (
        <>
            <h3>ControlRendaring Comp</h3>
            <h4> Count: {count}</h4>

            <button onClick={() => setCount(count + 1)}>Increment</button>

            <p>Render Count: {renderCount.current}</p>
        </>
    )

}

export default ControlRendaring;
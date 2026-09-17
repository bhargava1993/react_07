import { useState } from "react";

function Counter() {

    const [count, SetCount] = useState(0);

    // let count =0;
    const handleIncrement = () => {
        // count = count+1;

        SetCount(count+1);
        SetCount(count+1);
        SetCount(count+1);

        SetCount(prev => prev + 1)
        SetCount(prev => prev + 1)
        SetCount(prev => prev + 1)

        // 0+1 =1
        // 1+1 =2
        // 2+1 = 3
        console.log("count----", count)
    }

    function handleDecrement() {
        SetCount(count - 1)
        console.log("count----", count)
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>

            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}

export default Counter;

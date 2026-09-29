import { useCallback, useState } from "react";

import ChildUseCallback from "./ChildUseCallback";

function UseCallback() {
    const [count, SetCount] = useState(0);
    console.log("parent component");


    // function handleClick(){
    //     console.log("handleClick function")
    // }

    const handleClick = useCallback(() => {
        console.log("handleClick function")
    }, []);

    return (
        <>
            <h1>UseCallback</h1>

            <h2>Parent Count: {count}</h2>

            <button onClick={() => SetCount(count + 1)}>Increment</button>
            <button onClick={() => SetCount(count - 1)}>Decrement</button>

            <ChildUseCallback handleClick={handleClick} />

        </>
    )
}

export default UseCallback;
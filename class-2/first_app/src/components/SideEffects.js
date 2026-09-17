import { useEffect, useState } from "react";

function SideEffects() {
    const [count, setCount] = useState(0);
    // let mulValue=0;
    const [mulValue, setMulValue] = useState(0);
    let number = 0;

    const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
      
    console.log(data)
    // useEffect(()=>{
    //     console.log("without dependency array",count * 2);
    // })

    // useEffect(() => {
    //     console.log("component mounted, Count:", count * 2);
    //     setMulValue(count * 2);
    // }, []);

    // useEffect(() => {

    //     const Timer = setInterval(() => {
    //         number++;
    //         console.log("Timer running", number);
    //         // if (number === 5) {
    //         //     clearInterval(Timer)
    //         // }
    //     }, 1000)


    //     return () => {
    //         console.log("CleanUP -> clearInterval");
    //         clearInterval(Timer)
    //     }

    // }, [])






    function hanldeIncrement() {
        setCount(count + 1);
    }
    function hanldeDecrement() {
        setCount(count - 1);
    }
    return (
        <>
            <h1> useEffect Hook</h1>

            <h1>Count: {count}</h1>

            <button onClick={hanldeIncrement}> Incerment </button>
            <button onClick={hanldeDecrement}> Decrement </button>
            <h1>mulValue: {mulValue}</h1>
        </>
    );

}

export default SideEffects;
import Display from "./Display";
function Counter({ count, setCount }) {


    return (
        <>
            <h1>Counter Compnent: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
           
        </>
    )
}

export default Counter;
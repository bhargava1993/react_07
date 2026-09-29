import useCounter from "../hooks/useCounter";

function Counter() {
    const { count,
        increment,
        Decrement } = useCounter();

    return (
        <>
            <h2>Counter:{count}</h2>

            <button onClick={increment}>+</button>
            <button onClick={Decrement}>-</button>
        </>
    )

}

export default Counter;
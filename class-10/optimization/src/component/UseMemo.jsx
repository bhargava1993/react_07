import { useMemo, useState } from "react"

function UseMemo() {
    const [count, SetCount] = useState(0);
    const [price, SetPrice] = useState(100);
    
    function expensiveCalculation(price) {
        console.log("Expensive Calculation ",price);

        let result = 0;

        for (let i = 0; i < 100; i++) {
            result = result + price;
        }

        return result;
    }

    const total = useMemo(()=>{
        return expensiveCalculation(price);
    },[price]);

    return (
        <>

            <h1>Total: {total}</h1>
            <h2>Count: {count}</h2>

            <button onClick={() => SetCount(count + 1)}>count</button>

            <button onClick={() => SetPrice(price+10)}>Increse Price</button>
        </>
    )
}

export default UseMemo;
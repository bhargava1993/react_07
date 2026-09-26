import { useEffect, useRef, useState } from "react";

function UpdateValues() {
    const [price, setPrice] =useState(100);

    const PreviousPrice = useRef();

    useEffect(()=>{
        PreviousPrice.current = price;
    },[price])
    

    return (
        <>
            <h2>update values</h2>
            <h2>Current Price: {price}</h2>

            <h3> Previous Price: {PreviousPrice.current}</h3>

            <button onClick={()=> setPrice(price+10)}>Increase Price</button>
        </>
    )
}

export default UpdateValues;
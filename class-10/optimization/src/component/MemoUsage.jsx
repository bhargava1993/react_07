import { useState, useMemo } from "react";

function MemoUsage() {
    const [search, SetSearch] = useState("");
    const [count, SetCount] = useState(0);
    // console.log("seach--",search)
    const products = [
        "Iphone",
        "Samsung",
        "OnePlus",
        "Goole Pixel",
        "Nothing Phone",
        "Oppo"
    ]
    console.log("filter products....");

    const filterProducts = useMemo(() => {

        return products.filter((product) => product.toLowerCase().includes(search.toLowerCase().trim()));

    }, [search]);



    const sortedProducts  = useMemo(()=>{
        return [...products].sort((a,b)=>a-b)
    },[products])



    // const filterProducts = products.filter((product) => {
    //     return product.toLowerCase().includes(search.toLowerCase().trim());
    // })

    return (
        <>
            <h2>UseMemo component</h2>
            <input type="text"
                placeholder="Search product"
                value={search}
                onChange={(e) => { SetSearch(e.target.value) }} />

            <h2>Count:{count}</h2>
            <button onClick={() => SetCount(count + 1)}>Increment</button>
            <ul>
                {filterProducts.map((product) => (
                    <li key={product}> {product}</li>
                ))}
            </ul>
        </>
    )
}

export default MemoUsage;
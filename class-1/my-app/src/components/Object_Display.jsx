import { useState } from "react"

export default function Object_Display() {

    const products = [
        {
            "id": 11,
            "title": "Annibale Colombo Bed",
            "price": 1899.99,
            "category": "furniture",
            "returnPolicy": "No return policy"
        },
        {
            "id": 12,
            "title": "Annibale Colombo Sofa",
            "price": 2499.99,
            "category": "furniture",
            "returnPolicy": "7 days return policy"
        },
        {
            "id": 13,
            "title": "Bedside Table African Cherry",
            "price": 299.99,
            "category": "furniture",
            "returnPolicy": "7 days return policy"
        },
        {
            "id": 14,
            "title": "Knoll Saarinen Executive Conference Chair",
            "price": 499.99,
            "category": "furniture",
            "returnPolicy": "60 days return policy"
        },
        {
            "id": 15,
            "title": "Wooden Bathroom Sink With Mirror",
            "price": 799.99,
            "category": "furniture",
            "returnPolicy": "60 days return policy"
        },
        {
            "id": 16,
            "title": "Apple",
            "price": 1.99,
            "category": "groceries",
            "returnPolicy": "90 days return policy"
        },
        {
            "id": 17,
            "title": "Beef Steak",
            "price": 12.99,
            "category": "groceries",
            "returnPolicy": "60 days return policy"
        },
        {
            "id": 18,
            "title": "Cat Food",
            "price": 8.99,
            "category": "groceries",
            "returnPolicy": "No return policy"
        },
        {
            "id": 19,
            "title": "Chicken Meat",
            "price": 9.99,
            "category": "groceries",
            "returnPolicy": "7 days return policy"
        },
        {
            "id": 20,
            "title": "Cooking Oil",
            "price": 4.99,
            "category": "groceries",
            "returnPolicy": "30 days return policy"
        }
    ]

    const [filteredProduts, setFilteredProduts] = useState(products)
    const [searchTitle, setSearchTitle] = useState("");
    

    const filterProducts =()=>{
        const result = products.filter((product)=>{
           return  product.title.toLowerCase().includes(searchTitle.toLowerCase())
        })
        console.log("result----",result)
        setFilteredProduts(result) ;
    }

    const sortAscending =()=>{

        const result = [...filteredProduts].sort((a,b)=>a.price - b.price)
         setFilteredProduts(result) ;
    }

    const sortDescending =()=>{

        const result = [...filteredProduts].sort((a,b)=>b.price - a.price)
         setFilteredProduts(result) ;
    }

    return (
        <>
            <h1>Product info</h1>
            <label> search:</label>
            <input
                type="text"
                placeholder="Enter product title"
                onChange={(e) => {
                    setSearchTitle(e.target.value);

                }}
            />

            <button onClick={filterProducts}> Filter</button>

            <button onClick={sortAscending}>Price Ascending</button>

            <button onClick={sortDescending}>Price Descending</button>

            <br></br>
            <br></br>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>ReturnPolicy</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredProduts.map((e, index) => (
                        <tr key={index}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.price}</td>
                            <td>{e.category}</td>
                            <td>{e.returnPolicy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )
}
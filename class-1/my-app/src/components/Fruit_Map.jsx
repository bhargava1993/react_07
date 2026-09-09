export default function Fruit_Map() {

    const fruits = ["Apple", "Banana", "Mango", "Orange", "Graphs"];

   


    return (
        <>
            <h1>Fruit List</h1>

            <ol>
                {fruits.map((fruit, index) => (
                    <li> <p key={fruit +"_"+index}> {fruit}</p></li>
                ))}
            </ol>

        </>
    )

}


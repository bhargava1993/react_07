
function Display({count=0, name=""}){
    console.log("count---",count)
    return(
        <>
        <h1>Display Component:{count}</h1>
        <p>Display Name: {name}</p>
        </>
    )
}

export default Display;
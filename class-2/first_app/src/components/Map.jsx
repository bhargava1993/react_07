
function Map({emp}) {

    console.log(emp)
    return (
        <div>
            <p>Name: {emp.name}</p>
            <p>Age: {emp.age}</p>
            <p>Salary: {emp.salary}</p>
            <hr />
        </div>
    )
}

export default Map;
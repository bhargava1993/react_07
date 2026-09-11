import { useState } from "react";

function InputState() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");

    const [empValue, setEmpValue] = useState({
        name: "",
        age: "",
        salary: ""
    });

    const [groupEmp, setGroupEmp] = useState([]);

    function handleSubmit() {
        const newEmployee = {
            name,
            age,
            salary
        };

        setEmpValue(newEmployee);

        setGroupEmp((prev) => [...prev, newEmployee]);

        console.log("newEmployee---", newEmployee);

        handleClear();
    }

    function handleClear() {
        setName("");
        setAge("");
        setSalary("");
    }

    return (
        <>
            <label>Name:</label>
            <input
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <br />

            <label>Age:</label>
            <input
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />

            <br />

            <label>Salary:</label>
            <input
                onChange={(e) => setSalary(e.target.value)}
                value={salary}
            />

            <h1>Hello: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Salary: {salary}</h1>

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear</button>

            <h2>Employees</h2>

            {groupEmp.map((emp, index) => (
                <div key={index}>
                    <p>Name: {emp.name}</p>
                    <p>Age: {emp.age}</p>
                    <p>Salary: {emp.salary}</p>
                    <hr />
                </div>
            ))}
        </>
    );
}

export default InputState;

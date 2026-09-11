import { useState } from "react";

function InputState() {

    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    const [salary, SetSalary] = useState("");

    const sampleObj = { "name": "", "age": "", "salary": "" };
    const [empValue, SetEmpValue] = useState(sampleObj);

    const [groupEmp, SetGroupEmp] = useState([]);

    function handleInput(event) {
        // console.log(event.target.value)
        SetName(event.target.value)
        // SetEmpValue({...empValue,name});
        // console.log("empValue---", empValue)
    }

    function handleSubmit() {
        // SetEmpValue({name,age,salary});
        // console.log("empValue---", empValue)
        // SetGroupEmp([...groupEmp,empValue]);

        let newEmp = {name,age,salary};
        SetEmpValue(newEmp)

        SetGroupEmp((prev)=>[...prev,newEmp]);
        console.log("groupEmp---", groupEmp)

        handleClear();
    }

    function handleClear(){
            SetName("");
            SetAge("");
            SetSalary("");
    }
    return (
        <>
            <label>Name:</label>
            <input type="text" placeholder="Enter name"
                onChange={handleInput} id="nameID" value={name}/>
            <br></br>
            <label>Age:</label>

            <input onChange={(e) => SetAge(e.target.value)} value={age} />

            <br></br>
            <label>Salary:</label>

            <input onChange={(e) => SetSalary(e.target.value)} value={salary}/>

            <h1>Hello: {name}</h1>
            <h1>Age:{age}</h1>
            <h1>Salary: {salary}</h1>

            <button onClick={handleSubmit}>submit</button>
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
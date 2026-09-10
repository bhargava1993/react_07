import Greeting from "./Greeting";

import { useState } from "react";

function Student(props) {


    const [names, setNames] = useState(props.names);
    console.log("names-----", names)
    // let names = props.names;
    let newName = "";

    let studenObjArray = [
        { name: "Sudheer", age: "22", education: "Mtech", salary: 10000 },
        { name: "Harsha", age: "21", education: "Btech", salary: 20000 },
        { name: "Deepika", age: "22", education: "MCA", salary: 30000 }
    ]

    
    function handleChange(event) {
        console.log(event.target.value);
        newName = event.target.value;
    }

    function handleClick() {
        setNames([...names, newName])
        console.log("handle click", newName, names);
    }

    return (

        <>
            <label>Name:</label>
            <input type="text" placeholder="enter name" onChange={handleChange} />
            <button onClick={handleClick} >Submit</button>

            {
                names.map((ele, index) => (
                    <h1 key={ele + index} id={ele + index}>{ele}</h1>
                ))
            }
            {
                studenObjArray.map((ele, index) => (
                    <Greeting key={ele.name + index} name={ele.name} age={ele.age} education={ele.education} salary={ele.salary} />
                ))
            }

        </>

        // <div>
        //     <h1>Koushik</h1>
        //     <h1>Deepika</h1>
        //     <h1>Aravind</h1>
        //     <h1>Harsha</h1>
        // </div>

    );

}

export default Student;
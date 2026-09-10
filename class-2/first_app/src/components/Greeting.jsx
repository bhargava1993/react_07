import "./Greeting.css";

function Greeting({name, age, education, salary}) {

    // console.log("props---", name, age, education, salary)

    return (
        // <div style={{border: "2px solid black"}}>
        //     <h1>Name: {props.name}</h1>
        //     <h1>Age: {props.age}</h1>
        //     <h1>Eduction: {props.education}</h1>
        // </div>

        // <div className="greeting">
        //     <h1>Name: {props.name}</h1>
        //     <h1>Age: {props.age}</h1>
        //     <h1>Eduction: {props.education}</h1>
        // </div>

         <div className="greeting">
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Eduction: {education}</h1>
            <h1>salary: {salary +1000}</h1>
        </div>

    );
}

export default Greeting;
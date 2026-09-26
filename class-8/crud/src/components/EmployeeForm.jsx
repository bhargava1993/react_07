import { useEffect, useState } from "react";

function EmployeeForm({ employee, onSubmit, onClose }) {

    const [formData, setFormData] = useState({
        // id: "",
        name: "",
        age: "",
        salary: ""
    });

    useEffect(() => {

        if (employee) {
            setFormData({
                // id: employee.id,
                name: employee.name,
                age: employee.age,
                salary: employee.salary
            })
        } else {
            setFormData({
                // id: "",
                name: "",
                age: "",
                salary: ""
            })
        }

    }, [employee])

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
        // console.log("formData----",formData);

        // console.log("name, value----", name, value)

    }

    function handleSubmit(event) {
        console.log("handleSubmit----")
        event.preventDefault();

        onSubmit({
            // id: formData.id,
            name: formData.name,
            age: formData.age,
            salary: formData.salary
        });
    }


    return (
        <>
            <h3>{employee ? "Edit Empoyee" : "Add Employee"}</h3>
            <form onSubmit={handleSubmit}>
                {/* <div>
                    <label>Id</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                    />
                </div> */}
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Age</label>
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Salary</label>
                    <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button type="submit">save</button>
                </div>
            </form>
        </>
    )
}

export default EmployeeForm;
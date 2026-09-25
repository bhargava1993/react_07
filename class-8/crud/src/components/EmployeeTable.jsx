
function EmployeeTable({ employees, onEdit, onDelete }) {

    return (
        <>
            <h3>Employee Table</h3>
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.salary}</td>

                                <td>
                                    <button onClick={() => onEdit(emp)}>Edit</button>
                                    <button onClick={() => onDelete(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default EmployeeTable;
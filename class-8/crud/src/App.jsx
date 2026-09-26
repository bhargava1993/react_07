import { useState } from 'react'

import './App.css'
import EmployeeTable from './components/EmployeeTable'
import EmployeeForm from './components/EmployeeForm'

function App() {

  const [employees, setEmployees] = useState([
    { id: 1, name: "harsha", age: "22", "salary": 10000 },
    { id: 2, name: "koushik", age: "22", "salary": 10000 },
    { id: 3, name: "deepika", age: "22", "salary": 10000 },
    { id: 4, name: "gangiReddy", age: "22", "salary": 10000 }
  ])

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [showForm, setShowForm] = useState(false);

  function handleAdd(event) {
    console.log("handleAdd----------");
    setShowForm(true);
    setSelectedEmployee(null);
  }
  function handleEdit(emp) {
    // console.log("handleEdit button---", emp);
    setSelectedEmployee(emp)
    setShowForm(true);
    // console.log("handleEdit selectedEmployee---", selectedEmployee);
  }
  function handleDelete(id) {
    console.log("handleDelete button---", id);

    const filteredEmployee = employees.filter((emp) => emp.id !== id);
    setEmployees(filteredEmployee)
  }

  function handleClose() {
    console.log("onClose button");
    setSelectedEmployee(null);
    setShowForm(false);
  }

  function handleSubmit(employeeData) {
    console.log("employeeData----", employeeData)
    if (selectedEmployee) {

      const updatedEmployees = employees.map((emp) => {
        if (emp.id === selectedEmployee.id) {
          return {
            ...emp,
            ...employeeData
          }
        } else {
          return emp;
        }

      }
      )
      setEmployees(updatedEmployees)

    } else {
      //new employee data

      const newEmployee = {
        id: employees.length + 1,
        ...employeeData
      }
      setEmployees([...employees, newEmployee])
    }
    setShowForm(false);
    setSelectedEmployee(null);
  }

  return (
    <>
      <button onClick={handleAdd}>+ Add Employee</button>

      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {showForm && <EmployeeForm
        employee={selectedEmployee}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />}
    </>
  )
}

export default App

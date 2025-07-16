import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getEmployeeById } from "./EmployeeService.jsx"
import "./Employees.css"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState(null)
    const { employeeId } = useParams()

    useEffect(() => {
        getEmployeeById(employeeId).then((employee) => {
            setEmployee(employee)
        })
    }, [employeeId])
    
if (!employee) return null;

    return (
        <section className="employees">
            <header className="employees-header">{employee.user?.fullName}</header>
            <div>
                <span className="employees-info">Email : </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employees-info">Address : </span>
                {employee.user?.address}
                <div>
                    <span className="employees-info">Phone Number : </span>
                    {employee.user?.phoneNumber}
                </div>
            </div>
        </section>
    )
}
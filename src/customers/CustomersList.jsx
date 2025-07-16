import { useEffect, useState } from "react"
import { User } from "../users/user"
import { getNonStaffUsers } from "../services/userService.jsx"
import "../users/user.css"
import { Link } from "react-router-dom"
import { CustomerDetails } from "./CustomerDetails.jsx"



export const CustomersList = () => {
    const [customers, setCustomer] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomer(customerArray)
        })
    }, [])

    return (
        <div className="customers">
            {customers.map((customerObj) => (
    <Link key={customerObj.id} to={`/customers/${customerObj.id}`}>
        <User user={customerObj} />
    </Link>
))}
        </div>
    )
}

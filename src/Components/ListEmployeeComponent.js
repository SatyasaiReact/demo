import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'

const ListEmployeeComponent = () => {
    const[employees,setEmployees]=useState([])
    useEffect(()=>{
        EmployeeService.getEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
     
    },[])
  return (
    <div>
        <h2 className="text-center">EmployeeList</h2>
        <Link to="/add-employee" className="btn btn-primary mb-3">Add Employee</Link>
        <div className="row">
            
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>

      
    </div>
  )
}

export default ListEmployeeComponent

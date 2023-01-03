import React, { useState } from 'react'

const CreateEmployeeComponent = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const saveEmployee=(e)=>{
        e.preventDefault();
        const employee={firstName,lastName,email}
        console.log(employee);

    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h1  className="text-center">Add Employee</h1>
                    <div className="card-body">
                        <form>
                            <div class="form-group mb-2">
                                <lable className="form-label">First Name:</lable>
                                <input type="text"
                                 placeholder="enter the first name" 
                                 name="firstName" 
                                 className="form-controler"
                                 value={firstName}
                                 onChange={(e)=>setFirstName(e.target.value)}>
                                </input>
                            </div>
                            <div class="form-group mb-2">
                                <lable className="form-label">Last Name:</lable>
                                <input type="text"
                                 placeholder="enter Last name" 
                                 name="lastName" 
                                 className="form-controler"
                                 value={lastName}
                                 onChange={(e)=>setLastName(e.target.value)}>
                                </input>
                            </div>
                            <div class="form-group mb-2">
                                <lable className="form-label">Email;</lable>
                                <input type="text"
                                 placeholder="enter the Email" 
                                 name="email" 
                                 className="form-controler"
                                 value={email}
                                 onChange={(e)=>setEmail(e.target.value)}>
                                </input>
                            </div>
                            <button className="btn btn-success" onClick={(e)=>saveEmployee(e)}>Submit</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
        
      
    </div>
  )
}

export default CreateEmployeeComponent

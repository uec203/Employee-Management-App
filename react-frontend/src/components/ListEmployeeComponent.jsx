import React, { useState, useEffect } from 'react';
import EmployeeService from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';
import AddEmployeeButton from '../navigate/AddEmployeeButton';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate(); // Hook to navigate programmatically

    useEffect(() => {
        // Fetch employees data when the component mounts
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    // Handle employee update navigation
    const updateEmployee = (id) => {
        navigate(`/employees/${id}`); // Use navigate to redirect to the update page
    };
    const viewEmployee = (id) => {
        navigate(`/view-employees/${id}`); // Use navigate to redirect to the update page
    };
    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(() => {
            // Update the state after successfully deleting an employee
            setEmployees((prevEmployees) =>
                prevEmployees.filter((employee) => employee.id !== id)
            );
        })
    };

    return (
        <div>
            <h2 className='text-center'>
                Employees List
            </h2>
            <AddEmployeeButton />
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee FirstName</th>
                            <th>Employee LastName</th>
                            <th>Employee Email Id</th>
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
                                        <td>
                                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                            <button style={{ margin: "0px 10px" }}  className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                            <button className='btn btn-info' onClick={() => viewEmployee(employee.id)}>View</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;
import React, { useState, useEffect } from 'react';
import EmployeeService from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';
import AddEmployeeButton from '../navigate/AddEmployeeButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployeeById, getEmployeesList } from '../state/employee/Action';

const ListEmployeeComponent = () => {
    const employees = useSelector(store => store.employee.employees);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getEmployeesList())
    }, [employees]); 


    const updateEmployee = (id) => {
        navigate(`/employees/${id}`); 
    };
    const viewEmployee = (id) => {
        navigate(`/view-employees/${id}`); 
    };
    const deleteEmployee = (id) => {
        dispatch(deleteEmployeeById(id));
        dispatch(getEmployeesList());
    };

    return (
        <div>
            <h2 className='text-center mx-auto'>
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
import React, { useEffect, useState } from 'react';
import EmployeeService from '../Service/EmployeeService';
import {useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById } from '../state/employee/Action';
import { useDispatch, useSelector } from 'react-redux';

const ViewEmployeeComponent = () => {
    const { id } = useParams(); 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();
    const employee = useSelector(store => store.employee.employee)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployeeById(id));
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
    }, [id]);

    return (
        <div>
            <br></br>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View Employee Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>Employee First Name: </label>
                        <div>{firstName}</div>
                    </div>
                    <div className='row'>
                        <label>Employee Last Name: </label>
                        <div>{lastName}</div>
                    </div>
                    <div className='row'>
                        <label>Employee EmailId: </label>
                        <div>{emailId}</div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <button className='btn btn-primary' onClick={()=> navigate('/employees')}>Return </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewEmployeeComponent;
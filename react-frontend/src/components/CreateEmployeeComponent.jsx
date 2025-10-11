import React, { useState } from 'react';
import EmployeeService from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createEmployeeById } from '../state/employee/Action';

const CreateEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName, lastName, emailId };
        dispatch(createEmployeeById(employee));
        navigate('/employees');
    };

    return (
        <div>
            <div className="container" style={{ margin: '30px' }}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>EmailId:</label>
                                    <input
                                        placeholder="EmailId"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>
                                <button
                                    className="btn btn-success"
                                    style={{ margin: '10px' }}
                                    onClick={saveEmployee}
                                >
                                    Save
                                </button>
                                <button className='btn btn-danger'
                                 style={{ margin: "10px" }} 
                                 onClick={() => { navigate('/employees'); }}>
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployeeComponent;
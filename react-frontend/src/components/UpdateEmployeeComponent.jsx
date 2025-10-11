import React, { useEffect, useState } from 'react';
import EmployeeService from '../Service/EmployeeService';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeById, updateEmployeeById } from '../state/employee/Action';

const UpdateEmployeeComponent = () => {
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

    const updateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName, lastName, emailId };
        dispatch(updateEmployeeById(id,employee));
        navigate('/employees');
    };

    return (
        <div>
            <div className="container" style={{ margin: '30px' }}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
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
                                    onClick={updateEmployee}
                                >
                                    Update
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

export default UpdateEmployeeComponent;
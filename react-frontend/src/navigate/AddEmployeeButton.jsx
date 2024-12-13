import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployeeButton = () =>{
    var navigate = useNavigate();
    return(
        <div>
            <button className='btn btn-primary' style={{margin:"10px"}} onClick={()=> navigate('/add-employee')}>
                Add Employee
            </button>
        </div>
    );
};

export default AddEmployeeButton;
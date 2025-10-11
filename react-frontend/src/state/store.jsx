import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from './employee/Reducer';

const store = configureStore({
    reducer: {
        employee: employeeReducer // state.employee.employees
    }
});

export default store;
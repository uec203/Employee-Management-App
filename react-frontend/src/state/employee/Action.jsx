import EmployeeService from "../../Service/EmployeeService";
import { CREATE_EMPLOYEE_FAILURE, CREATE_EMPLOYEE_REQUEST, CREATE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_BYID_FAILURE, DELETE_EMPLOYEE_BYID_REQUEST, DELETE_EMPLOYEE_BYID_SUCCESS, GET_EMPLOYEE_BYID_FAILURE, GET_EMPLOYEE_BYID_REQUEST, GET_EMPLOYEE_BYID_SUCCESS, GET_EMPLOYEE_LIST_FAILURE, GET_EMPLOYEE_LIST_REQUEST, GET_EMPLOYEE_LIST_SUCCESS, UPDATE_EMPLOYEE_BYID_FAILURE, UPDATE_EMPLOYEE_BYID_REQUEST, UPDATE_EMPLOYEE_BYID_SUCCESS } from "./ActionType";


export const getEmployeesList = () => async (dispatch) => {
    dispatch({type:GET_EMPLOYEE_LIST_REQUEST});

    try {
        const {data} = await EmployeeService.getEmployees();
        dispatch({
            type: GET_EMPLOYEE_LIST_SUCCESS,
            payload: data
        });   
    } catch (error) {
        dispatch({type: GET_EMPLOYEE_LIST_FAILURE,payload:error.message});
    }
}

export const getEmployeeById = (id) => async (dispatch) => {
    dispatch({type:GET_EMPLOYEE_BYID_REQUEST});

    try {
        const {data} = await EmployeeService.getEmployeeById(id);
        dispatch({
            type: GET_EMPLOYEE_BYID_SUCCESS,
            payload: data
        });   
    } catch (error) {
        dispatch({type: GET_EMPLOYEE_BYID_FAILURE,payload:error.message});
    }
}

export const updateEmployeeById = (id,employee) => async (dispatch) => {
    dispatch({type:UPDATE_EMPLOYEE_BYID_REQUEST});

    try {
        const {data} = await EmployeeService.updateEmployees(id,employee);
        dispatch({
            type: UPDATE_EMPLOYEE_BYID_SUCCESS,
            payload: data
        });   
    } catch (error) {
        dispatch({type: UPDATE_EMPLOYEE_BYID_FAILURE,payload:error.message});
    }
}

export const deleteEmployeeById = (id) => async (dispatch) => {
    dispatch({type:DELETE_EMPLOYEE_BYID_REQUEST});

    try {
        const {data} = await EmployeeService.deleteEmployee(id);
        dispatch({
            type: DELETE_EMPLOYEE_BYID_SUCCESS ,
            payload: data
        });   
    } catch (error) {
        dispatch({type: DELETE_EMPLOYEE_BYID_FAILURE,payload:error.message});
    }
}

export const createEmployeeById = (employee) => async (dispatch) => {
    dispatch({type:CREATE_EMPLOYEE_REQUEST});

    try {
        const {data} = await EmployeeService.addEmployees(employee);
        dispatch({
            type: CREATE_EMPLOYEE_SUCCESS ,
            payload: data
        });   
    } catch (error) {
        dispatch({type: CREATE_EMPLOYEE_FAILURE,payload:error.message});
    }
}
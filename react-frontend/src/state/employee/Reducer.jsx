import { GET_EMPLOYEE_BYID_FAILURE, GET_EMPLOYEE_BYID_REQUEST, GET_EMPLOYEE_BYID_SUCCESS, GET_EMPLOYEE_LIST_FAILURE, GET_EMPLOYEE_LIST_REQUEST, GET_EMPLOYEE_LIST_SUCCESS } from "./ActionType"


const initialState = {
    employees: [],
    employee:null,
    loading: false,
    error: null
};

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_LIST_REQUEST:
        case GET_EMPLOYEE_BYID_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_EMPLOYEE_LIST_SUCCESS:
            return { ...state, loading: false, employees: action.payload };
        case GET_EMPLOYEE_BYID_SUCCESS:
            return { ...state, loading: false, employee: action.payload };
        case GET_EMPLOYEE_BYID_FAILURE:
        case GET_EMPLOYEE_LIST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        
        default:
            return state;
    }
};
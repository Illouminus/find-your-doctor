import {DoctorAction, DoctorActionTypes, DoctorState} from "../types/doctor";


const initState:DoctorState = {
    doctors:[],
    loading:false,
    error: null
}

export const doctorReducer = (state = initState, action: DoctorAction): DoctorState => {
    switch (action.type) {
        case DoctorActionTypes.FETCH_DOCTORS:
            return {...state, error:null, loading:true, doctors:[]};
        case DoctorActionTypes.FETCH_DOCTORS_SUCCESS:
            console.log(action.payload, 'doctors success')
            return {...state, error: null, loading:false, doctors:action.payload};
        case DoctorActionTypes.FETCH_DOCTORS_ERROR:
            console.log(action.payload, 'doctors error')
            return {...state, error: action.payload, loading:false, doctors:[]};
        default:
            return state;
    }
}
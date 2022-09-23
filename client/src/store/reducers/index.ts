import {combineReducers} from "redux";
import {doctorReducer} from "./doctorReducer";
import { userReducer } from "./userReducer";
// import { appointmentsReducer } from "./appointmentsReducer"


export const rootReducer = combineReducers({
    doctor: doctorReducer,
    user: userReducer,
    // appointments: appointmentsReducer
})

export type RootState = ReturnType<typeof rootReducer>

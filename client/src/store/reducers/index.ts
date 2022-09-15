import {combineReducers} from "redux";
import {doctorReducer} from "./doctorReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    doctor: doctorReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

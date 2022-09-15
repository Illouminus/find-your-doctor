import {combineReducers} from "redux";
import {doctorReducer} from "./doctorReducer";


export const rootReducer = combineReducers({
    doctor: doctorReducer,

})

export type RootState = ReturnType<typeof rootReducer>

import { IUser } from "../../models/iUser";
import {UserAction, UserActionType, UserState} from "../types/user";


const initState:UserState = {
    user:{
      email: null,
      id: null,
      isActivated: null,
      first_name: null,
      last_name: null,
      isDoctor: null,
    },
    isAuth:false,
}

export const userReducer = (state = initState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.LOGIN_SUCCESS:
            return {...state, isAuth: true,  ...action.payload };
        case UserActionType.LOGIN_ERROR:
            return {...state, isAuth: false };
        case UserActionType.LOGOUT:
            return initState;
        default:
            return state;
    }
}
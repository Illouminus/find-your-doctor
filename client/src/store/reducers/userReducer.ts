import { IUser } from "../../models/iUser";
import {UserAction, UserActionType, UserState} from "../types/user";


const initState:UserState = {
    user :{} as IUser,
    isAuth:false,
}

export const userReducer = (state = initState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.LOGIN_SUCCESS:
            return {...state, isAuth: true, user: action.payload };
        case UserActionType.LOGIN_ERROR:
            return {...state, isAuth: false };
        case UserActionType.LOGOUT:
            return {...state, isAuth: false, user: {} as IUser };
        default:
            return state;
    }
}
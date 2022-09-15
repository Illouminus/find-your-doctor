import { IUser } from "../../models/iUser";

export interface UserState {
  user: IUser;
  isAuth:boolean;
}


export enum UserActionType {
  LOGIN_SUCCESS="LOGIN_SUCCESS",
  LOGIN_ERROR="LOGIN_ERROR",
  LOGOUT="LOGOUT"
}

interface FetchUserLoginSucces {
  type: UserActionType.LOGIN_SUCCESS;
  payload: IUser
}

interface FetchUserLoginError {
  type: UserActionType.LOGIN_ERROR;
  payload: string;
}

interface FetchUserLogout {
  type: UserActionType.LOGOUT;
  payload: string;
}

export type UserAction = FetchUserLoginSucces | FetchUserLoginError | FetchUserLogout

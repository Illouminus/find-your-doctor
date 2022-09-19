import { UserActionType} from '../types/user'
import {Dispatch} from "redux"
import AuthService from '../../services/AuthSerice';
import { IAllFields } from '../../components/Register/types';
import axios from 'axios';
import { AuthResponse } from '../../models/response/AuthResponse';
import { API_URL } from '../../http';


export const loginUser = (email:string, password:string) =>  async (dispatch: Dispatch) => {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accesToken)
            dispatch({type: UserActionType.LOGIN_SUCCESS, payload: response.data})
        } catch (e) {
          console.log(e);     
        }
    }


    export const loginDoc = (email:string, password:string) =>  async (dispatch: Dispatch) => {
      try {
          const response = await AuthService.loginDoc(email, password);
          console.log(response);
          localStorage.setItem('token', response.data.accesToken)
          dispatch({type: UserActionType.LOGIN_SUCCESS, payload: response.data})
      } catch (e) {
        console.log(e);     
      }
  }    

    export const registerUser = (object: IAllFields | {}) =>  async (dispatch: Dispatch) => {
      try {
          const response = await AuthService.register(object);
          console.log(response);
          
          localStorage.setItem('token', response.data.accesToken)
          dispatch({type: UserActionType.LOGIN_SUCCESS, payload: response.data})
      } catch (e) {
        console.log(e);
        
      }
    }

    export const registerDoc = (object: IAllFields | {}) =>  async (dispatch: Dispatch) => {
      console.log(object);
      
      try {
          const response = await AuthService.registerDoc(object);
          localStorage.setItem('token', response.data.accesToken)
          dispatch({type: UserActionType.LOGIN_SUCCESS, payload: response.data})
      } catch (e) {
        console.log(e);
        
      }
    }

      export const logoutUser = () =>  async (dispatch: Dispatch) => {
        try {
            await AuthService.logout();
            localStorage.removeItem('token')
            dispatch({type: UserActionType.LOGOUT})
        } catch (e) {
          console.log(e);
          
        }
      }

      export const logoutDoc = () =>  async (dispatch: Dispatch) => {
        try {
            await AuthService.logoutDoc();
            localStorage.removeItem('token')
            dispatch({type: UserActionType.LOGOUT})
        } catch (e) {
          console.log(e);
          
        }
      }

      export const checkAuthUser = () =>  async (dispatch: Dispatch) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true}  )
            console.log(response);
            localStorage.setItem('token', response.data.accesToken)
            dispatch({type: UserActionType.LOGIN_SUCCESS, payload: response.data})
        } catch (e) {
          console.log(e);
        }
      }

      export const checkAuthDoc = () =>  async (dispatch: Dispatch) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/doc/refresh`, {withCredentials: true}  )
            console.log(response);
            localStorage.setItem('token', response.data.accesToken)
            dispatch({type: UserActionType.LOGIN_SUCCESS, payload: response.data})
        } catch (e) {
          console.log(e);
        }
      }
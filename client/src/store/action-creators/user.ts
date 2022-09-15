import {UserAction, UserActionType} from '../types/user'
import {Dispatch} from "redux"
import axios from "axios";
import AuthService from '../../services/AuthSerice';
import { IAllFields } from '../../components/Register/types';



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
          console.log(response);
          
          localStorage.setItem('token', response.data.accesToken)
          dispatch({type: UserActionType.LOGIN_SUCCESS, payload: response.data})
      } catch (e) {
        console.log(e);
        
      }
    }

      export const logoutUser = () =>  async (dispatch: Dispatch) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token')
            dispatch({type: UserActionType.LOGOUT})
        } catch (e) {
          console.log(e);
          
        }
      }
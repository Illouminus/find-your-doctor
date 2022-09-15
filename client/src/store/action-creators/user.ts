import {UserAction, UserActionType} from '../types/user'
import {Dispatch} from "redux"
import axios from "axios";
import AuthService from '../../services/AuthSerice';



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

    export const registerUser = (email:string, password:string) =>  async (dispatch: Dispatch) => {
      try {
          const response = await AuthService.register(email, password);
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
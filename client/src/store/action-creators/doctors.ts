import {DoctorAction, DoctorActionTypes} from '../types/doctor'
import {Dispatch} from "redux"
import axios from "axios";
import {debounce} from 'lodash'

const getDoctors = async (dispatch:any, inputSpecialist:string, inputLocation:string) =>{
    const response = await axios.get(`/main/${inputSpecialist}/${inputLocation}`)
    dispatch({type: DoctorActionTypes.FETCH_DOCTORS_SUCCESS, payload: response.data})
}
const debouncedGet = debounce(getDoctors, 2000)
export const fetchDoctors = (inputSpecialist:string, inputLocation:string) =>  {
    return async (dispatch: Dispatch<DoctorAction>) => {



        try {

                dispatch({type: DoctorActionTypes.FETCH_DOCTORS})
                await debouncedGet(dispatch, inputSpecialist, inputLocation)

        } catch (e) {
            dispatch({
                type: DoctorActionTypes.FETCH_DOCTORS_ERROR,
                payload: 'Произошла ошибка при загрузке врачей',
            })
        }
    }
}
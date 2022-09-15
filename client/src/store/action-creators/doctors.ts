import {DoctorAction, DoctorActionTypes} from '../types/doctor'
import {Dispatch} from "redux"
import axios from "axios";



export const fetchDoctors = (inputSpecialist:string, inputLocation:string) =>  {
    return async (dispatch: Dispatch<DoctorAction>) => {

        try {

                dispatch({type: DoctorActionTypes.FETCH_DOCTORS})
                const response = await axios.get(`http://localhost:3100/main/${inputSpecialist}/${inputLocation}`)

                setTimeout(async() => {

                    dispatch({type: DoctorActionTypes.FETCH_DOCTORS_SUCCESS, payload: response.data})
                }, 2000)


        } catch (e) {
            dispatch({
                type: DoctorActionTypes.FETCH_DOCTORS_ERROR,
                payload: 'Произошла ошибка при загрузке врачей',
            })
        }
    }
}
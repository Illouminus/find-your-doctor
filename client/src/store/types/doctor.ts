export interface DoctorState {
    doctors:any[];
    loading:boolean;
    error: null | string;
}

export enum DoctorActionTypes {
    FETCH_DOCTORS='FETCH_DOCTORS',
    FETCH_DOCTORS_SUCCESS="FETCH_DOCTORS_SUCCESS",
    FETCH_DOCTORS_ERROR="FETCH_DOCTORS_ERROR"
}

interface FetchDoctorsAction {
    type: DoctorActionTypes.FETCH_DOCTORS;

}
interface FetchDoctorsSuccessAction {
    type: DoctorActionTypes.FETCH_DOCTORS_SUCCESS;
    payload: any[]
}
interface FetchDoctorsErrorAction {
    type: DoctorActionTypes.FETCH_DOCTORS_ERROR;
    payload: string;
}
export type DoctorAction = FetchDoctorsAction | FetchDoctorsSuccessAction | FetchDoctorsErrorAction


import { OneAppStateType } from './types'

export const initStateApp: OneAppStateType = {
  isVisible: false,
  appointment: {
    id: null,
    comments_doctor: null,
    comments_patient: null,
    date_time: '',
    first_time: null,
    status: false,
    doctor: {
      id: null,
      first_name: '',
      last_name: '',
      patronymic: null,
      experience: null,
      education: null,
      speciality: null,
      sex: null,
      adress: null,
    },
    patient: {
      id: null,
      first_name: '',
      last_name: '',
      patronymic: null,
      sex: null,
      email: null,
      telephone: null,
    },
  }
}
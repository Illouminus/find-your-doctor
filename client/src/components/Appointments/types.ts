export type AppStateType = {
  id: number
  comments_doctor: string | null
  comments_patient: string | null
  date_time: string
  first_time: boolean | null
  status: boolean
  doctor: {
    id: number | null
    first_name: string
    last_name: string
    patronymic: string | null
    experience: string | null
    education: string | null
    speciality: string | null
    sex: string | null
    adress: string | null
    photo: string | null
  }
  patient: {
    id: number | null
    first_name: string
    last_name: string
    patronymic: string | null
    sex: string | null
    email: string | null
    telephone: string | null
    photo: string | null
  }
  documents_id: any
}

export type OneAppStateType = {
  isVisible: boolean
  appointment: AppStateType
}
export type IRegForm = {
  email: string;
  password: string;
  telephone: string;
}

export type LoginFormType = {
  email: string;
  password: string;
}

export type IRegForm2 = {
  firstName: string;
  lastName: string;
  patronymic?: string;
  sex: string;
  adress: string;
  speciality: string;
  education?: string;
  experience?: string;
}

export type IRegForm3 = {
  firstName: string;
  lastName: string;
  patronymic?: string;
  sex: string;
}

export type IAllFields = IRegForm & IRegForm2;
export type PatientAllFields = IRegForm & IRegForm3;
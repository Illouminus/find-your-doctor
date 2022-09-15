import api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IAllFields } from '../components/Register/types';

export default class AuthService {

  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/login', { email, password })
  }

  static async loginDoc(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/doc/login', { email, password })
  }

  static async register(object: IAllFields | {}): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/register', object)
  }

  static async registerDoc(object: IAllFields | {}): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/doc/register',  object)
  }

  static async logout(): Promise<void> {
    return api.post('/logout')
  }

  static async logoutDoc(): Promise<void> {
    return api.post('/doc/logout')
  }
}
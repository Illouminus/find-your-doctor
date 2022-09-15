import api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {

  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/login', { email, password })
  }

  static async loginDoc(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/doc/login', { email, password })
  }

  static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/register', { email, password })
  }

  static async registerDoc(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/doc/register', { email, password })
  }

  static async logout(): Promise<void> {
    return api.post('/logout')
  }

  static async logoutDoc(): Promise<void> {
    return api.post('/doc/logout')
  }
}
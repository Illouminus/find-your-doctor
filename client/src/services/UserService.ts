import api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/iUser";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.get<IUser[]>('/users')
  }
} 
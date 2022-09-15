import { IUser } from "../iUser";

export interface AuthResponse {
  accesToken: string;
  refreshToken: string;
  user: IUser
}
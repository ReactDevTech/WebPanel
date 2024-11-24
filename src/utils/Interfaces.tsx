export interface IUser {
  id?: string | number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  role?: "admin" | "user" | "moderator";
}
export interface AuthState {
  user?: IUser;
  isAuthenticated?: boolean;
}

export interface RootState {
  auth?: AuthState;
}

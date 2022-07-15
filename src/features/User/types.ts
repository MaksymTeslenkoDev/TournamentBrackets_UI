export interface User {
  name: string;
  email: string;
  password: string;
  icon?: string;
}
export type AppUser = Readonly<Omit<User, "password">>;
export type ReadonlyUser = Readonly<User>;
export type LoginUser = Readonly<Omit<User, "name" | "icon">>;

export enum AuthStatus {
  UnAuthorized = "unAuthorized",
  Authorized = "authorized",
}

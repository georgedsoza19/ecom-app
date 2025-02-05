import { jwtDecode } from "jwt-decode";
import appConstants from "./constants";
import { JWTDecodedUser } from "../interfaces/auth";

export const removeAppTokens = (): void => {
  localStorage.removeItem(appConstants.ACCESS_TOKEN);
  sessionStorage.clear();
};

export const setAppTokens = (token: string): void => {
  localStorage.setItem(appConstants.ACCESS_TOKEN, token);
};

export const isAuthenticated = (): boolean => {
  if (typeof window == "undefined") return false;

  try {
    const token = localStorage.getItem(appConstants.ACCESS_TOKEN);
    if (token) {
      const user: JWTDecodedUser = jwtDecode(token);
      const dateNow = new Date();

      if (user?.exp > dateNow.getTime() / 1000) {
        return true;
      }
      removeAppTokens();
    }
  } catch (error: any) {
    removeAppTokens();
  }

  return false;
};

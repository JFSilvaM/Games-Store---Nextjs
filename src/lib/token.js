import { ENV } from "@/config/env";
import { jwtDecode } from "jwt-decode";

export const setTokenInLocalStorage = (token) =>
  localStorage.setItem(ENV.TOKEN, token);

export const getTokenFromLocalStorage = () => localStorage.getItem(ENV.TOKEN);

export const removeToken = () => localStorage.removeItem(ENV.TOKEN);

export const hasExpired = (token) => {
  const tokenDecode = jwtDecode(token);
  const expiredDate = tokenDecode.exp * 1000;
  const currentDate = new Date().getTime();

  return currentDate > expiredDate;
};

import { ENV } from "@/config/env";

export const setTokenInLocalStorage = (token) => {
  localStorage.setItem(ENV.TOKEN, token);
};

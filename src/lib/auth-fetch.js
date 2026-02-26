import { getTokenFromLocalStorage, hasExpired, removeToken } from "@/lib/token";

export const authFetch = async (url, params) => {
  const token = getTokenFromLocalStorage();

  const logout = () => {
    removeToken();
    window.location.replace("/");
  };

  if (!token || hasExpired(token)) {
    logout();
  }

  const paramsTemp = {
    ...params,
    headers: {
      ...params?.headers,
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    return await fetch(url, paramsTemp);
  } catch (error) {
    return error;
  }
};

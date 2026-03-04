"use client";

import {
  getTokenFromLocalStorage,
  hasExpired,
  removeToken,
  setTokenInLocalStorage,
} from "@/lib/token";
import { getUser } from "@/lib/user";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = getTokenFromLocalStorage();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (hasExpired(token)) {
        logout();
      }

      await login(token);
    })();
  }, []);

  const login = async (token) => {
    try {
      if (!token) return;
      setTokenInLocalStorage(token);
      const userResponse = await getUser();
      setUser(userResponse);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = () => {
    removeToken();
    setToken(null);
    setUser(null);
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    setUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

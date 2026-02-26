import { ENV } from "@/config/env";
import { authFetch } from "@/lib/auth-fetch";

export const getUser = async () => {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

    const response = await authFetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

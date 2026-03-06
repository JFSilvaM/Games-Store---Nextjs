import { ENV } from "@/config/env";
import { authFetch } from "@/lib/auth-fetch";

export const createAddress = async (data, userId) => {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { ...data, user: userId } }),
    };

    const response = await authFetch(url, params);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllAddress = async (userId) => {
  try {
    const filters = `filters[user][id][$eq]=${userId}`;
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`;

    const response = await authFetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

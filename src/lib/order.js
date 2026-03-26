import { ENV } from "@/config/env";
import { authFetch } from "@/lib/auth-fetch";

export const getOrders = async (userId) => {
  try {
    const filters = `filters[user][id][$eq]=${userId}`;
    const sort = "sort[0]=createdAt:desc";
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDER}?${filters}&${sort}`;

    const response = await authFetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

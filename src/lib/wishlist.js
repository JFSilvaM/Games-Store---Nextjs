import { ENV } from "@/config/env";
import { authFetch } from "@/lib/auth-fetch";

export const wishlistCheck = async (userId, gameId) => {
  try {
    const filterUser = `filters[user][id][$eq][0]=${userId}`;
    const filterGame = `filters[game][id][$eq][1]=${gameId}`;
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${filterUser}&${filterGame}`;

    const response = await authFetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const addGameToWishlist = async (userId, gameId) => {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`;
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          user: userId,
          game: gameId,
        },
      }),
    };

    const response = await authFetch(url, params);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteGameFromWishlist = async (id) => {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}/${id}`;
    const params = { method: "DELETE" };

    const response = await authFetch(url, params);

    if (response.status === 204) return { success: true };

    return await response.json();
  } catch (error) {
    throw error;
  }
};

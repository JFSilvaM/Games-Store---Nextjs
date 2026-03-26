import { ENV } from "@/config/env";
import { authFetch } from "@/lib/auth-fetch";

export const addCart = (gameData) => {
  const games = getCart();
  const objIndex = games.findIndex((game) => game.id === gameData.id);

  if (objIndex < 0) {
    games.push({
      id: gameData.id,
      documentId: gameData.documentId,
      quantity: 1,
    });
  } else {
    games[objIndex].quantity += 1;
  }

  localStorage.setItem(ENV.CART, JSON.stringify(games));
};

export const getCart = () => {
  const response = localStorage.getItem(ENV.CART);

  if (!response) return [];

  return JSON.parse(response);
};

export const countCart = () => {
  let count = 0;
  getCart().forEach((item) => (count += item.quantity));
  return count;
};

export const changeQuantity = (gameId, quantity) => {
  const games = getCart();
  const objIndex = games.findIndex((game) => game.id === gameId);

  games[objIndex].quantity = quantity;

  localStorage.setItem(ENV.CART, JSON.stringify(games));
};

export const deleteGameCart = (gameId) => {
  const games = getCart();
  const updateGames = games.filter((game) => game.id !== gameId);

  localStorage.setItem(ENV.CART, JSON.stringify(updateGames));
};

export const deleteCart = () => localStorage.removeItem(ENV.CART);

export const paymentCart = async (token, products, idUser, address) => {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT_ORDER}`;
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token,
        products,
        idUser,
        addressShipping: address,
      }),
    };

    return await authFetch(url, params);
  } catch (error) {
    throw error;
  }
};

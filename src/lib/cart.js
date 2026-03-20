import { ENV } from "@/config/env";

export const addCart = (gameId) => {
  const games = getCart();
  const objIndex = games.findIndex((game) => game.id === gameId);

  if (objIndex < 0) {
    games.push({ id: gameId, quantity: 1 });
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

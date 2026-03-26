"use client";

import {
  addCart as addGameToCart,
  changeQuantity,
  countCart,
  deleteCart,
  deleteGameCart,
  getCart,
} from "@/lib/cart";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(countCart());

  const refreshCountCart = () => {
    setTotal(countCart());
    setCart(getCart());
  };

  const addCart = (gameData) => {
    addGameToCart(gameData);
    refreshCountCart();
  };

  const changeQuantityItem = (gameId, quantity) => {
    changeQuantity(gameId, quantity);
    refreshCountCart();
  };

  const deleteItem = (gameId) => {
    deleteGameCart(gameId);
    refreshCountCart();
  };

  const deleteAllItems = () => {
    deleteCart();
    refreshCountCart();
  };

  useEffect(() => {
    setCart(getCart());
  }, []);

  const data = {
    cart,
    total,
    addCart,
    deleteItem,
    deleteAllItems,
    changeQuantityItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

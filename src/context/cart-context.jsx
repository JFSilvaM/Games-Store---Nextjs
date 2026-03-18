"use client";

import { addCart, getCart } from "@/lib/cart";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const data = {
    cart,
    total,
    addCart,
    deleteItem: () => {},
    deleteAllItems: () => {},
    changeQuantityItem: () => {},
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

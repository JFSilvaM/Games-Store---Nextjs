"use client";

import CartLayout from "@/components/cart/cart-layout";
import { useCart } from "@/hooks/use-cart";
import { getGameById } from "@/lib/game";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CartPage = () => {
  const currentStep = Number(useSearchParams().get("step")) || 1;
  const { cart } = useCart();

  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        cart?.map(async (item) => {
          const res = await getGameById(item.documentId);
          setGames((prevGames) => [
            ...prevGames,
            { ...res.data, quantity: item.quantity },
          ]);
        });
      } catch (error) {
        throw error;
      }
    })();
  }, [cart]);

  console.log(games);

  return (
    <CartLayout>
      {currentStep === 1 && <p>Step 1</p>}
      {currentStep === 2 && <p>Step 2</p>}
      {currentStep === 3 && <p>Step 3</p>}
    </CartLayout>
  );
};

export default CartPage;

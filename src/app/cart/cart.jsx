"use client";

import CartLayout from "@/components/cart/cart-layout";
import StepOne from "@/components/cart/components/step-one/step-one";
import StepThree from "@/components/cart/components/step-three";
import StepTwo from "@/components/cart/components/step-two/step-two";
import { useCart } from "@/hooks/use-cart";
import { getGameById } from "@/lib/game";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Cart = () => {
  const currentStep = Number(useSearchParams().get("step")) || 1;
  const { cart } = useCart();

  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const gameData = await Promise.all(
          cart?.map(async (item) => {
            const res = await getGameById(item.documentId);
            return { ...res.data, quantity: item.quantity };
          }) || [],
        );

        setGames(gameData);
      } catch (error) {
        throw error;
      }
    })();
  }, [cart]);

  return (
    <CartLayout>
      {currentStep === 1 && <StepOne games={games} />}
      {currentStep === 2 && <StepTwo games={games} />}
      {currentStep === 3 && <StepThree />}
    </CartLayout>
  );
};

export default Cart;

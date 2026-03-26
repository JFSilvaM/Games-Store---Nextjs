import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/hooks/use-cart";
import { paymentCart } from "@/lib/cart";
import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import { Button } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Resume = ({ games, addressSelected }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { deleteAllItems } = useCart();

  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  const onPay = async () => {
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);

    if (result.error) console.error(result.error.message);

    if (!result.error)
      await paymentCart(result.token, games, user.id, addressSelected).finally(
        () => {
          deleteAllItems();
          goToEndStep();
        },
      );

    setLoading(false);
  };

  const goToEndStep = () => router.push("/cart?step=3");

  useEffect(() => {
    let totalTemp = 0;

    games.forEach((game) => {
      const price = calcDiscountedPrice(game.price, game.discount);
      totalTemp += price * game.quantity;
    });

    setTotal(totalTemp.toFixed(2));
  }, [games]);

  return (
    total && (
      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-bold">Resumen</h2>

        <div className="flex flex-col gap-3 rounded-md bg-neutral-700 p-5">
          {games.map((game) => (
            <div
              key={game.id}
              className="flex items-center justify-between border-b border-neutral-400 pb-3 text-neutral-400 last-of-type:border-0 last-of-type:pb-0"
            >
              <div>
                <p className="text-foreground font-semibold">{game.title}</p>

                <span className="text-sm">{game.platform.title}</span>
              </div>

              <span>
                {game.quantity > 0 && `${game.quantity} x `}
                {calcDiscountedPrice(game.price, game.discount)}€
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 rounded-md bg-neutral-700 p-5">
          <div className="flex justify-between text-xl font-semibold">
            <span>Total</span>

            <span>{total}€</span>
          </div>

          <Button
            disabled={!addressSelected}
            onClick={onPay}
            className={`text-foreground flex justify-center rounded-md bg-orange-600 px-5 py-2 outline-none ${!addressSelected ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-orange-400"}`}
          >
            {loading ? (
              <ArrowPathIcon className="size-6 animate-spin" />
            ) : (
              "Pagar"
            )}
          </Button>
        </div>
      </div>
    )
  );
};

export default Resume;

import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";

const Resume = ({ games, addressSelected }) => {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    let totalTemp = 0;

    games.forEach((game) => {
      const price = calcDiscountedPrice(game.price, game.discount);
      totalTemp += price * game.quantity;
    });

    setTotal(totalTemp.toFixed(2));
  }, [games]);

  return (
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
          className={`text-foreground rounded-md bg-orange-600 px-5 py-2 outline-none ${!addressSelected ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-orange-400"}`}
        >
          Pagar
        </Button>
      </div>
    </div>
  );
};

export default Resume;

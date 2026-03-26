import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Resume = ({ games }) => {
  const router = useRouter();

  const [totals, setTotals] = useState(null);

  const goToStepTwo = () => router.push("/cart?step=2");

  useEffect(() => {
    let totals = { original: 0, discount: 0, price: 0 };

    games.forEach((game) => {
      totals.original += game.price * game.quantity;
      totals.discount +=
        (game.price - calcDiscountedPrice(game.price, game.discount)) *
        game.quantity;
      totals.price +=
        calcDiscountedPrice(game.price, game.discount) * game.quantity;
    });

    setTotals(totals);
  }, [games]);

  return (
    totals && (
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Resumen</h2>

        <div className="flex flex-col gap-5 rounded-md bg-neutral-700 p-5 text-neutral-400">
          <div>
            <div className="flex justify-between">
              <span>Precio oficial</span>

              <span>{totals.original.toFixed(2)}€</span>
            </div>

            <div className="flex justify-between">
              <span>Descuento</span>

              <span>{totals.discount.toFixed(2)}€</span>
            </div>

            <div className="text-foreground flex justify-between pt-5 font-semibold">
              <span>Subtotal</span>

              <span>{totals.price.toFixed(2)}€</span>
            </div>
          </div>

          <Button
            onClick={goToStepTwo}
            disabled={!games.length}
            className={`text-foreground flex justify-center rounded-md bg-orange-600 px-5 py-2 outline-none ${!games.length ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-orange-400"}`}
          >
            Proceder con el pago
          </Button>

          <Link href="/" className="text-center text-sm">
            Continuar comprando
          </Link>
        </div>
      </div>
    )
  );
};

export default Resume;

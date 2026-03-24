import { ENV } from "@/config/env";
import { useCart } from "@/hooks/use-cart";
import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const Basket = ({ games }) => {
  const { changeQuantityItem, deleteItem } = useCart();

  return (
    <div className="col-span-2 flex flex-col gap-4">
      <h2 className="text-lg font-bold">Cesta</h2>

      <div className="flex flex-col gap-5 rounded-md bg-neutral-700 p-5">
        {games.map((game) => (
          <div
            key={game.documentId}
            className="flex gap-5 border-b border-neutral-500 pb-5 last-of-type:mb-0 last-of-type:border-b-0 last-of-type:pb-0"
          >
            <div className="h-28 w-52">
              <Image
                src={`${ENV.SERVER_HOST}${game.cover.url}`}
                alt={game.cover.name}
                width={165}
                height={165}
                loading="eager"
                unoptimized
                className="h-full w-full rounded-md object-cover"
              />
            </div>

            <div className="flex w-full justify-between">
              <div className="flex flex-col justify-between py-0.5">
                <div>
                  <p className="font-semibold">{game.title}</p>

                  <p className="text-sm text-neutral-400">
                    {game.platform.title}
                  </p>
                </div>

                <TrashIcon
                  onClick={() => deleteItem(game.id)}
                  className="size-4 cursor-pointer hover:text-orange-600"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <MinusCircleIcon
                    onClick={() =>
                      changeQuantityItem(
                        game.id,
                        Math.max(1, game.quantity - 1),
                      )
                    }
                    className="size-4 cursor-pointer hover:text-orange-600"
                  />

                  {game.quantity}

                  <PlusCircleIcon
                    onClick={() =>
                      changeQuantityItem(game.id, game.quantity + 1)
                    }
                    className="size-4 cursor-pointer hover:text-orange-600"
                  />
                </div>

                <span className="font-semibold">
                  {calcDiscountedPrice(game.price, game.discount)}€
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;

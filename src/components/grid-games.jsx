import { ENV } from "@/config/env";
import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import Image from "next/image";
import Link from "next/link";
import DiscountLabel from "./discount-label";

const GridGames = ({ games }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {games.map((game) => (
        <Link key={game.id} href={game.slug}>
          <div className="relative hover:opacity-60">
            <Image
              src={`${ENV.SERVER_HOST}${game.cover.url}`}
              alt={game.cover.name}
              width={165}
              height={165}
              unoptimized
              className="h-60 w-full rounded-md object-cover"
            />

            {game.discount > 0 && (
              <div className="text-foreground absolute bottom-2 left-2 z-10">
                <DiscountLabel>-{game.discount}%</DiscountLabel>
              </div>
            )}
          </div>

          <div className="text-foreground flex justify-between px-0.5">
            <div className="flex items-center">
              <span>{game.title}</span>
            </div>

            <span className="flex text-lg">
              {calcDiscountedPrice(game.price, game.discount)}€
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GridGames;

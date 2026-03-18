import DiscountLabel from "@/components/discount-label";
import WishlistButton from "@/components/wishlist-button";
import { ENV } from "@/config/env";
import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import Image from "next/image";
import Link from "next/link";

const GridGames = ({ wishlist, onReload }) => (
  <div className="grid grid-cols-3 gap-4">
    {wishlist.map((item) => {
      const game = item.game;

      return (
        <div key={item.id} className="relative">
          <Link href={`/${game.slug}`}>
            <div className="relative hover:opacity-60">
              <Image
                src={`${ENV.SERVER_HOST}${game.cover.url}`}
                alt={game.cover.name}
                width={165}
                height={165}
                loading="eager"
                unoptimized
                className="h-60 w-full rounded-md object-cover"
              />

              {game.discount && (
                <div className="text-foreground absolute bottom-2 left-2 z-10">
                  <DiscountLabel>{`-${game.discount}%`}</DiscountLabel>
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

          <WishlistButton
            gameData={game}
            removeCallback={onReload}
            className="absolute top-2 right-2 size-7"
          />
        </div>
      );
    })}
  </div>
);

export default GridGames;

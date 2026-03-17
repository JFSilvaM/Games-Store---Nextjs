import Container from "@/components/container";
import Wishlist from "@/components/wishlist";
import { ENV } from "@/config/env";
import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import { Button } from "@headlessui/react";
import { CheckIcon, TagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Panel = ({ gameData }) => {
  const buyPrice = calcDiscountedPrice(gameData.price, gameData.discount);

  return (
    <Container fluid className="relative -mt-36 flex gap-5">
      <div className="h-80 w-full">
        <Image
          src={`${ENV.SERVER_HOST}${gameData.cover.url}`}
          alt={gameData.cover.name}
          width={165}
          height={165}
          unoptimized
          loading="eager"
          className="h-full w-full rounded-md object-cover"
        />
      </div>

      <div className="flex h-fit w-full flex-col items-center gap-2 rounded-md bg-neutral-700/10 p-5 backdrop-blur-sm">
        <h2 className="text-2xl">{gameData.title}</h2>

        <div className="flex rounded-full bg-neutral-700/10 py-2 text-sm backdrop-blur-sm">
          <span className="flex items-center gap-1 border-r border-neutral-800 px-4">
            <Image
              src={`${ENV.SERVER_HOST}${gameData.platform.icon.url}`}
              alt={gameData.platform.icon.name}
              width={165}
              height={165}
              unoptimized
              loading="eager"
              className="size-5 invert-100"
            />

            {gameData.platform.title}
          </span>

          <span className="flex items-center gap-2 px-4">
            <CheckIcon className="size-5 text-green-500" />
            En stock
          </span>
        </div>

        <div className="flex items-center gap-4 py-7">
          {gameData.discount && (
            <>
              <span className="flex items-center gap-2 text-lg line-through">
                <TagIcon className="size-5" />
                {gameData.price}€
              </span>

              <span className="text-lg text-orange-600">
                -{gameData.discount}%
              </span>
            </>
          )}

          <span className="text-4xl">{buyPrice}€</span>
        </div>

        <Link href="#" className="w-full">
          <Button className="text-foreground w-full cursor-pointer rounded-md bg-orange-600 px-5 py-2 outline-none hover:bg-orange-400">
            Comprar ahora
          </Button>
        </Link>

        <Wishlist gameId={gameData.id} className="absolute right-5 size-7" />
      </div>
    </Container>
  );
};

export default Panel;

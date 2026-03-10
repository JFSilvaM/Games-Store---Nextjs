"use client";

import Container from "@/components/container";
import DiscountLabel from "@/components/discount-label";
import { ENV } from "@/config/env";
import { getLastPublishedGame } from "@/lib/game";
import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LastPublishedGame = () => {
  const [game, setGame] = useState(null);

  const releaseDate = () => {
    if (!game) return;
    const newReleaseDate = new Date(game.releaseDate).toISOString();
    return DateTime.fromISO(newReleaseDate).minus({ days: 1 }).toRelative();
  };

  const gamePrice = () => {
    if (!game) return;
    return calcDiscountedPrice(game.price, game.discount);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await getLastPublishedGame();
        setGame(response.data[0]);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    game && (
      <div className="relative h-125 after:absolute after:-bottom-0.5 after:h-16 after:w-full after:bg-neutral-800 after:[clip-path:polygon(0_100%,100%_100%,0_0)]">
        <Image
          src={`${ENV.SERVER_HOST}${game.wallpaper.url}`}
          alt={game.wallpaper.name}
          width={165}
          height={165}
          unoptimized
          loading="eager"
          className="h-full w-full object-cover"
        />

        <Link
          href={game.slug}
          className="absolute top-0 left-0 flex h-full w-full items-center"
        >
          <Container fluid>
            <span className="text-xs font-bold text-orange-600">
              {releaseDate()}
            </span>

            <h2 className="text-foreground mt-1.5 mb-5 text-3xl">
              {game.title}
            </h2>

            <p className="text-foreground flex items-center">
              <DiscountLabel>-{game.discount}%</DiscountLabel>

              <span className="ml-16 text-3xl">{gamePrice()}€</span>
            </p>
          </Container>
        </Link>
      </div>
    )
  );
};

export default LastPublishedGame;

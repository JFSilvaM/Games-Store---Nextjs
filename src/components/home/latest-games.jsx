"use client";

import GridGames from "@/components/grid-games";
import { getLatestPublishedGames } from "@/lib/game";
import { useEffect, useState } from "react";

const LatestGames = ({ title, limit = 9, platformId = null }) => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getLatestPublishedGames(limit, platformId);
        setGames(response.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    games && (
      <div className="flex flex-col gap-5 py-8">
        <h2 className="text-lg">{title}</h2>

        <GridGames games={games} />
      </div>
    )
  );
};

export default LatestGames;

import BasicLayout from "@/components/basic-layout";
import HeaderWallpaper from "@/components/game/header-wallpaper";
import { getGameBySlug } from "@/lib/game";

const GamePage = async ({ params }) => {
  const { game } = await params;
  const gameDataRes = await getGameBySlug(game);

  const gameData = gameDataRes.data[0];

  return (
    <BasicLayout>
      <HeaderWallpaper image={gameData.wallpaper} />
    </BasicLayout>
  );
};

export default GamePage;

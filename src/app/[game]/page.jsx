import BasicLayout from "@/components/basic-layout";
import HeaderWallpaper from "@/components/game/header-wallpaper";
import Info from "@/components/game/info";
import Panel from "@/components/game/panel";
import { getGameBySlug } from "@/lib/game";

const GamePage = async ({ params }) => {
  const { game } = await params;
  const gameDataRes = await getGameBySlug(game);

  const gameData = gameDataRes.data[0];

  return (
    <BasicLayout>
      <HeaderWallpaper image={gameData.wallpaper} />

      <Panel gameData={gameData} />

      <Info gameData={gameData} />
    </BasicLayout>
  );
};

export default GamePage;

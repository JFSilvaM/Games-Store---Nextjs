import BasicLayout from "@/components/basic-layout";
import HeaderWallpaper from "@/components/game/header-wallpaper";
import Info from "@/components/game/info";
import Media from "@/components/game/media/media";
import Panel from "@/components/game/panel";
import { getGameBySlug } from "@/lib/game";

export async function generateMetadata({ params }) {
  const { game } = await params;
  const gameRes = await getGameBySlug(game);

  return { title: gameRes.data[0].title, description: gameRes.data[0].summary };
}

const GamePage = async ({ params }) => {
  const { game } = await params;
  const gameDataRes = await getGameBySlug(game);

  const gameData = gameDataRes.data[0];

  return (
    <BasicLayout>
      <HeaderWallpaper image={gameData.wallpaper} />

      <Panel gameData={gameData} />

      <Info gameData={gameData} />

      <Media gameData={gameData} />
    </BasicLayout>
  );
};

export default GamePage;

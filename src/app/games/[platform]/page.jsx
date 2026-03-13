import BasicLayout from "@/components/basic-layout";
import Container from "@/components/container";
import GridGames from "@/components/grid-games";
import NoResult from "@/components/no-result";
import Pagination from "@/components/pagination";
import { getGamesByPlatformSlug } from "@/lib/game";
import { getPlatformBySlug } from "@/lib/platform";

const PlatformPage = async ({ params, searchParams }) => {
  const { platform } = await params;
  const { page = 1 } = await searchParams;
  const gamePlatformRes = await getPlatformBySlug(platform);
  const gamesRes = await getGamesByPlatformSlug(platform, page);

  const gamePlatform = gamePlatformRes.data[0];
  const games = gamesRes.data;
  const pagination = gamesRes.meta.pagination;

  return (
    <BasicLayout relative>
      <Container fluid className="flex flex-col gap-5 pt-10 pb-20">
        <h2 className="text-2xl">{gamePlatform?.title}</h2>

        {games ? (
          <>
            <GridGames games={games} />

            <Pagination pagination={pagination} />
          </>
        ) : (
          <NoResult
            text={`La categoría ${gamePlatform?.title} aún no tiene productos.`}
          />
        )}
      </Container>
    </BasicLayout>
  );
};

export default PlatformPage;

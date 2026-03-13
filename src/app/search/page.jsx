import SearchClientPage from "@/app/search/client";
import { searchGames } from "@/lib/game";

const SearchPage = async ({ searchParams }) => {
  const { page = 1, searchText } = await searchParams;
  const searchGamesRes = await searchGames(searchText, page);

  const games = searchGamesRes.data;
  const pagination = searchGamesRes.meta.pagination;

  return (
    <SearchClientPage
      games={games}
      pagination={pagination}
      searchText={searchText}
    />
  );
};

export default SearchPage;

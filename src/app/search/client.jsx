"use client";

import BasicLayout from "@/components/basic-layout";
import Container from "@/components/container";
import GridGames from "@/components/grid-games";
import NoResult from "@/components/no-result";
import Pagination from "@/components/pagination";
import { useEffect } from "react";

const SearchClientPage = ({ games, pagination, searchText }) => {
  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);

  return (
    <BasicLayout relative isOpenSearch>
      <Container fluid className="flex flex-col gap-5 pt-10 pb-20">
        <h2 className="text-2xl">Buscando: {searchText}</h2>

        {games ? (
          <>
            <GridGames games={games} />

            <Pagination pagination={pagination} searchText={searchText} />
          </>
        ) : (
          <NoResult text="No se han encontrado resultados." />
        )}
      </Container>
    </BasicLayout>
  );
};

export default SearchClientPage;

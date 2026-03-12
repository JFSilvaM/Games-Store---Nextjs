import BannerAd from "@/components/banner-ad";
import BarTrust from "@/components/bar-trust/bar-trust";
import BasicLayout from "@/components/basic-layout";
import Container from "@/components/container";
import LastPublishedGame from "@/components/home/last-published-game";
import LatestGames from "@/components/home/latest-games";

const platformsId = {
  playstation: 10,
  xbox: 11,
  nintendo: 12,
  pc: 9,
};

const Home = () => (
  <BasicLayout>
    <LastPublishedGame />

    <Container fluid>
      <LatestGames title="Últimos lanzamientos" />
    </Container>

    <BarTrust />

    <Container fluid>
      <LatestGames
        title="PlayStation"
        limit={3}
        platformId={platformsId.playstation}
      />
    </Container>

    <BannerAd
      title="Regístrate y obtén los mejores precios"
      subtitle="¡Compara con otros juegos y elige el tuyo!"
      btnTitle="Entrar ahora"
      btnLink="/profile"
      image="/img01.png"
    />

    <Container fluid className="mb-20">
      <LatestGames
        title="Nintendo"
        limit={3}
        platformId={platformsId.nintendo}
      />
    </Container>
  </BasicLayout>
);

export default Home;

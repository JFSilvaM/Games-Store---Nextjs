import BarTrust from "@/components/bar-trust/bar-trust";
import BasicLayout from "@/components/basic-layout";
import Container from "@/components/container";
import LastPublishedGame from "@/components/home/last-published-game";
import LatestGames from "@/components/home/latest-games";

const Home = () => (
  <BasicLayout>
    <LastPublishedGame />

    <Container fluid>
      <LatestGames title="Últimos lanzamientos" />
    </Container>

    <BarTrust />
  </BasicLayout>
);

export default Home;

import Container from "@/components/container";

const Info = ({ gameData }) => (
  <Container fluid className="flex gap-5 py-5">
    <p className="w-full text-neutral-400">{gameData.summary}</p>

    <ul className="w-full list-none">
      <li>
        <span className="text-neutral-400">Fecha de lanzamiento: </span>
        {gameData.releaseDate}
      </li>
    </ul>
  </Container>
);

export default Info;

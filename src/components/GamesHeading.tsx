import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  const platform = gameQuery.platform?.name;
  const genre = gameQuery.genre?.name;
  const text = `${platform ?? ""} ${genre ?? ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {text}
    </Heading>
  );
};

export default GamesHeading;

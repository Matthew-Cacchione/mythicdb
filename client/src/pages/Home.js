import styled from "styled-components";

import Card from "../components/Card";

import { PATHS, STRINGS } from "../constants";

const Home = () => {
  return (
    <Wrapper>
      <Card
        description={STRINGS.cards.intro.description}
        title={STRINGS.cards.intro.title}
      />
      <Card
        description={STRINGS.cards.newPlayer.description}
        title={STRINGS.cards.newPlayer.title}
        path={PATHS.newPlayer}
      />
      <Card
        description={STRINGS.cards.affixes.description}
        title={STRINGS.cards.affixes.title}
        path={PATHS.affixes}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export default Home;

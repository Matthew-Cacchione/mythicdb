import styled from "styled-components";

import Card from "../components/Card";

import { STRINGS } from "../constants";

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
        path={STRINGS.paths.newPlayer}
      />
      <Card
        description={STRINGS.cards.affixes.description}
        title={STRINGS.cards.affixes.title}
        path={STRINGS.paths.affixes}
      />
      <Card
        description={STRINGS.cards.leaderboard.description}
        title={STRINGS.cards.leaderboard.title}
        path={STRINGS.paths.leaderboard}
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

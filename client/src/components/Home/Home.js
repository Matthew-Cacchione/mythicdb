import styled from "styled-components";

import Card from "./Card";

import { STRINGS } from "../../constants";

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
      />
      <Card
        description={STRINGS.cards.affixes.description}
        title={STRINGS.cards.affixes.title}
      />
      <Card
        description={STRINGS.cards.leaderboard.description}
        title={STRINGS.cards.leaderboard.title}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export default Home;

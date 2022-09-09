import styled from "styled-components";

import BlankLink from "../components/BlankLink";
import Card from "../components/Card";

import { PATHS, STRINGS } from "../constants";

const Home = () => {
  return (
    <Wrapper>
      <Card
        description={STRINGS.cards.intro.description}
        title={STRINGS.cards.intro.title}
      />
      <BlankLink path={PATHS.newPlayer}>
        <Card
          description={STRINGS.cards.newPlayer.description}
          title={STRINGS.cards.newPlayer.title}
          filled
        />
      </BlankLink>
      <BlankLink path={PATHS.affixes}>
        <Card
          description={STRINGS.cards.affixes.description}
          title={STRINGS.cards.affixes.title}
          filled
        />
      </BlankLink>
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

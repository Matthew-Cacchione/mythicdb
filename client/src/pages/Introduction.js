import styled from "styled-components";

import Card from "../components/Card";

import { DATA, STRINGS } from "../constants";

const Introduction = () => {
  return (
    <Wrapper>
      <Card
        description={STRINGS.newPlayer.introduction.description}
        title={STRINGS.newPlayer.introduction.title}
      />
      <Card
        description={STRINGS.newPlayer.keyExplanation.description}
        title={STRINGS.newPlayer.keyExplanation.title}
      >
        <Keystones>
          <Row>
            <th>Keystone Level</th>
            <th>Increased Health and Damage</th>
          </Row>
          {DATA.keystones.map((keystone) => {
            return (
              <Row>
                <td>{keystone.level}</td>
                <td>{keystone.scaling}%</td>
              </Row>
            );
          })}
        </Keystones>
      </Card>
    </Wrapper>
  );
};

const Keystones = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Row = styled.tr`
  & > td,
  & > th {
    border: 2px solid var(--color-secondary);
    text-align: center;
    padding: 0.4em;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export default Introduction;

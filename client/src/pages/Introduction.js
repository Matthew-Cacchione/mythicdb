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
        <Table>
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
        </Table>
        <Note>Note: This list is not comprehensive</Note>
      </Card>
      <Card
        description={STRINGS.newPlayer.gear.description}
        title={STRINGS.newPlayer.gear.title}
      >
        <Table>
          <Row>
            <th>Keystone Level</th>
            <th>Dungeon Chest</th>
            <th>Great Vault</th>
          </Row>
          {DATA.keystones
            .slice(0, DATA.keystones.length - 1)
            .map((keystone) => {
              return (
                <Row>
                  <td>{keystone.level}</td>
                  <td>{keystone.chest}</td>
                  <td>{keystone.vault}</td>
                </Row>
              );
            })}
        </Table>
        <Note>Note: Gear rewards cap at +15</Note>
      </Card>
      <Card
        description={STRINGS.newPlayer.affixes.description}
        path={STRINGS.paths.affixes}
        title={STRINGS.newPlayer.affixes.title}
      />
    </Wrapper>
  );
};

const Note = styled.p`
  color: var(--color-error);
  line-height: 1.3em;
  text-align: center;
  white-space: pre-wrap;
`;

const Row = styled.tr`
  & > td,
  & > th {
    border: 2px solid var(--color-secondary);
    text-align: center;
    padding: 0.4em;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export default Introduction;

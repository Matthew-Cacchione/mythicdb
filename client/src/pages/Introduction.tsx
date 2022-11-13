// Required libraries.
import styled from "styled-components";

// Required components.
import BlankLink from "../components/BlankLink";
import Card from "../components/Card";
import Row from "../components/Table/Row";
import Table from "../components/Table/Table";

// Required constants.
import { DATA, PATHS, STRINGS } from "../constants";

const Introduction = () => {
  return (
    <Wrapper>
      <Card
        description={STRINGS.newPlayer.introduction.description}
        title={STRINGS.newPlayer.introduction.title}
        divider
      />
      <Card
        description={STRINGS.newPlayer.keyExplanation.description}
        title={STRINGS.newPlayer.keyExplanation.title}
        divider
      >
        <Table>
          <thead>
            <Row>
              <th>{STRINGS.newPlayer.keystoneHeader}</th>
              <th>{STRINGS.newPlayer.scaleHeader}</th>
            </Row>
          </thead>
          <tbody>
            {DATA.keystones.map((keystone) => {
              return (
                <Row key={keystone.level}>
                  <td>+{keystone.level}</td>
                  <td>+{keystone.scaling}%</td>
                </Row>
              );
            })}
          </tbody>
        </Table>
        <Note>{STRINGS.newPlayer.keyExplanation.note}</Note>
      </Card>
      <Card
        description={STRINGS.newPlayer.gear.description}
        title={STRINGS.newPlayer.gear.title}
        divider
      >
        <Table>
          <thead>
            <Row>
              <th>{STRINGS.newPlayer.keystoneHeader}</th>
              <th>{STRINGS.newPlayer.chestHeader}</th>
              <th>{STRINGS.newPlayer.vaultHeader}</th>
            </Row>
          </thead>
          <tbody>
            {DATA.keystones
              .filter((keystone) => {
                return keystone.level < 16;
              })
              .map((keystone) => {
                return (
                  <Row key={keystone.level}>
                    <td>+{keystone.level}</td>
                    <td>{keystone.chest}</td>
                    <td>{keystone.vault}</td>
                  </Row>
                );
              })}
          </tbody>
        </Table>
        <Note>{STRINGS.newPlayer.gear.note}</Note>
      </Card>
      <BlankLink path={PATHS.affixes}>
        <Card
          description={STRINGS.newPlayer.affixes.description}
          title={STRINGS.newPlayer.affixes.title}
          divider
          filled
        />
      </BlankLink>
    </Wrapper>
  );
};

const Note = styled.p`
  color: var(--color-error);
  line-height: 1.3em;
  text-align: center;
  white-space: pre-wrap;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export default Introduction;

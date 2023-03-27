// Required packages.
import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// Required components.
import Card from "../components/Card";
import Loader from "../components/Loader";
import Row from "../components/Table/Row";
import Table from "../components/Table/Table";

// Required data.
import { CharacterContext } from "../context/CharacterContext";
import { STRINGS } from "../constants";

const Character = () => {
  const { name, realm, region } = useParams();
  const { state, actions } = useContext(CharacterContext);

  useEffect(() => {
    const getCharacter = async () => {
      actions.characterReset();

      const response = await axios(
        `/api/character?name=${name}&realm=${realm}&region=${region}`
      );

      // Only set the character if the response is 200.
      switch (response.data.status) {
        case 200:
          actions.characterSuccess({
            character: response.data.data.character,
            mythicPlus: response.data.data.mythic_plus,
          });
          break;

        case 400:
          actions.characterError({ error: response.data.message });
          break;

        default:
          actions.characterError({
            error: "An unknown error occurred, please try again.",
          });
          break;
      }
    };

    getCharacter();
    //eslint-disable-next-line
  }, [name, realm, region]);

  // Determine the class color to use.
  const classColor = (characterClass: string) => {
    const lower = characterClass.toLowerCase();

    switch (lower) {
      case "death knight":
        return "var(--color-death-knight)";

      case "demon hunter":
        return "var(--color-demon-hunter)";

      default:
        return `var(--color-${lower})`;
    }
  };

  // Display the error if one has occurred.
  if (state.error) {
    return (
      <Wrapper>
        <Card>
          <Error>{state.error}</Error>
        </Card>
      </Wrapper>
    );
  }

  // Return a loading indicator if the data isn't available.
  if (!state.hasLoaded) {
    return (
      <Wrapper>
        <Card>
          <Loader />
        </Card>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Card>
        <Head>
          <div>
            <Thumbnail
              src={state.character.thumbnail}
              alt={`${state.character.name}'s profile picture.`}
            />
            <Name faction={state.character.faction}>
              {state.character.name}
            </Name>
          </div>
          <Rating color={state.mythicPlus.color}>
            {state.mythicPlus.score.toFixed(1)}
          </Rating>
        </Head>
        <Details>
          {state.character.guild && <p>{`<${state.character.guild}>`}</p>}
          <p>{`(${state.character.region}) ${state.character.realm}`}</p>
          <CharacterClass
            classColor={classColor(state.character.class)}
            faction={state.character.faction}
          >
            {state.character.race}{" "}
            <span>
              {state.character.spec} {state.character.class}
            </span>
          </CharacterClass>
        </Details>
        {/* Create a table to display the character's best run data. */}
        <Table>
          {state.mythicPlus.bestRuns.length ? (
            <>
              <thead>
                <Row>
                  <th>{STRINGS.dungeon}</th>
                  <th>{STRINGS.keyLevel}</th>
                </Row>
              </thead>
              <tbody>
                {state.mythicPlus.bestRuns.map((run) => {
                  return (
                    <Row key={run.dungeon}>
                      <td>{run.dungeon}</td>
                      <td>+{run.level}</td>
                    </Row>
                  );
                })}
              </tbody>
            </>
          ) : (
            <thead>
              <Row>
                <td>No runs found.</td>
              </Row>
            </thead>
          )}
        </Table>
      </Card>
    </Wrapper>
  );
};

// Styled components.
const CharacterClass = styled.p<any>`
  color: ${({ faction }) =>
    faction === "Alliance" ? "var(--color-alliance)" : "var(--color-horde)"};

  & > span {
    color: ${({ classColor }) => classColor};
  }
`;

const Details = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  text-shadow: 1px 1px black;
  width: 100%;
`;

const Error = styled.p`
  text-align: center;
`;

const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-shadow: 2px 2px black;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    gap: 0.2rem;
  }
`;

const Name = styled.h2<any>`
  color: ${({ faction }) =>
    faction === "Alliance" ? "var(--color-alliance)" : "var(--color-horde)"};
  font-size: 1.3rem;
`;

const Rating = styled.p`
  color: ${({ color }) => color};
  font-size: 1.3rem;
  font-weight: bold;
`;

const Thumbnail = styled.img`
  border: 2px solid var(--color-background);
  height: 2.5rem;
  width: 2.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 1em 0;
  justify-content: center;
`;

export default Character;

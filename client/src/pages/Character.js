import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";

import { CharacterContext } from "../context/CharacterContext";

const Character = () => {
  // Extract the name and realm from the url.
  const { name, realm, region } = useParams();

  // Context to track the character's details.
  const {
    state: { character, mythicPlus, error, hasLoaded },
    actions: { characterFetched, errorOccurred, resetCharacter },
  } = useContext(CharacterContext);

  useEffect(() => {
    const getCharacter = async () => {
      // Reset the character so the loading indicator is displayed.
      resetCharacter();

      // Fetch the character from the server.
      const response = await (
        await fetch(
          `/api/characters?name=${name}&realm=${realm}&region=${region}`
        )
      ).json();

      // Only set the character if the response is OK.
      switch (response.status) {
        case 200:
          characterFetched({
            character: response.data.character,
            mythicPlus: response.data.mythic_plus,
          });
          break;

        case 404:
          errorOccurred({ error: "No character found." });
          break;

        default:
          errorOccurred({
            error: "An unknown error occurred, please try again.",
          });
          break;
      }
    };

    getCharacter();
    //eslint-disable-next-line
  }, [name, realm, region]);

  // Determine the class color.
  const classColor = (characterClass) => {
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
  if (error) {
    return (
      <Wrapper>
        <Container>{error}</Container>
      </Wrapper>
    );
  }

  // Return a loading indicator if the data isn't available.
  if (!hasLoaded) {
    return (
      <Wrapper>
        <Container>
          <Loader />
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        <Head>
          <Name faction={character.faction}>{character.name}</Name>
          <Rating color={mythicPlus.color}>{mythicPlus.score}</Rating>
        </Head>
        {/* <Media src={img_src} alt={`${character.name}'s character.`} /> */}
        <Details>
          {character.guild && <p>{`<${character.guild}>`}</p>}
          <CharacterClass
            classColor={classColor(character.class)}
            faction={character.faction}
          >
            {character.race}{" "}
            <span>
              {character.spec} {character.class}
            </span>
          </CharacterClass>
          <p>{`(US) ${character.realm}`}</p>
        </Details>
      </Container>
    </Wrapper>
  );
};

const CharacterClass = styled.p`
  color: ${({ faction }) =>
    faction === "Alliance" ? "var(--color-alliance)" : "var(--color-horde)"};
  text-shadow: 1px 1px black;

  & > span {
    color: ${({ classColor }) => classColor};
    text-shadow: none;
  }
`;

const Container = styled.div`
  background: var(--color-surface);
  border-radius: 0.2em;
  box-shadow: 0 2px 4px 0 var(--color-on-primary);
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1.5em;
  overflow: hidden;
  padding: 1em;
  transition: box-shadow 200ms;
  width: 90%;

  @media only screen and (min-width: 1000px) {
    font-size: 1.6rem;
    max-width: 1000px;
  }
`;

const Details = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  letter-spacing: 0.1rem;
`;

const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h2`
  color: ${({ faction }) =>
    faction === "Alliance" ? "var(--color-alliance)" : "var(--color-horde)"};
  font-size: 1.3rem;
  text-shadow: 2px 2px black;

  @media only screen and (min-width: 1000px) {
    font-size: 2.4rem;
  }
`;

const Rating = styled.p`
  color: ${({ color }) => color};
  font-size: 1.3rem;
  font-weight: bold;
  text-shadow: 2px 2px black;

  @media only screen and (min-width: 1000px) {
    font-size: 2.4rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 2em 0;
  justify-content: center;
`;

export default Character;

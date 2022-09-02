import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";

const Character = () => {
  // Extract the name and realm from the url.
  const { name, realm } = useParams();

  // States to track the character's details.
  const [character, setCharacter] = useState(null);
  const [mythicPlus, setMythicPlus] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      // Reset the character so the loading indicator is displayed.
      await setCharacter(null);

      // Fetch the character from the server.
      const response = await fetch(
        `/api/characters?name=${name}&realm=${realm}`
      );

      const data = await response.json();

      // Only set the character if the response is OK.
      switch (data.status) {
        case 200:
          setCharacter(data.data.character);
          setMythicPlus(data.data.mythic_plus);
          break;

        case 404:
          setCharacter("not found");
          break;

        default:
          setCharacter("error");
          break;
      }
    };

    getCharacter();
    //eslint-disable-next-line
  }, [name, realm]);

  // If the realm is set as null then we know it wasn't found.
  if (realm === "null") {
    return (
      <Wrapper>
        <Container>No realm found.</Container>
      </Wrapper>
    );
  } else if (realm === "error") {
    return (
      <Wrapper>
        <Container>An error occurred, please try again.</Container>
      </Wrapper>
    );
  }

  switch (character) {
    case null:
      return (
        <Wrapper>
          <Container>
            <Loader />
          </Container>
        </Wrapper>
      );

    case "not found":
      return (
        <Wrapper>
          <Container>No character found.</Container>
        </Wrapper>
      );

    case "error":
      return (
        <Wrapper>
          <Container>An error occurred, please try again.</Container>
        </Wrapper>
      );

    default:
      break;
  }

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

const Media = styled.img`
  border: 3px solid var(--color-background);
  height: 200px;
  object-fit: cover;
  object-position: 0 -35px;

  @media only screen and (min-width: 1000px) {
    height: 500px;
    object-position: 0 -125px;
  }
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

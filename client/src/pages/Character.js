import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  // Extract the name and realm from the url.
  const { name, realm } = useParams();

  // State to track the character details.
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `/api/characters?name=${name}&realm=${realm}`
      );

      const data = await response.json();
      setCharacter(data.data);
    };

    getCharacter();
    //eslint-disable-next-line
  }, []);

  // Return a loading indicator if the character isn't set.
  if (!character) {
    return (
      <Wrapper>
        <Container>Loading...</Container>
      </Wrapper>
    );
  }

  // Deconstruct the data after it's loaded.
  const {
    profile: {
      class: characterClass,
      faction,
      guild,
      img_src,
      name: characterName,
      race,
      realm: characterRealm,
      spec,
    },
    mythic_plus: { rating, rating_color },
  } = character;

  // Determine the class color.
  const classColor = (characterClass) => {
    switch (characterClass.toLowerCase()) {
      case "death knight":
        return "var(--color-death-knight)";

      case "demon hunter":
        return "var(--color-demon-hunter)";

      default:
        return `var(--color-${characterClass})`;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Head>
          <Name>{characterName}</Name>
          <Rating rating_color={rating_color}>{rating.toFixed(1)}</Rating>
        </Head>
        <Media src={img_src} alt={`${characterName}'s character.`} />
        <Details faction={faction}>
          <p>{`<${guild}>`}</p>
          <p>
            <span>{race}</span>{" "}
            <CharacterClass color={classColor(characterClass)}>
              {spec} {characterClass}
            </CharacterClass>
          </p>
          <p>{`(US) ${characterRealm}`}</p>
        </Details>
      </Container>
    </Wrapper>
  );
};

const CharacterClass = styled.p`
  color: ${({ color }) => color};
  display: inline;
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
`;

const Details = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  letter-spacing: 0.1rem;

  & span {
    color: ${({ faction }) =>
      faction === "Alliance" ? "var(--color-alliance)" : "var(--color-horde)"};
    text-shadow: 1px 2px black;
  }
`;

const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Media = styled.img`
  border: 3px solid var(--color-background);
  height: 150px;
  object-fit: cover;
  object-position: 0 -75px;
`;

const Name = styled.h2`
  font-size: 1.3rem;
  text-shadow: 2px 2px black;
`;

const Rating = styled.p`
  color: ${({ rating_color }) =>
    `rgba(${rating_color.r}, ${rating_color.g}, ${rating_color.b}, ${rating_color.a})`};
  font-size: 1.3rem;
  font-weight: bold;
  text-shadow: 2px 2px black;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 2em 0;
  justify-content: center;
`;

export default Character;

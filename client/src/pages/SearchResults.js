import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import BlankLink from "../components/BlankLink";
import Card from "../components/Card";
import Loader from "../components/Loader";

import { PATHS, STRINGS } from "../constants";
import { SearchContext } from "../context/SearchContext";

const SearchResults = () => {
  // Get the query from the url.
  const [query] = useSearchParams();

  // Import the required search data from context.
  const {
    state: { characters, hasLoaded },
    actions: { charactersFetched },
  } = useContext(SearchContext);

  useEffect(() => {
    // Fetch the characters from the server.
    const fetchCharacters = async () => {
      const response = await (await fetch("/api/characters/search")).json();

      // Set the search data in context.
      charactersFetched({ characters: response.data });
    };

    fetchCharacters();
    //eslint-disable-next-line
  }, []);

  // Render a loading indicator if the data is still loading.
  if (!hasLoaded) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  // Filter the characters to only names that match the query.
  const matches = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(query.get("name"));
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

  return (
    <Wrapper>
      {matches.map((character) => {
        return (
          <BlankLink
            key={character._id}
            path={`/characters/${character.region.toLowerCase()}/${character.realm.toLowerCase()}/${character.name.toLowerCase()}`}
          >
            <Card filled>
              <Details>
                <div>
                  <Thumbnail
                    src={character.thumbnail}
                    alt={`${character.name}'s class icon.`}
                  />
                  <Name faction={character.faction}>{character.name}</Name>
                </div>
                <p>{`(${character.region}) ${character.realm}`}</p>
              </Details>
            </Card>
          </BlankLink>
        );
      })}
      <Divider />
      <BlankLink path={PATHS.addCharacter}>
        <Card description={STRINGS.cards.addCharacter.description} filled />
      </BlankLink>
    </Wrapper>
  );
};

const Details = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.1rem;
  justify-content: space-between;
  text-shadow: 2px 2px black;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    gap: 0.2rem;
  }
`;

const Divider = styled.div`
  border-bottom: 3px solid var(--color-secondary);
  margin-bottom: 1.5em;
  width: 65%;
`;

const Name = styled.h2`
  color: ${(props) =>
    props.faction === "Alliance"
      ? "var(--color-alliance)"
      : "var(--color-horde)"};
  font-size: 1.2rem;
`;

const Thumbnail = styled.img`
  border: 2px solid var(--color-background);
  height: 2.5rem;
  width: 2.5rem;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export default SearchResults;

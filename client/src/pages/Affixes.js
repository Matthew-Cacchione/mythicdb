import styled from "styled-components";
import { useContext, useEffect } from "react";

import Card from "../components/Card";
import Loader from "../components/Loader";

import { AffixContext } from "../context/AffixContext";

const Affixes = () => {
  // Import the required affix data and functions.
  const {
    state: { affixes, hasLoaded },
    actions: { affixesFetched },
  } = useContext(AffixContext);

  useEffect(() => {
    // Fetch the affix data from the API.
    const fetchAffixes = async () => {
      const response = await (await fetch(`/api/affixes?region=us`)).json();

      // Set the affix data in context.
      affixesFetched({ affixes: response.data.affixes });
    };

    fetchAffixes();
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

  return (
    <Wrapper>
      {affixes.map((affix) => {
        return (
          <Card
            key={affix.id}
            title={
              <Centered>
                <Media
                  src={`/assets/${affix.icon}.png`}
                  alt={`${affix.name} icon.`}
                />
                {affix.name}
              </Centered>
            }
            description={affix.description}
          />
        );
      })}
    </Wrapper>
  );
};

const Centered = styled.div`
  align-items: center;
  display: flex;
  gap: 0.3em;
`;

const Media = styled.img`
  border: 3px solid var(--color-background);
  height: 1.5em;
  width: 1.5em;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin: 1em 0;
`;

export default Affixes;

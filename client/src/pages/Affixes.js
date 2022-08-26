import styled from "styled-components";
import { useContext, useEffect } from "react";

import Card from "../components/Card";
import Loader from "../components/Loader";

import { AffixContext } from "../context/AffixContext";

const Affixes = () => {
  // Import the required affix data and functions.
  const {
    state: { data, hasLoaded },
    actions: { affixesFetched },
  } = useContext(AffixContext);

  useEffect(() => {
    // Fetch the affix data from the API.
    const fetchAffixes = async () => {
      const response = await fetch(
        "https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en"
      );

      const data = await response.json();

      // Set the affix data in context.
      affixesFetched(data);
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
      {data.affix_details.map((affix) => {
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
  margin: 1em 0;
`;

export default Affixes;

// Required libraries.
import styled from "styled-components";
import { useContext, useEffect } from "react";

// Required components.
import Loader from "../components/Loader";

// Required context.
import { AffixContext } from "../context/AffixContext";

const Affixes = () => {
  // Import the required affix data and functions.
  const context = useContext(AffixContext);

  useEffect(() => {
    // Fetch the affix data from the API.
    const fetchAffixes = async () => {
      const response = await (await fetch(`/api/affixes?region=us`)).json();

      // Set the affix data in context.
      context?.actions.affixesFetched({ affixes: response.data.affixes });
    };

    // Only fetch the affixes if they aren't yet loaded.
    if (!context?.state.hasLoaded) {
      fetchAffixes();
    }
    //eslint-disable-next-line
  }, []);

  // Render a loading indicator if the data is still loading.
  if (!context?.state.hasLoaded) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {context.state.affixes.map((affix) => {
        return (
          <Card key={affix.id}>
            <Centered>
              <Media
                src={`/assets/${affix.icon}.png`}
                alt={`${affix.name} icon.`}
              />
              {affix.name}
            </Centered>
            <Divider />
            <Description>{affix.description}</Description>
          </Card>
        );
      })}
    </Wrapper>
  );
};

const Card = styled.div`
  align-items: center;
  background: transparent;
  border: 2px solid var(--color-surface-light);
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1.5em;
  padding: 1em;
  transition: box-shadow 200ms;
  width: 90vw;

  &:hover {
    box-shadow: 0 8px 16px 0 var(--color-on-primary);
  }
`;

const Centered = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  gap: 0.3em;
  text-align: center;
`;

const Description = styled.p`
  line-height: 1.3em;
  text-align: center;
  white-space: pre-wrap;
`;

const Divider = styled.div`
  border-bottom: 3px solid var(--color-secondary);
  width: 15%;
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

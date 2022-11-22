// Required libraries.
import styled from "styled-components";
import { useContext, useEffect } from "react";

// Required components.
import Card from "../components/Card";
import Loader from "../components/Loader";

// Required context.
import { AffixContext } from "../context/AffixContext";

const Affixes = () => {
  // Import the required affix data and functions.
  const { state, actions } = useContext(AffixContext);

  useEffect(() => {
    // Fetch the affix data from the API.
    const fetchAffixes = async () => {
      const response = await (await fetch(`/api/affixes?region=us`)).json();

      // Set the affix data in context.
      actions.affixSuccess({ affixes: response.data.affixes });
    };

    // Only fetch the affixes if they aren't yet loaded.
    if (!state.hasLoaded) {
      fetchAffixes();
    }
    //eslint-disable-next-line
  }, []);

  // Render a loading indicator if the data is still loading.
  if (!state.hasLoaded) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {/* Create a card to display each affix. */}
      {state.affixes.map((affix) => {
        return (
          <Card key={affix.id} description={affix.description} divider>
            <Centered>
              <Media
                src={`/assets/${affix.icon}.png`}
                alt={`${affix.name} icon.`}
              />
              {affix.name}
            </Centered>
          </Card>
        );
      })}
    </Wrapper>
  );
};

// Styled components.
const Centered = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  gap: 0.3em;
  text-align: center;
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

import styled from "styled-components";
import { useEffect, useState } from "react";

import Card from "../components/Card";

const Affixes = () => {
  // Track the data of affixes that are in rotation.
  const [rotation, setRotation] = useState([]);

  useEffect(() => {
    // Set the affix data in the state.
    const setAffixes = async () => {
      const result = [];
      const affixes = await (await fetch("/api/affixes")).json();

      // Push each affix object into the result array.
      const rotation = affixes.data.rotation;
      for (let i = 0; i < rotation.length; i++) {
        const data = await (await fetch(`/api/affixes/${rotation[i]}`)).json();

        result.push(data.data);
      }

      setRotation(result);
    };

    setAffixes();
  }, []);

  if (!rotation.length) {
    return <Wrapper>Loading...</Wrapper>;
  }

  return (
    <Wrapper>
      {rotation.map((affix) => {
        return (
          <Card
            title={
              <Centered>
                <Media src={affix.imgSrc} alt={`${affix.name} icon.`} />
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

import styled from "styled-components";
import { useEffect, useState } from "react";

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
          <Container key={affix.name}>
            <div>
              <Media src={affix.imgSrc} alt={`${affix.name} icon.`} />
              <Title>{affix.name}</Title>
            </div>
            <Divider />
            <Description>{affix.description}</Description>
          </Container>
        );
      })}
    </Wrapper>
  );
};

const Container = styled.div`
  align-items: center;
  background: var(--color-surface);
  border-radius: 0.2em;
  box-shadow: 0 2px 4px 0 var(--color-on-primary);
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1.5em;
  padding: 1em;
  transition: box-shadow 200ms;
  width: 80%;

  &:hover {
    box-shadow: 0 4px 8px 0 var(--color-on-primary);
  }

  & > div {
    align-items: center;
    display: flex;
    gap: 0.6em;
    justify-content: center;
  }
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
  height: 2.5em;
  width: 2.5em;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

export default Affixes;

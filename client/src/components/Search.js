import styled from "styled-components";

import { STRINGS } from "../constants";

const Search = () => {
  return (
    <Wrapper>
      <Input placeholder={STRINGS.searchCharacters} />
    </Wrapper>
  );
};

const Input = styled.input`
  background: var(--color-on-background);
  border: 3px solid var(--color-primary);
  border-radius: 0.2em;
  height: 3em;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  align-self: center;
  padding: 0.4em 0.6em;
  width: 100vw;
`;

export default Search;

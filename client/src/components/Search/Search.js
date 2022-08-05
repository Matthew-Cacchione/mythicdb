import styled from "styled-components";

const Search = () => {
  return (
    <Wrapper>
      <Input />
    </Wrapper>
  );
};

const Input = styled.input`
  background: var(--color-on-background);
  border: 3px solid var(--color-primary);
  height: 2.4em;
  width: 100%;
  z-index: -1;

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

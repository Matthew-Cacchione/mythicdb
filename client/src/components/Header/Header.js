import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>MythicDB</Title>
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 2rem;
  padding: 0.4em;
`;

const Wrapper = styled.header`
  align-items: center;
  background: var(--color-surface);
  display: flex;
`;

export default Header;

import styled from "styled-components";

import { Link } from "react-router-dom";
import Search from "./Search";

import { STRINGS } from "../constants";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <BlankLink to="/">
            <Title>{STRINGS.app}</Title>
          </BlankLink>
        </Container>
        <Search />
      </Wrapper>
    </>
  );
};

const BlankLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  align-items: center;
  background: var(--color-primary);
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2.2rem;
`;

const Wrapper = styled.header`
  align-items: center;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: space-between;
  padding: 0.6em;
`;

export default Header;

import styled from "styled-components";

import { Link } from "react-router-dom";
import Sandwich from "./Sandwich";
import Search from "../Search";

import { STRINGS } from "../../constants";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <BlankLink to="/">
            <Title>{STRINGS.app}</Title>
          </BlankLink>
          <Sandwich />
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
  background: var(--color-surface);
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Wrapper = styled.header`
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: space-between;
  padding: 0.6em;
`;

export default Header;

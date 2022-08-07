import styled from "styled-components";
import { useState } from "react";

import { Link } from "react-router-dom";
import Menu from "./Menu";
import Sandwich from "./Menu/Sandwich";
import Search from "./Search";

import { STRINGS } from "../constants";

const Header = () => {
  // State to track whether the menu is open.
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <Container>
          <BlankLink to="/">
            <Title>{STRINGS.app}</Title>
          </BlankLink>
          <Sandwich open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
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
  font-size: 2.2rem;
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

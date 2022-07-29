import styled from "styled-components";
import { useState } from "react";

import SearchBar from "../Search/SearchBar";
import SearchIcon from "../Search/SearchIcon";

import { STRINGS } from "../../constants";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Wrapper>
        <Title>{STRINGS.app}</Title>
        <SearchIcon isVisible={isVisible} setIsVisible={setIsVisible} />
      </Wrapper>
      <SearchBar isVisible={isVisible} />
    </>
  );
};

const Title = styled.h1`
  font-size: 2rem;
`;

const Wrapper = styled.header`
  align-items: center;
  background: var(--color-surface);
  display: flex;
  justify-content: space-between;
  padding: 0.6em;
`;

export default Header;

import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";

const SearchIcon = ({ isVisible, setIsVisible }) => {
  // Invert the search bar visibility.
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Button onPointerDown={handleClick}>
      <Icon size="2rem" isVisible={isVisible} />
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  border: none;
  color: var(--color-on-surface);
  cursor: pointer;
  padding: 0;
  line-height: 0;
`;

const Icon = styled(AiOutlineSearch)`
  fill: ${({ isVisible }) =>
    isVisible ? "var(--color-primary)" : "var(--color-on-surface)"};
`;

export default SearchIcon;

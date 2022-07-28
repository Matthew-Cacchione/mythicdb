import styled, { keyframes } from "styled-components";

const SearchBar = ({ isVisible }) => {
  return <Wrapper>{isVisible && <Input />}</Wrapper>;
};

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 100;
  }
`;

const slide = keyframes`
  from {
    transform: translateY(-2em);
  }

  to {
    transform: translateY(0);
  }
`;

const Input = styled.input`
  animation: ${slide} 500ms forwards, ${fade} 500ms;
  background: #f5f5f5;
  border: none;
  height: 2.4em;
  width: 100%;
  z-index: -1;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  padding: 0.4em 0.6em;
  width: 100vw;
`;

export default SearchBar;

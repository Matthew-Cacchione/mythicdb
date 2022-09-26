import styled from "styled-components";

const Input = ({ onChange, onKeyUp, placeholder, value }) => {
  return (
    <Wrapper
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      value={value}
    />
  );
};

const Wrapper = styled.input`
  background: var(--color-on-background);
  border: 3px solid var(--color-secondary);
  font-size: 1rem;
  height: 3em;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export default Input;

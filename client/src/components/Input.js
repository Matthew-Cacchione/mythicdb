import styled from "styled-components";

const Input = ({ id, placeholder, type, width }) => {
  return (
    <Wrapper
      id={id}
      placeholder={placeholder}
      type={type}
      width={width}
      required
    ></Wrapper>
  );
};

const Wrapper = styled.input`
  background: var(--color-on-background);
  border: 2px solid var(--color-secondary);
  border-radius: 0.2em;
  height: 3em;
  margin-bottom: 1em;
  width: ${({ width }) => (width ? width : "80%")};

  &:focus {
    outline: none;
  }
`;

export default Input;

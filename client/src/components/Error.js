import styled from "styled-components";

const Error = ({ message, width }) => {
  return <Wrapper width={width}>{message}</Wrapper>;
};

const Wrapper = styled.h2`
  background: var(--color-error);
  border: 3px solid var(--color-error);
  border-radius: 0.2rem;
  color: var(--color-on-error);
  font-size: 1.2rem;
  margin: 1em 0;
  padding: 0.2em;
  text-align: center;
  width: ${({ width }) => (width ? width : "80%")};
`;

export default Error;

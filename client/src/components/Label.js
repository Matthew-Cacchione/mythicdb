import styled from "styled-components";

const Label = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.label`
  font-size: 1.3rem;
  margin: 0.4em 0;
`;

export default Label;

import styled from "styled-components";

const Label = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.label`
  font-size: 1.3rem;
  margin: 0.4em 0;

  @media only screen and (min-width: 1000px) {
    font-size: 2.4rem;
  }
`;

export default Label;

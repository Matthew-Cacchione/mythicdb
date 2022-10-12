import styled from "styled-components";

const Label = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.label`
  font-size: 1.3rem;
  margin: 0.4em;
`;

export default Label;

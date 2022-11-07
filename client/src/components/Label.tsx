// Required libraries.
import styled from "styled-components";

// Required types and interfaces.
import { FC } from "react";
import Props from "../models/Props";

const Label: FC<Props> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.label`
  font-size: 1.3rem;
  margin: 0.4em;
`;

export default Label;

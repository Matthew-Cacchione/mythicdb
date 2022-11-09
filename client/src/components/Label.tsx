// Required libraries.
import styled from "styled-components";

// Required types and interfaces.
import { FC } from "react";
import Props from "../models/props/Label";

const Label: FC<Props> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>;
};

const Wrapper = styled.label`
  font-size: 1.3rem;
  margin: 0.4em;
`;

export default Label;

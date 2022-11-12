// Required libraries.
import styled from "styled-components";

// Required types and interfaces.
import { FC } from "react";
import Props from "../models/components/Label";

const Button: FC<Props> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>;
};

const Wrapper = styled.button`
  background: var(--color-primary);
  border: none;
  border-radius: 0.2rem;
  color: var(--color-on-primary);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.6em;
  padding: 0.2em;
`;

export default Button;

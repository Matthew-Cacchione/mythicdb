// Required libraries.
import styled from "styled-components";

// Required types and interfaces.
import { FC } from "react";
import Props from "../../models/props/Default";

const Row: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.tr`
  text-shadow: none;

  & > td,
  & > th {
    border: 2px solid var(--color-primary);
    padding: 0.4em;
    text-align: center;
  }
`;

export default Row;

import { FC } from "react";
import styled from "styled-components";

import { Props } from "../../models/Props";

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

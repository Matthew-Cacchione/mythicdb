// Required packages.
import { Link } from "react-router-dom";
import styled from "styled-components";

// Required types.
import { FC } from "react";
import Props from "../models/components/Link";

const BlankLink: FC<Props> = ({ children, path }) => {
  return <Wrapper to={path}>{children}</Wrapper>;
};

// Styled components.
const Wrapper = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export default BlankLink;

// Required libraries.
import { Link } from "react-router-dom";
import styled from "styled-components";

// Required types and interfaces.
import { FC } from "react";
import Props from "../models/Props";

const BlankLink: FC<Props> = ({ children, path }) => {
  return <Wrapper to={path}>{children}</Wrapper>;
};

const Wrapper = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export default BlankLink;

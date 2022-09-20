import styled from "styled-components";

import { Link } from "react-router-dom";

const BlankLink = ({ children, path }) => {
  return <Wrapper to={path}>{children}</Wrapper>;
};

const Wrapper = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;

  @media only screen and (min-width: 1000px) {
    &:first-child {
      margin-top: 2em;
    }
  }
`;

export default BlankLink;

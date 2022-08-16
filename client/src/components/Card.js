import styled from "styled-components";

import { Link } from "react-router-dom";

const Card = ({ children, description, title, path }) => {
  // Disable the link when no path is provided.
  const disableLink = (e) => {
    if (!path) {
      e.preventDefault();
    }
  };

  return (
    <BlankLink to={path || "/"} onClick={disableLink}>
      <Wrapper>
        {title && <Title>{title}</Title>}
        <Divider />
        {description && <Description>{description}</Description>}
        {children}
      </Wrapper>
    </BlankLink>
  );
};

const BlankLink = styled(Link)`
  cursor: ${({ to }) => (to === "/" ? "default" : "pointer")};
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 0 2em;

  @media only screen and (min-width: 1000px) {
    &:first-child {
      margin-top: 2em;
    }
  }
`;

const Description = styled.p`
  line-height: 1.3em;
  text-align: center;
  white-space: pre-wrap;
`;

const Divider = styled.div`
  border-bottom: 3px solid var(--color-secondary);
  width: 15%;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;

  @media only screen and (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  background: var(--color-surface);
  border-radius: 0.2em;
  box-shadow: 0 2px 4px 0 var(--color-on-primary);
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1.5em;
  padding: 1em;
  transition: box-shadow 200ms;
  width: 100%;

  &:hover {
    box-shadow: 0 8px 16px 0 var(--color-on-primary);
  }

  @media only screen and (min-width: 1000px) {
    font-size: 2rem;
    max-width: 1000px;
  }
`;

export default Card;

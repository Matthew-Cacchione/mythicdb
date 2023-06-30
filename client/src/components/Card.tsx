// Required packages.
import styled from "styled-components";

// Required types.
import { FC } from "react";
import Props from "../models/components/Card";

const Card: FC<Props> = ({
  children,
  description,
  divider,
  filled,
  positioned,
  title,
}) => {
  return (
    <Wrapper filled={filled}>
      {title && <Title>{title}</Title>}
      {positioned && children}
      {divider && <Divider />}
      {description && <Description>{description}</Description>}
      {!positioned && children}
    </Wrapper>
  );
};

// Styled components.
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
`;

const Wrapper = styled.div<Props>`
  align-items: center;
  background: ${(props) =>
    props.filled ? "var(--color-surface)" : "transparent"};
  border: ${(props) =>
    props.filled
      ? "2px solid var(--color-primary)"
      : "2px solid var(--color-surface-light)"};
  border-radius: 0.2em;
  box-shadow: ${(props) =>
    props.filled ? "0 2px 4px 0 var(--color-on-primary)" : "none"};
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1.5em;
  max-width: var(--maximum-width);
  padding: 1em;
  transition: box-shadow 200ms;
  width: 90vw;

  &:hover {
    box-shadow: 0 8px 16px 0 var(--color-on-primary);
  }
`;

export default Card;

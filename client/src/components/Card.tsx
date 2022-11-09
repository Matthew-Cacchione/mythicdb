// Required libraries.
import styled from "styled-components";

// Required types and interfaces.
import { FC } from "react";
import Props from "../models/props/Card";
import StyledProps from "../models/StyledProps";

const Card: FC<Props> = ({ children, description, divider, filled, title }) => {
  return (
    <Wrapper filled={filled}>
      {title && <Title>{title}</Title>}
      {divider && <Divider />}
      {description && <Description>{description}</Description>}
      {children}
    </Wrapper>
  );
};

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

const Wrapper = styled.div<StyledProps>`
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
  padding: 1em;
  transition: box-shadow 200ms;
  width: 90vw;

  &:hover {
    box-shadow: 0 8px 16px 0 var(--color-on-primary);
  }
`;

export default Card;

import styled from "styled-components";

const Card = ({ description, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <Divider />
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

const Description = styled.p`
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

const Wrapper = styled.div`
  align-items: center;
  background: var(--color-surface);
  border-radius: 0.2em;
  box-shadow: 0 2px 4px 0 var(--color-on-primary);
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  padding: 1em;
  transition: box-shadow 200ms;
  width: 80%;

  &:hover {
    box-shadow: 0 4px 8px 0 var(--color-on-primary);
  }
`;

export default Card;
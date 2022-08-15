import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <Circle />
    </Wrapper>
  );
};

const spin = keyframes`
from {
    transform: rotate(0);
}

to {
    transform: rotate(360deg);
}
`;

const Circle = styled.div`
  animation: ${spin} 2s linear;
  border: 8px solid var(--color-background);
  border-radius: 50%;
  border-top: 8px solid var(--color-primary);
  height: 60px;
  width: 60px;

  @media only screen and (min-width: 1000px) {
    border: 16px solid var(--color-background);
    border-top: 16px solid var(--color-primary);
    height: 120px;
    width: 120px;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Loader;

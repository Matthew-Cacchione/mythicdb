import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <Spinner>
        <div />
        <div />
        <div />
        <div />
      </Spinner>
    </Wrapper>
  );
};

const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}
`;

const Spinner = styled.div`
  display: inline-block;
  height: 80px;
  position: relative;
  width: 80px;

  & div {
    animation: ${spin} 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border: 6px solid var(--color-primary);
    border-color: var(--color-primary) transparent transparent transparent;
    border-radius: 50%;
    box-sizing: border-box;
    display: block;
    height: 64px;
    margin: 8px;
    position: absolute;
    width: 64px;
  }

  & div:nth-child(1) {
    animation-delay: -550ms;
  }

  & div:nth-child(2) {
    animation-delay: -400ms;
  }

  & div:nth-child(3) {
    animation-delay: -250ms;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Loader;

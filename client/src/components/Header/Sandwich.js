import styled from "styled-components";

const Sandwich = () => {
  return (
    <Wrapper>
      <Bar1 />
      <Bar2 />
      <Bar3 />
    </Wrapper>
  );
};

const Bar1 = styled.div`
  background-color: var(--color-on-surface);
  height: 4px;
  margin: 6px 0;
  transition: 400ms;
  width: 33px;
`;

const Bar2 = styled.div`
  background-color: var(--color-on-surface);
  height: 4px;
  margin: 6px 0;
  transition: 400ms;
  width: 33px;
`;

const Bar3 = styled.div`
  background-color: var(--color-on-surface);
  height: 4px;
  margin: 6px 0;
  transition: 400ms;
  width: 33px;
`;

const Wrapper = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export default Sandwich;

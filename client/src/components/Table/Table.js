import styled from "styled-components";

const Table = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.table`
  border-collapse: collapse;
  width: 100%;

  & > thead {
    background: var(--color-background);
  }
`;

export default Table;

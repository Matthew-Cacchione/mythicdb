import styled from "styled-components";

const Button = ({ label, type, width }) => {
  return (
    <Wrapper type={type} width={width}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: var(--color-secondary);
  border: 3px solid var(--color-secondary);
  border-radius: 0.2rem;
  color: var(--color-on-secondary);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.6em;
  width: ${({ width }) => (width ? width : "80%")};
`;

export default Button;

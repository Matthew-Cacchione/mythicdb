import styled from "styled-components";

const Button = ({ color, label, onClick, type, width }) => {
  return (
    <Wrapper color={color} onClick={onClick} type={type} width={width}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: ${({ color }) => (color ? color : "var(--color-secondary)")};
  border: ${({ color }) =>
    color ? `3px solid ${color}` : "3px solid var(--color-secondary)"};
  border-radius: 0.2rem;
  color: var(--color-on-secondary);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.6em;
  width: ${({ width }) => (width ? width : "80%")};
`;

export default Button;

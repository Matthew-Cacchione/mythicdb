import styled from "styled-components";

import { STRINGS } from "../../constants";

const Form = () => {
  return (
    <Wrapper>
      <Label for="username">{STRINGS.username}</Label>
      <Input id="username" type="text" required />
      <Label for="password">{STRINGS.password}</Label>
      <Input id="password" type="text" required />
      <Submit>Sign In</Submit>
    </Wrapper>
  );
};

const Input = styled.input`
  background: var(--color-on-background);
  border: 2px solid var(--color-secondary);
  border-radius: 0.2em;
  height: 3em;
  margin-bottom: 1em;
  width: 80%;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 1.3rem;
  margin: 0.4em 0;
`;

const Submit = styled.button``;

const Wrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

export default Form;

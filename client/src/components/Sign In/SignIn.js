import styled from "styled-components";

import { STRINGS } from "../../constants";

const SignIn = () => {
  // Sign the user in when the form is submitted.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    fetch("/api/users/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label htmlFor="username">{STRINGS.username}</Label>
      <Input id="username" type="text" required />
      <Label htmlFor="password">{STRINGS.password}</Label>
      <Input id="password" type="password" required />
      <Submit>{STRINGS.login.toUpperCase()}</Submit>
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

const Submit = styled.button`
  background: var(--color-secondary);
  border: 3px solid var(--color-secondary);
  border-radius: 0.2rem;
  color: var(--color-on-secondary);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.6em;
  width: 80%;
`;

const Wrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

export default SignIn;

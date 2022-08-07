import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Error from "../components/Error";
import Input from "../components/Input";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { STRINGS } from "../constants";

const SignUp = () => {
  // Track if any errors have occurred during sign up.
  const [error, setError] = useState(null);

  // Context that determines if a user is already signed in.
  const { token } = useContext(CurrentUserContext).state;

  const navigate = useNavigate();

  // Sign the user up when the form is submitted.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;
    const confirmPassword = e.target[2].value;

    // Verify that the passwords match.
    if (password !== confirmPassword) {
      setError("Passwords must match.");
    } else {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      switch (data.status) {
        // User signed up successfully.
        case 201:
          navigate(STRINGS.paths.login);
          break;

        // Chosen username is taken.
        case 400:
          setError("Username is taken.");
          break;

        default:
          setError("Something went wrong, please try again.");
          break;
      }
    }
  };

  // If a user is already signed in redirect them to the homepage.
  if (token) {
    navigate("/");
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label htmlFor="username">{STRINGS.username}</Label>
      <Input id="username" type="text" />
      <Label htmlFor="password">{STRINGS.password}</Label>
      <Input id="password" type="password" />
      <Label htmlFor="confirm-password">{STRINGS.confirmPassword}</Label>
      <Input id="confirm-password" type="password" />
      <Button label={STRINGS.signUp.toUpperCase()} type="submit" />
      {error && <Error message={error} />}
    </Wrapper>
  );
};

const Label = styled.label`
  font-size: 1.3rem;
  margin: 0.4em 0;
`;

const Wrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

export default SignUp;

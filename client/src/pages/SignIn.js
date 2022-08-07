import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Error from "../components/Error";
import Input from "../components/Input";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { STRINGS } from "../constants";

const SignIn = () => {
  // Track if any errors have occurred during sign in.
  const [error, setError] = useState(null);

  // Context that determines if a user is already signed in.
  const { token } = useContext(CurrentUserContext).state;

  // Import sign in dispatch from context.
  const { signedIn } = useContext(CurrentUserContext).actions;

  const navigate = useNavigate();

  // Sign the user in when the form is submitted.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    const response = await fetch("/api/users/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    switch (data.status) {
      // User signed in successfully.
      case 200:
        // Cookies would be more secure but for now local storage works.
        localStorage.setItem("token", data.data.token);
        signedIn(data.data.token);
        navigate("/");
        break;

      // User entered the wrong password.
      case 401:
        setError("Incorrect password provided.");
        break;

      // Username entered does not exist.
      case 404:
        setError("No account exists with that username.");
        break;

      default:
        setError("Something went wrong, please try again.");
        break;
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
      <Button label={STRINGS.login.toUpperCase()} type="submit" />
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

export default SignIn;

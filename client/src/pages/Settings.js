import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Error from "../components/Error";
import Input from "../components/Input";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { STRINGS } from "../constants";

const Settings = () => {
  // Track if any errors have occurred during password change.
  const [error, setError] = useState(null);

  // Fetch currently logged in user from context.
  const { token } = useContext(CurrentUserContext).state;

  const navigate = useNavigate();

  // Change the user's password.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error.
    await setError(null);

    // Extract the details from the form.
    const oldPassword = e.target[0].value;
    const newPassword = e.target[1].value;
    const confirmNewPassword = e.target[2].value;

    // Verify that the new passwords match.
    if (newPassword !== confirmNewPassword) {
      setError("Passwords must match.");
      return;
    }

    // Attempt to change the user's password in the database.
    const response = await fetch("/api/user", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    });

    const data = await response.json();

    // Verify that the password was changed successfully.
    if (data.status === 200) {
      // Reset the form inputs on success.
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
    } else if (data.status === 401) {
      setError("Incorrect password provided.");
    } else {
      setError("An error occurred, please try again.");
    }
  };

  // Delete the user's account.
  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/user", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Verify that the deletion was successful.
    if (response.status === 204) {
      // Sign the current user out and redirect to homepage.
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  // If the user isn't signed in redirect them to the homepage.
  if (!token) {
    navigate("/");
    return;
  }

  return (
    <Wrapper>
      <Card>
        <Title>{STRINGS.changePassword}</Title>
        <Divider />
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="current-password">{STRINGS.currentPassword}</Label>
          <Input id="current-password" type="password" width="100%" />
          <Label htmlFor="password">{STRINGS.password}</Label>
          <Input id="password" type="password" width="100%" />
          <Label htmlFor="confirm-password">{STRINGS.confirmPassword}</Label>
          <Input id="confirm-password" type="password" width="100%" />
          <Button label="Submit" type="submit" width="100%" />
        </Form>
        {error && <Error message={error} width="100%" />}
      </Card>
      <Card>
        <Title>{STRINGS.deleteAccount}</Title>
        <Divider />
        <Description>{STRINGS.deleteAccountWarning}</Description>
        <Button
          color="var(--color-error)"
          label="Delete"
          onClick={handleDelete}
          type="button"
          width="100%"
        />
      </Card>
    </Wrapper>
  );
};

const Card = styled.div`
  align-items: center;
  background: var(--color-surface);
  border-radius: 0.2em;
  box-shadow: 0 2px 4px 0 var(--color-on-primary);
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1.5em;
  padding: 1em;
  transition: box-shadow 200ms;
  width: 80%;

  &:hover {
    box-shadow: 0 4px 8px 0 var(--color-on-primary);
  }
`;

const Description = styled.p`
  line-height: 1.3em;
  text-align: center;
  white-space: pre-wrap;
`;

const Divider = styled.div`
  border-bottom: 3px solid var(--color-secondary);
  width: 15%;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  justify-content: center;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.1rem;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0;
`;

export default Settings;

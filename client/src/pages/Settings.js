import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/Card";
import Error from "../components/Error";
import Input from "../components/Input";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { STRINGS } from "../constants";

const Settings = () => {
  // Track if any errors have occurred during password change.
  const [error, setError] = useState(null);

  // Fetch currently logged in user from context.
  const {
    state: { token },
    actions: { signedOut },
  } = useContext(CurrentUserContext);

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
      signedOut();
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
      <Card title={<Title>{STRINGS.changePassword}</Title>}>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="current-password">{STRINGS.currentPassword}</Label>
          <Input id="current-password" type="password" width="100%" />
          <Label htmlFor="password">{STRINGS.password}</Label>
          <Input id="password" type="password" width="100%" />
          <Label htmlFor="confirm-password">{STRINGS.confirmPassword}</Label>
          <Input id="confirm-password" type="password" width="100%" />
          <Button
            label={STRINGS.update.toUpperCase()}
            type="submit"
            width="100%"
          />
        </Form>
        {error && <Error message={error} width="100%" />}
      </Card>
      <Card
        title={<Title>{STRINGS.deleteAccount}</Title>}
        description={STRINGS.deleteAccountWarning}
      >
        <Button
          color="var(--color-error)"
          label={STRINGS.delete.toUpperCase()}
          onClick={handleDelete}
          type="button"
          width="100%"
        />
      </Card>
    </Wrapper>
  );
};

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

  @media only screen and (min-width: 1000px) {
    font-size: 1.6rem;
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;

  @media only screen and (min-width: 1000px) {
    font-size: 2.4rem;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0;
`;

export default Settings;

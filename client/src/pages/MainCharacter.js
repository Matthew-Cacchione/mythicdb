import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Error from "../components/Error";
import Input from "../components/Input";

import { CurrentUserContext } from "../context/CurrentUserContext";

const MainCharacter = () => {
  // State to track if any errors have occurred.
  const [error, setError] = useState(null);

  // Get token identifying the current user from context.
  const { token } = useContext(CurrentUserContext).state;

  const navigate = useNavigate();

  // Set the user's main character.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the error state.
    await setError(null);

    const name = e.target[0].value.toLowerCase();
    const realm = e.target[1].value.toLowerCase();

    // Fetch the proper realm slug from the server.
    const slugResponse = await fetch(`/api/realms/slug?realm=${realm}`);
    const slugData = await slugResponse.json();

    // Fetch the character from the server.
    const response = await fetch(
      `/api/characters?name=${name}&realm=${slugData.data.slug}`
    );
    const data = await response.json();

    // Only set the user's main if the character was found.
    switch (data.status) {
      case 200:
        fetch("/api/user/main-character", {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, realm: slugData.data.slug }),
        });
        navigate(`/characters/us/${slugData.data.slug}/${name}`);
        break;

      case 404:
        setError("Character or realm not found.");
        break;

      default:
        setError("An error occured, please try again.");
        break;
    }
  };

  useEffect(() => {
    // Redirect the user to the homepage if they aren't logged in.
    if (!token) {
      navigate("/");
      return;
    }

    // Fetch the user details from the database.
    const fetchUser = async () => {
      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      const main = data.data.user.main;

      // Redirect to the character page of the user's main if they have one set.
      if (main.name) {
        navigate(`/characters/us/${main.realm}/${main.name}`);
      }
    };

    fetchUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" />
      <Label htmlFor="realm">Realm</Label>
      <Input id="realm" type="text" />
      <Button label="SET MAIN" type="submit" />
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

export default MainCharacter;

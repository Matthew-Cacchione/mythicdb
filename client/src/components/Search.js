import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";

import { STRINGS } from "../constants";

const Search = () => {
  // Track what the user has typed in the search bar and any errors.
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  // Update the value state when the input changes.
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Redirect to the entered character page on enter.
  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      // Split the user input on spaces and dashes to get the entered name and realm.
      const [name, realm] = value.toLowerCase().split(/[\s-]+/);

      // Verify that the user has typed at least two characters.
      if (name.length < 2) {
        setError("Please enter 2 characters or more.");
        return;
      }

      // If no realm was given redirect to the search results.
      if (!realm) {
        navigate(`/characters?name=${name}`);
        setError(null);
        setValue("");
      } else {
        // Redirect the user to the entered character's page.
        navigate(`/characters/us/${realm}/${name}`);
        setError(null);
        setValue("");
      }
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder={STRINGS.searchPlaceholder}
        onChange={handleChange}
        onKeyUp={handleEnter}
        value={value}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

const Error = styled.p`
  color: var(--color-error);
  font-weight: bold;
  margin-top: 0.7em;
  text-align: center;
`;

const Wrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.4em 0.6em;
  width: 100vw;
`;

export default Search;

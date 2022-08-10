import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { STRINGS } from "../constants";

const Search = () => {
  // Track what the user has typed in the search bar.
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  // Update the value state when the input changes.
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Redirect to the entered character page on enter.
  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const [name, realm] = value.toLowerCase().split("-");

      // Fetch the proper realm slug from the server.
      const response = await fetch(`/api/realms/slug?realm=${realm}`);
      const data = await response.json();

      // If the realm name is correct redirect the user.
      switch (data.status) {
        case 200:
          navigate(`/characters/us/${data.data.slug}/${name}`);
          setValue("");
          break;

        case 404:
          navigate(`/characters/us/null/${name}`);
          break;
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
    </Wrapper>
  );
};

const Input = styled.input`
  background: var(--color-on-background);
  border: 3px solid var(--color-primary);
  border-radius: 0.2em;
  height: 3em;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  align-self: center;
  padding: 0.4em 0.6em;
  width: 100vw;
`;

export default Search;

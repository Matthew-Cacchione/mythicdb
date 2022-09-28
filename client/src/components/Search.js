import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";

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

      // Redirect the user to the entered character's page.
      navigate(`/characters/us/${realm}/${name}`);
      setValue("");
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

const Wrapper = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  padding: 0.4em 0.6em;
  width: 100vw;
`;

export default Search;

// Required libraries.
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Required types.
import { FormEvent } from "react";

// Required components.
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Label from "../components/Label";

// Required constants.
import { STRINGS } from "../constants";

const AddCharacter = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Type assertion on form inputs.
    const target = e.target as typeof e.target &
      [{ value: string }, { value: string }, { value: string }];

    // Extract input values from the form.
    const name = target[0].value.toLowerCase();
    const realm = target[1].value.toLowerCase();
    const region = target[2].value.toLowerCase();

    navigate(`/characters/${region}/${realm}/${name}`);
  };

  return (
    <Wrapper>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Label label={STRINGS.nameLabel} />
          <Input />
          <Label label={STRINGS.realmLabel} />
          <Input />
          <Label label={STRINGS.regionLabel} />
          <Input />
          <Button label={STRINGS.addBtn} />
        </Form>
      </Card>
    </Wrapper>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > input {
    margin-bottom: 0.7em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 1em 0;
  justify-content: center;
`;

export default AddCharacter;

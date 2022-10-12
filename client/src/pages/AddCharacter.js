import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Label from "../components/Label";

import { STRINGS } from "../constants";

const AddCharacter = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract input values from the form.
    const name = e.target[0].value.toLowerCase();
    const realm = e.target[1].value.toLowerCase();
    const region = e.target[2].value.toLowerCase();

    navigate(`/characters/${region}/${realm}/${name}`);
  };

  return (
    <Wrapper>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Label text={STRINGS.nameLabel} />
          <Input />
          <Label text={STRINGS.realmLabel} />
          <Input />
          <Label text={STRINGS.regionLabel} />
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

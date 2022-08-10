import styled from "styled-components";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

import { STRINGS } from "../constants";

const Settings = () => {
  return (
    <Wrapper>
      <Card title={STRINGS.changePassword}>
        <Form>
          <Label htmlFor="current-password">{STRINGS.currentPassword}</Label>
          <Input id="current-password" type="password" width="100%" />
          <Label htmlFor="password">{STRINGS.password}</Label>
          <Input id="password" type="password" width="100%" />
          <Label htmlFor="confirm-password">{STRINGS.confirmPassword}</Label>
          <Input id="confirm-password" type="password" width="100%" />
          <Button label="Submit" type="submit" width="100%" />
        </Form>
      </Card>
      <Card title={STRINGS.deleteAccount}>
        <Note>{STRINGS.deleteAccountWarning}</Note>
        <Button
          color="var(--color-error)"
          label="Delete"
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
`;

const Note = styled.p`
  color: var(--color-error);
  line-height: 1.3em;
  text-align: center;
  white-space: pre-wrap;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em 0;
`;

export default Settings;

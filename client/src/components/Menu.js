import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { PATHS, STRINGS } from "../constants";

const Menu = ({ open, setOpen }) => {
  // Context that determines if a user is logged in.
  const { token } = useContext(CurrentUserContext).state;

  // Import sign out dispatch from context.
  const { signedOut } = useContext(CurrentUserContext).actions;

  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
  };

  // Sign the user out and redirect them to the homepage.
  const signOut = () => {
    closeMenu();

    // Set a timeout to give time for the menu animation to finish.
    setTimeout(() => {
      localStorage.removeItem("token");
      signedOut();

      navigate("/");
    }, 300);
  };

  return (
    <Wrapper open={open}>
      {
        // Render different menu items if the user is signed in.
        token ? (
          <>
            <Navigate to={PATHS.mainCharacter} onClick={closeMenu}>
              {STRINGS.viewMain}
            </Navigate>
            <Navigate to={PATHS.settings} onClick={closeMenu}>
              {STRINGS.settings}
            </Navigate>
            <Button onClick={signOut}>Sign Out</Button>
          </>
        ) : (
          <>
            <Navigate to={PATHS.login} onClick={closeMenu}>
              {STRINGS.login}
            </Navigate>
            <Navigate to={PATHS.signUp} onClick={closeMenu}>
              {STRINGS.signUp}
            </Navigate>
          </>
        )
      }
    </Wrapper>
  );
};

const Button = styled.button`
  background: transparent;
  border: none;
  color: var(--color-on-surface);
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  margin: 2rem 0;
  padding: 0;
  text-transform: uppercase;
  transition: color 300ms linear;

  &:hover {
    color: var(--color-primary);
  }
`;

const Navigate = styled(Link)`
  color: var(--color-on-surface);
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  margin: 2rem 0;
  padding: 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 300ms linear;
  width: fit-content;

  &:hover {
    color: var(--color-primary);
  }
`;

const Wrapper = styled.nav`
  align-items: flex-end;
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  padding: 3.5em 2rem;
  position: fixed;
  right: 0;
  text-align: right;
  top: 0;
  transform: ${({ open }) => (open ? " translateX(0)" : " translateX(100%)")};
  transition: all 300ms ease-in-out;
  width: 100%;
  z-index: 2;
`;

export default Menu;

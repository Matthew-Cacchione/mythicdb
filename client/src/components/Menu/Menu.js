import styled from "styled-components";

import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <Wrapper open={open}>
      <MenuLink to="/">Sign In</MenuLink>
      <MenuLink to="/">Sign Up</MenuLink>
    </Wrapper>
  );
};

const MenuLink = styled(Link)`
  color: var(--color-on-surface);
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  padding: 2rem 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s linear;

  &:hover {
    color: var(--color-primary);
  }
`;

const Wrapper = styled.nav`
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
`;

export default Menu;

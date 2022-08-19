// This component is no longer used, kept here in case it is needed in the future.
import styled from "styled-components";

// import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  // const closeMenu = () => {
  //   setOpen(false);
  // };

  return <Wrapper open={open}></Wrapper>;
};

// const Button = styled.button`
//   background: transparent;
//   border: none;
//   color: var(--color-on-surface);
//   cursor: pointer;
//   font-size: 2rem;
//   font-weight: bold;
//   letter-spacing: 0.3rem;
//   margin: 2rem 0;
//   padding: 0;
//   text-transform: uppercase;
//   transition: color 300ms linear;

//   &:hover {
//     color: var(--color-primary);
//   }

//   @media only screen and (min-width: 1000px) {
//     font-size: 4rem;
//   }
// `;

// const Navigate = styled(Link)`
//   color: var(--color-on-surface);
//   font-size: 2rem;
//   font-weight: bold;
//   letter-spacing: 0.3rem;
//   margin: 2rem 0;
//   padding: 0;
//   text-decoration: none;
//   text-transform: uppercase;
//   transition: color 300ms linear;
//   width: fit-content;

//   &:hover {
//     color: var(--color-primary);
//   }

//   @media only screen and (min-width: 1000px) {
//     font-size: 4rem;

//     &:first-child {
//       margin-top: 1em;
//     }
//   }
// `;

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

  @media only screen and (min-width: 1000px) {
    border-left: 2px solid var(--color-background);
    width: 20%;
  }
`;

export default Menu;

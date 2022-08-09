import styled from "styled-components";

const Sandwich = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Bar open={open} />
      <Bar open={open} />
      <Bar open={open} />
    </Wrapper>
  );
};

const Bar = styled.div`
  background: var(--color-on-surface);
  border-radius: 2px;
  height: 5px;
  margin: 5px 0;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 2.8em;

  /* Change sandwich to an X when menu is opened. */
  :nth-child(1) {
    margin-top: ${({ open }) => (open ? "25px" : "5px")};
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    margin-top: ${({ open }) => (open ? "-10px" : "5px")};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(3) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
`;

const Wrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 1em;
  z-index: 3;

  &:focus {
    outline: none;
  }
`;

export default Sandwich;

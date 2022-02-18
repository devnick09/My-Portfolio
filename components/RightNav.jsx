import styled from "styled-components";
import Link from "next/link";

const Right_Nav = styled.div`
  background-color: #1c163c;
  height: 100vh;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  p {
    transform: rotate(90deg);
    margin-top: 8rem;
    color: #cfc0dd;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const RightLine = styled.div`
  background-color: #cfc0dd;
  height: 15rem;
  width: 1px;
`;

function RightNav() {
  return (
    <Right_Nav>
      <RightLine></RightLine>
      <a href="#">
        <p>vishwa.nikhil009@gmail.com</p>
      </a>
    </Right_Nav>
  );
}

export default RightNav;

import styled from "styled-components";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Left_Nav = styled.div`
  height: 100vh;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;

  svg {
    font-size: 1.5rem;
    color: #cfc0dd;
    margin-bottom: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Left_Line = styled.div`
  background-color: #cfc0dd;
  height: 12rem;
  width: 1px;
`;

function LeftNav() {
  return (
    <Left_Nav>
      <Link href="#" passHref>
        <FaInstagram />
      </Link>
      <Link href="#" passHref>
        <FaLinkedinIn />
      </Link>
      <Link href="#" passHref>
        <FaGithub />
      </Link>
      <Link href="#" passHref>
        <FaTwitter />
      </Link>
      <Left_Line></Left_Line>
    </Left_Nav>
  );
}

export default LeftNav;

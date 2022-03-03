import styled from "styled-components";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

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
      <a href="https://www.instagram.com/dev.nick09/">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/nikhil-sharma-853478226/">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/devnick09">
        <FaGithub />
      </a>

      <Left_Line></Left_Line>
    </Left_Nav>
  );
}

export default LeftNav;

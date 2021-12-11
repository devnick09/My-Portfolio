import Link from "next/link";
import styled from "styled-components";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Main = styled.div`
  width: 1100px;
  height: 250px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  position: relative;
  :before {
    color: #cfc0dd;
    text-transform: initial;
    content: "<footer>";
    font-family: "La Belle Aurore", cursive;
    font-weight: lighter;
    position: absolute;
    opacity: 0.3;
    font-size: 25px;
    top: 10px;
    left: -50px;
  }
  :after {
    color: #cfc0dd;
    text-transform: initial;
    content: "</footer>";
    font-family: "La Belle Aurore", cursive;
    font-weight: lighter;
    position: absolute;
    opacity: 0.3;
    font-size: 25px;
    left: -50px;
    top: 205px;
  }
`;

const Info = styled.div`
  width: 800px;
  color: #cfc0dd;
  display: flex;
  flex-direction: column;
  .p1 {
    margin-bottom: 20px;
    font-weight: bold;
  }
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
  li {
    color: #cfc0dd;
    list-style: none;
    margin: 6px 30px;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  svg {
    color: #cfc0dd;
    list-style: none;
    margin: 10px 30px;
    cursor: pointer;
  }
`;
const Line1 = styled.div`
  height: 160px;
  width: 1px;
  background-color: #cfc0dd;
`;
const Line2 = styled.div`
  margin-left: 20px;
  height: 160px;
  width: 1px;
  background-color: #cfc0dd;
`;

function Footer() {
  return (
    <div className="container">
      <Main>
        <Info>
          <h2>Nikhil Sharma</h2>
          <p className="p1">vishwa.nikhil009@gmail.com</p>
          <p>
            Designed & Build by nikhil sharma with
            <br /> next js (react js). Fonts (poppins,
            <br /> comfortaa, La Belle Aurore)
          </p>
        </Info>
        <Line1></Line1>
        <Nav>
          <li>
            <Link href="#" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              About
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              Project
            </Link>
          </li>
          <li>
            <Link href="#" passHref>
              Contact
            </Link>
          </li>
        </Nav>
        <Line2> </Line2>
        <Social>
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
        </Social>
      </Main>
    </div>
  );
}

export default Footer;

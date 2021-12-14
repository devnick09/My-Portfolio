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
  @media screen and (max-width: 480px) {
    position: relative;
    margin: 8px 8px;

    width: 340px;
  }
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
    @media screen and (max-width: 480px) {
      position: absolute;
      font-size: 20px;
      top: 15px;
      left: 0px;
    }
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
    @media screen and (max-width: 480px) {
      position: absolute;
      font-size: 20px;
      top: 205px;
      left: 0px;
    }
  }
`;

const Info = styled.div`
  width: 800px;
  color: #cfc0dd;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    margin: 0px 10px;
    margin-right: 0px;
  }
  .p1 {
    margin-bottom: 20px;
    font-weight: bold;
  }
  .p2 {
    @media screen and (max-width: 480px) {
    }
  }
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
  @media screen and (max-width: 480px) {
    margin-right: -20px;
    width: 350px;
    font-size: 12px;
  }
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
  @media screen and (max-width: 480px) {
    width: 350px;
    font-size: 12px;
  }
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
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const Line2 = styled.div`
  margin-left: 20px;
  height: 160px;
  width: 1px;
  background-color: #cfc0dd;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

function Footer() {
  return (
    <div className="container">
      <Main>
        <Info>
          <h2>Nikhil Sharma</h2>
          <p className="p1">vishwa.nikhil009@gmail.com</p>
          <p className="p2">
            Designed & Build by Nikhil Sharma with next js (react js). Fonts
            (poppins, comfortaa, La Belle Aurore)
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

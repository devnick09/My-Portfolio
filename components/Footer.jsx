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
    /* margin-right: -20px;
    width: 350px;
    font-size: 12px; */
    display: none;
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

  svg {
    color: #cfc0dd;
    list-style: none;
    margin: 10px 30px;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    column-gap: 20px;
    font-size: 20px;
    padding: 0 30px;
    svg {
      margin: 0px;
      margin-bottom: 5px;
    }
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
            Designed & Build by Nikhil Sharma with next js (react js). <br />{" "}
            Fonts (poppins, comfortaa, La Belle Aurore)
          </p>
        </Info>
        <Line1></Line1>
        <Nav>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Project</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </Nav>
        <Line2> </Line2>
        <Social>
          <a href="https://www.instagram.com/dev.nick09/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/nikhil-sharma-853478226/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/devnick09">
            <FaGithub />
          </a>
        </Social>
      </Main>
    </div>
  );
}

export default Footer;

import Link from "next/link";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d173d;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
  }
`;

const MainNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  position: relative;
  .white {
    display: none;
  }
  @media screen and (max-width: 480px) {
    /* background-color: black; */
    width: 100%;
    margin: auto;
    padding: 1.5rem 0.5rem;
    .white {
      display: block;
      color: #cfc0dd;
      font-size: 2rem;
      cursor: pointer;
    }
  }

  h1 {
    font-family: "Sacramento", "Courier New", Courier, monospace;
    color: #cfc0dd;
    font-size: 2rem;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      font-size: 1.5rem;
      margin: 0px 5px;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    margin-left: 2rem;
    color: #cfc0dd;

    :hover {
      color: #fff;
    }

    button {
      font-size: 1rem;
      background-color: transparent;
      color: #cfc0dd;
      border: 1px solid #cfc0dd;
      border-radius: 5px;
      cursor: pointer;
      padding: 0.5rem 1rem;
      @media screen and (max-width: 480px) {
        color: black;
        border: 1px solid black;
      }
      :hover {
        color: #fff;
        background-color: #604da6;
      }
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #cfc0dd;

    border-radius: 50px;
    width: 100%;
    height: 50vh;
    top: 14vh;
    left: 0;

    /* clip-path: circle(10px at 90% 10%);
    -webkit-clip-path: circle(500px at 90% 10%);
    transition: all 1s ease-out; */

    li {
      margin-top: 1rem;
      margin-left: 0;
      @media screen and (max-width: 480px) {
        color: black;
      }
    }
  }
`;

const NavDiv = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

function Nav() {
  const [isMenuActive, isMenuActiveHandler] = useState(false);
  function toggleActive() {
    isMenuActiveHandler(!isMenuActive);
  }

  return (
    <NavBar>
      <div className="container">
        <MainNav>
          <NavDiv>
            <Link href="/" passHref>
              <h1>NS</h1>
            </Link>
            <GiHamburgerMenu
              className="white"
              onClick={toggleActive}
            ></GiHamburgerMenu>
          </NavDiv>
          <div className={isMenuActive ? "show__nav" : "hide__nav"}>
            <Ul>
              <li onClick={toggleActive}>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li onClick={toggleActive}>
                <Link href="/about" passHref>
                  About
                </Link>
              </li>
              <li onClick={toggleActive}>
                <Link href="/project" passHref>
                  Projects
                </Link>
              </li>
              <li onClick={toggleActive}>
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </li>
              <li>
                <button onClick={toggleActive}>Resume</button>
              </li>
            </Ul>
          </div>
        </MainNav>
      </div>
    </NavBar>
  );
}

export default Nav;

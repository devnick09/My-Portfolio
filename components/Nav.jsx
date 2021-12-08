import Link from "next/link";
import styled from "styled-components";

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
`;

const MainNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;

  h1 {
    font-family: "Sacramento", "Courier New", Courier, monospace;
    color: #cfc0dd;
    font-size: 2rem;
    cursor: pointer;
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
      :hover {
        color: #fff;
        background-color: #604da6;
      }
    }
  }
`;

function Nav() {
  return (
    <NavBar>
      <div class="container">
        <MainNav>
          <Link href="/">
            <h1>NS</h1>
          </Link>
          <Ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <button>Resume</button>
            </li>
          </Ul>
        </MainNav>
      </div>
    </NavBar>
  );
}

export default Nav;

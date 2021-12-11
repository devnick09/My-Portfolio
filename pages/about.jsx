import Link from "next/link";
import styled from "styled-components";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = styled.div`
  width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 6rem;
  article {
    grid-area: "article";
    color: #cfc0dd;
    position: relative;
    grid-column-start: 1;
    grid-row-start: 1;
    :before {
      color: #cfc0dd;
      text-transform: initial;
      content: "<article>";
      font-family: "La Belle Aurore", cursive;
      font-weight: lighter;
      position: absolute;
      opacity: 0.3;
      font-size: 25px;
      top: -35px;
      left: -50px;
    }
    :after {
      color: #cfc0dd;
      text-transform: initial;
      content: "</article>";
      font-family: "La Belle Aurore", cursive;
      font-weight: lighter;
      position: absolute;
      opacity: 0.3;
      font-size: 25px;
      left: -50px;
      margin-top: 20px;
    }
  }
`;

const H1 = styled.h1`
  margin-left: -30px;
  opacity: 0.3;
  font-size: 200px;
  color: #cfc0dd;
  text-shadow: -10px 8px 10px rgba(0, 0, 0, 0.5);
`;

const Section = styled.section`
  color: #cfc0dd;
  background-color: black;
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-row-start: 1;
  right: 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  div {
    margin: 15px 0px;
    h3 {
      font-weight: 600;
    }
    h4 {
      font-weight: lighter;
    }
  }
`;

const SideSection = styled.section`
  color: #cfc0dd;
  background-color: black;
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-row-start: 2;
  right: 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  ul {
    list-style: none;
    display: flex;
    margin-top: 10px;
    li {
      margin-right: 20px;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  div {
    margin: 15px 0px;
    h3 {
      font-weight: 600;
    }
    h4 {
      font-weight: lighter;
    }
  }
`;

function about() {
  return (
    <div>
      <H1>About</H1>
      <Main>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi,
          in perspiciatis adipisci ipsam est veritatis cupiditate explicabo amet
          aut fugit numquam voluptas exercitationem nemo veniam minima eum
          nostrum laborum? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Earum illo alias expedita officia velit neque a, dicta vitae
          iusto nemo quas rerum quisquam voluptatum non beatae id obcaecati
          quaerat dolorum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Non temporibus veniam saepe itaque. Enim aliquam culpa non
          laudantium, laborum explicabo dolore totam sint. Consectetur
          voluptatum eaque dicta, ipsam beatae sit.
        </article>
        <Section>
          <h2>In Summary</h2>
          <div>
            <h3>Full Name</h3>
            <h4>Nikhil Sharma</h4>
          </div>
          <div>
            <h3>Place Of Birth</h3>
            <h4>Gorakhpur, Uttar Pradesh</h4>
          </div>
          <div>
            <h3>Current Location</h3>
            <h4>Gorakhpur, Uttar Pradesh</h4>
          </div>
          <div>
            <h3>Education</h3>
            <h4>Bachelor of Science</h4>
          </div>
        </Section>
        <SideSection>
          <h2>Contact Me</h2>
          <div>
            <h3>Email</h3>
            <h4>vishwa.nikhil009@gmail.com</h4>
          </div>
          <div>
            <h3>Social Media</h3>
            <ul>
              <li>
                <Link href="instagram" passHref>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="linkedin" passHref>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href="twitter" passHref>
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </SideSection>
      </Main>
    </div>
  );
}

export default about;

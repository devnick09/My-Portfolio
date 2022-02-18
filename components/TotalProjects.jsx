import Link from "next/link";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: #cfc0dd;
  background-color: #604da6;
  padding: 50px;
  margin: 5px;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    width: 350px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  }

  /* .num1 {
      position: absolute;
      color: #cfc0dd;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 120px;
      top: -85px;
      left: -70px;
    } */
  /* :nth-child(even) {
      .num1 {
        top: 290px;
        left: -90px;
      }
    } */
`;

const H3 = styled.h3`
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 1.4rem;
  @media screen and (max-width: 480px) {
    margin-left: 0px;
  }
`;
const P = styled.p`
  letter-spacing: 0.5px;
  margin-top: 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #cbd5e0;
`;
const Tags = styled.div`
  padding: 3rem 0;
  width: 100%;
  @media screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`;

function TotalProjects(props) {
  return (
    <Main>
      <H3>{props.project.name}</H3>
      <P>{props.project.description}</P>
      <Tags>
        {props.project.tags.map((tag, index) => (
          <span className={tag} key={index}>
            {" "}
            #{tag}
          </span>
        ))}
      </Tags>
    </Main>
  );
}

export default TotalProjects;

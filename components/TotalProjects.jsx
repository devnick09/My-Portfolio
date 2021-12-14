import Link from "next/link";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 350px;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  }
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
  @media screen and (max-width: 480px) {
    position: absolute;
    padding: 0px;
    width: 350px;
  }
`;

function TotalProjects(props) {
  return (
    <Link href={"project/" + props.project.name} passHref>
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
    </Link>
  );
}

export default TotalProjects;

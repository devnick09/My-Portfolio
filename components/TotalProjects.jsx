import Link from "next/link";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const H3 = styled.h3`
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 1.4rem;
`;
const P = styled.p`
  letter-spacing: 0.5px;
  margin-top: 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #cbd5e0;
`;
const Tags = styled.div`
  all: unset;
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

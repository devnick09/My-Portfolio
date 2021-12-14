import Link from "next/link";
import styled from "styled-components";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import TotalProjects from "./TotalProjects";

const Main = styled.div`
  width: 100%;
  position: relative;
  @media screen and (max-width: 480px) {
  }
`;

const Head = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 200px;
  color: #cfc0dd;
  opacity: 0.2;
  position: absolute;
  right: -170px;
  top: -130px;
  /* z-index: 12; */
  @media screen and (max-width: 480px) {
    font-size: 80px;
    left: 40px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  padding-top: 250px;
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin: 0px 5px;
    padding-top: 25px;
    top: 0;
    left: 0;
  }

  div {
    color: #cfc0dd;
    background-color: #604da6;
    height: 400px;
    width: 350;
    padding: 50px;
    margin: 5px;
    border-radius: 10px;
    position: relative;
    @media screen and (max-width: 480px) {
      width: 340px;
      border-radius: 50px;
    }

    .num1 {
      position: absolute;
      color: #cfc0dd;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 120px;
      top: -85px;
      left: -70px;
    }
    :nth-child(even) {
      .num1 {
        top: 290px;
        left: -90px;
      }
    }
  }
`;

const P = styled.p`
  color: #cfc0dd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 5px;
  @media screen and (max-width: 480px) {
    width: 340px;
  }

  svg {
    font-size: 1.4rem;
    margin-right: 5px;
  }
`;

function Project(props) {
  return (
    <div className="container">
      <Main>
        <Head>Projects</Head>
        <Grid>
          {props.allprojects.AllProjects.map((project, index) => (
            <TotalProjects project={project} index={index} key={project.id} />
          ))}
        </Grid>
        <Link href="/project" passHref>
          <P>
            <IoArrowForwardCircleOutline /> See All Project&apos;s
          </P>
        </Link>
      </Main>
    </div>
  );
}

export default Project;

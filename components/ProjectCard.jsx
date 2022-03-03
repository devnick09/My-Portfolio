import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: #cfc0dd;
  position: relative;
  padding: 40px;
  margin: 5px;
  border-radius: 30px;
  height: 20rem;
  transition: all 0.5s ease-in;

  :hover {
    transition: all 0.5s ease-out;
    background-color: black;
    border-radius: 30px;
    p,
    a {
      z-index: 1;
      opacity: 1;
      transition: all 0.8s ease-out;
    }
    H3 {
      font-size: 1.5rem;
      font-weight: bold;
      opacity: 1;
      transition: all 0.3s ease-out;
    }
    img {
      pointer-events: none;
      opacity: 0.4;
      transition: all 0.5s ease-out;
    }
  }
  @media screen and (max-width: 480px) {
    width: 350px;
    display: flex;
    border-radius: 50px;
    height: fit-content;
    H3 {
      font-size: 1.5rem;
    }
    Div {
      margin-top: 1.5rem;
    }
  }
  img {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    transition: all 0.5s ease-in;
  }
  .cta {
    opacity: 0;
    transition: all 0.5s ease-in;
    margin: 3rem 0;
    margin-right: 1rem;
    width: fit-content;
    border: 2px solid black;

    @media screen and (max-width: 480px) {
      padding: 1rem 0;
    }
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
  .cta {
    position: relative;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #1c163c;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.05em;
    color: #cfc0dd;
  }

  .cta:hover:before {
    width: 100%;
    background: #1c163c;
  }

  .cta:active {
    transform: scale(0.95);
  }
`;

const H3 = styled.h3`
  opacity: 0;
  color: #cfc0dd;
  z-index: 1;
  font-family: "Source Serif Pro", Helvetica Neue, sans-serif;
  font-size: 2rem;
  transition: all 0.3s ease-in;
  @media screen and (max-width: 480px) {
    margin-left: 0px;
  }
`;
const P = styled.p`
  opacity: 0;
  letter-spacing: 0.5px;
  margin-top: 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #cbd5e0;
  transition: all 0.5s ease-in;
`;
const Div = styled.div`
  margin-top: 3rem;
`;

function ProjectCard(props) {
  return (
    <Main>
      <img src={props.project.image} alt="" />
      <H3>{props.project.name}</H3>
      <P>{props.project.description}</P>

      <Div>
        <a href={props.project.live} className="cta">
          <span>View Live</span>
        </a>
        <a href={props.project.github} className="cta">
          <span>Github</span>
        </a>
      </Div>
    </Main>
  );
}

export default ProjectCard;

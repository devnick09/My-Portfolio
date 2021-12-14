import { AllProjects } from "../../ProjectData/data";
import TotalProjects from "../../components/TotalProjects";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  padding-top: 250px;
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  div {
    margin-top: 1000px;
    color: #cfc0dd;
    background-color: #604da6;
    height: 400px;
    width: 350;
    padding: 50px;
    margin: 5px;
    border-radius: 10px;
    position: relative;
    @media screen and (max-width: 480px) {
      border-radius: 30px;
      padding-top: 50px;
    }
  }
`;

function index(props) {
  return (
    <div className="container">
      <Grid>
        {props.AllProjects.map((project, index) => (
          <TotalProjects project={project} index={index} key={project.id} />
        ))}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      AllProjects,
    }, // will be passed to the page component as props
  };
}

export default index;

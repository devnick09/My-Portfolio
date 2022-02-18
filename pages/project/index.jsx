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

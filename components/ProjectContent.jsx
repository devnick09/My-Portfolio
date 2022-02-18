import { useRouter } from "next/router";
import { AllProjects } from "../ProjectData/data";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 200px;
  @media screen and (max-width: 480px) {
    width: 360px;
  }
`;
const H2 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  color: #cfc0dd;
  @media screen and (max-width: 480px) {
    margin: 0px 15px;
    width: 340px;
    font-size: 40px;
  }
`;

function ProjectContent() {
  const router = useRouter();
  const name = router.query.projectName;
  const project = AllProjects.filter((p) => p.name == name);

  return (
    <div className="container">
      <Main>
        <H2>{project[0].name}</H2>
      </Main>
    </div>
  );
}

export default ProjectContent;

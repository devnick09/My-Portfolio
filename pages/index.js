import Hero from "../components/Hero";
import Project from "../components/Project";
import { AllProjects } from "../ProjectData/data";

export default function Home(props) {
  return (
    <>
      <Hero />
      <Project allprojects={props} />
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      AllProjects,
    }, // will be passed to the page component as props
  };
}
// This gets called on every request

// export async function getServerSideProps() {
//   // Fetch data from external API
//   //const res = await fetch(`https://.../data`)

//   let res = await fetch("localhost:3000/api/getAllProjects");
//   const data = await res.json();
//   console.log(data);
//   // Pass data to the page via props
//   return { props: { data } };
// }

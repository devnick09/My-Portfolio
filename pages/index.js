import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LeftNav from "../components/LeftNav";
import Nav from "../components/Nav";
import Project from "../components/Project";
import RightNav from "../components/RightNav";

export default function Home() {
  return (
    <>
      <Nav />
      <LeftNav />
      <RightNav />
      <Hero />
      <Project />
      <Footer />
    </>
  );
}

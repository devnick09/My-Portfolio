import Link from "next/link";
import styled from "styled-components";

const Container1 = styled.div`
  height: 100vh;
  width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  :before {
    color: #cfc0dd;
    text-transform: initial;
    content: "<html>";
    font-family: "La Belle Aurore", cursive;
    font-weight: lighter;
    position: relative;
    opacity: 0.3;
    font-size: 25px;
    top: -270px;
    left: -50px;
  }
`;

const H2 = styled.h2`
  font-weight: normal;
  font-size: 64px;
  color: #cfc0dd;
  position: relative;
`;
const H1 = styled.h2`
  font-weight: bold;
  font-size: 94px;
  color: #604da6;
  position: relative;
  margin: -20px 0px -20px 0px;
`;

const P = styled.p`
  font-weight: normal;
  font-size: 24px;
  color: #cfc0dd;
  margin-top: 30px;
  position: relative;
  margin-bottom: 30px;
  :before {
    color: #cfc0dd;
    text-transform: initial;
    content: "<p>";
    font-family: "La Belle Aurore", cursive;
    font-weight: lighter;
    position: absolute;
    opacity: 0.3;
    font-size: 25px;
    top: -23px;
    left: -40px;
  }
  :after {
    color: #cfc0dd;
    text-transform: initial;
    content: "</p>";
    font-family: "La Belle Aurore", cursive;
    font-weight: lighter;
    position: absolute;
    opacity: 0.3;
    font-size: 25px;
    top: 90px;
    left: -45px;
  }
`;

const Btn1 = styled.button`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  padding: 10px 20px;
  border: 2px solid #604da6;
  color: #604da6;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
`;

const Btn2 = styled.button`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  padding: 10px 20px;
  border: 2px solid #604da6;
  background: #604da6;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 20px;
`;

const Wrap = styled.div`
  position: relative;
  :before {
    color: #cfc0dd;
    text-transform: initial;
    content: "<h1>";
    font-family: "La Belle Aurore", cursive;
    font-weight: lighter;
    position: absolute;
    opacity: 0.3;
    font-size: 25px;
    top: -10px;
    left: -50px;
  }
  :after {
    color: #cfc0dd;
    text-transform: initial;
    content: "</h1>";
    font-family: "La Belle Aurore", cursive;
    font-weight: lighter;
    position: absolute;
    opacity: 0.3;
    font-size: 25px;
    left: -50px;
    top: 265px;
  }
`;

function Hero() {
  return (
    <Container1>
      <div class="container">
        <Wrap>
          <H2>Hi,</H2>
          <H1>I`&apos`m Nikhil</H1>
          <H2>I Build Things For The Web.</H2>
        </Wrap>

        <P>
          I`&apos`m a web designer/developer from india, i’m specialized in
          <br /> designing and building websites, applications, and
          <br /> everything in between.
        </P>
        <Link href="#" passHref>
          <Btn1>Let`&apos`s Talk</Btn1>
        </Link>
        <Link href="#" passHref>
          <Btn2>View Projects</Btn2>
        </Link>
      </div>
    </Container1>
  );
}

export default Hero;

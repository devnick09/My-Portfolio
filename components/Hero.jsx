import Link from "next/link";
import styled from "styled-components";

const Container1 = styled.div`
  height: fit-content;
  width: 1200px;
  margin: auto;
  padding: 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  .container {
    position: relative;
  }
  @media screen and (max-width: 480px) {
    width: 340px;
    margin: 0px 30px;
  }
`;

const H2 = styled.h2`
  font-weight: normal;
  font-size: 64px;
  color: #cfc0dd;
  position: relative;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
  :last-child {
    @media screen and (max-width: 480px) {
      font-size: 22px;
    }
  }
`;
const H1 = styled.h2`
  font-weight: bold;
  font-size: 94px;
  color: #604da6;
  position: relative;
  margin: -20px 0px -20px 0px;
  :before {
    color: #cfc0dd;
    text-transform: initial;
    content: "<html>";
    font-family: "La Belle Aurore", cursive;
    font-weight: lighter;
    position: absolute;
    opacity: 0.3;
    font-size: 25px;
    top: -120px;
    left: -100px;
  }
  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const P = styled.p`
  font-weight: normal;
  font-size: 24px;
  color: #cfc0dd;
  margin-top: 30px;
  position: relative;
  margin-bottom: 30px;
  @media screen and (max-width: 480px) {
    br {
      display: none;
    }
    font-size: 15px;
    width: 320px;
    overflow-wrap: normal;
  }
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
    @media screen and (max-width: 480px) {
      font-size: 15px;
      top: -20px;
      left: -10px;
    }
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
    top: 55px;
    left: -45px;
    @media screen and (max-width: 480px) {
      font-size: 15px;
      top: 90px;
      left: -10px;
    }
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
  @media screen and (max-width: 480px) {
    width: 340px;
  }
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
    @media screen and (max-width: 480px) {
      font-size: 15px;
      top: -18px;
      left: -12px;
    }
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
    @media screen and (max-width: 480px) {
      font-size: 15px;
      top: 109px;
      left: 275px;
    }
  }
`;

const Img = styled.img`
  height: 22rem;
  position: absolute;
  top: 0;
  right: -15rem;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

function Hero() {
  return (
    <Container1>
      <div className="container">
        <Wrap>
          <H2>Hi,</H2>
          <H1>I&apos;m Nikhil</H1>
          <H2>I Build Things For The Web.</H2>
        </Wrap>

        <P>
          I&apos;m a web designer/developer from india, i&apos;m specialized in
          designing <br /> and building websites, applications, and everything
          in between.
        </P>
        <Link href="#">
          <a>
            <Btn1>Let&apos;s Talk</Btn1>
          </a>
        </Link>
        <Link href="/project">
          <a>
            <Btn2>View Projects</Btn2>
          </a>
        </Link>
        <Img src="/man.png" alt="" />
      </div>
    </Container1>
  );
}

export default Hero;

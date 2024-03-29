import styled from "styled-components";

const Main = styled.div`
  width: 1100px;
  margin: auto;
  @media screen and (max-width: 480px) {
    width: 360px;
  }
  p {
    color: #cfc0dd;
    @media screen and (max-width: 480px) {
      width: 340px;
      margin: 0px 10px;
    }
  }
`;
const H1 = styled.h1`
  margin-left: -15rem;
  opacity: 0.3;
  font-size: 200px;
  color: #cfc0dd;
  text-shadow: -10px 8px 10px rgba(0, 0, 0, 0.8);
  @media screen and (max-width: 480px) {
    margin-top: 45px;
    margin-left: 10px;
    width: 350px;
    font-size: 90px;
  }
`;

const FormDiv = styled.div`
  margin-top: 40px;
  width: 50%;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  @media screen and (max-width: 480px) {
    width: 340px;
    margin: 30px 10px;
  }
`;

const Form = styled.form`
  margin: auto;
  color: #cfc0dd;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
  @media screen and (max-width: 480px) {
    width: 340px;
  }
  label {
    font-weight: 700;
  }
  input {
    padding: 5px;
    background: transparent;
    outline: none;
    border: 0;
    border-bottom: 1px solid #cfc0dd;
    margin-bottom: 20px;
    color: #cfc0dd;
    ::placeholder {
      color: #bdaacea9;
      font-family: "Poppins", sans-serif;
    }
  }
  button {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    padding: 10px 20px;
    border: 2px solid #604da6;
    background: #604da6;
    border-radius: 10px;
    cursor: pointer;
  }
`;

function contact() {
  return (
    <div className="container">
      <H1>Contact</H1>
      <Main>
        <p>
          My inbox is always open. Whether you have a question or just want to
          <br />
          say hi, I&apos;ll try my best to get back to you!
        </p>
        <FormDiv>
          <Form action="">
            <input type="text" placeholder="Name" />
            <input type="mobile" name="" id="" placeholder="Contact No." />
            <input type="email" name="" id="" placeholder="E-Mail" />
            <button>Submit</button>
          </Form>
        </FormDiv>
      </Main>
    </div>
  );
}

export default contact;

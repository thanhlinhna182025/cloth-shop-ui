import styled from "styled-components";
import { Button } from "../components/CustomComponent";
import { Mobile, Tablet } from "../responsive";

const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(105, 210, 231, 0.8)
    ),
    url("https://media.istockphoto.com/photos/beautiful-model-with-long-smooth-flying-blonde-hair-isolated-on-dark-picture-id1281780022?k=20&m=1281780022&s=612x612&w=0&h=r3jYlIcdQcNseAV7po2ND20-FUvkHkq3NupY6FpNEww="),
    center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${Mobile({ width: "80%", height: "80%" })}
  ${Tablet({ width: "80%", height: "60%" })}
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 400;
  ${Mobile({ fontSize: "20px", textAlign: "center" })}
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  ${Mobile({ gridTemplateColumns: "1fr", gap: "10px" })}
`;
const Input = styled.input`
  min-width: 40%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #ccc;
  ${Mobile({ padding: "5px" })}
`;
const Agreement = styled.p`
  font-size: 14px;
  font-weight: 100;
  & b {
    font-weight: 400;
  }
`;
const ButtonRegister = styled(Button)`
  border: 2px solid #ccc;
  ${Mobile({ margin: "0 auto" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Your name" />
          <Input placeholder="Last name" />
          <Input placeholder="User" />
          <Input placeholder="Your email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
        </Form>
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <ButtonRegister>CREATE</ButtonRegister>
      </Wrapper>
    </Container>
  );
};

export default Register;

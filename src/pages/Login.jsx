import styled from "styled-components";
import { Button } from "../components/CustomComponent";
import { Mobile, Tablet } from "../responsive";

const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(253, 242, 0, 0.3), rgba(105, 210, 231, 0.8)),
    url("https://media.istockphoto.com/photos/amazing-woman-blond-beautiful-girl-studio-face-portrait-picture-id962459586?k=20&m=962459586&s=612x612&w=0&h=xiSPFRDCHAvKonrw2sLR4i9U2PRMbpzSdwr4uloN30Y="),
    center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${Mobile({ width: "80%" })}
  ${Tablet({ width: "80%", height: "60%" })}
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 400;
  ${Mobile({ fontSize: "20px", textAlign: "center" })}
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;
const Input = styled.input`
  min-width: 80%;
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
const ButtonLogin = styled(Button)`
  border: 2px solid #ccc;
  ${Mobile({ margin: "0 auto" })}
`;
const Link = styled.a`
  text-decoration: underline;
  font-size: 14px;
  font-weight: 100;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="User" />
          <Input placeholder="Password" />
        </Form>
        <ButtonLogin>LOGIN</ButtonLogin>
        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;

import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { Mobile, Tablet } from "../responsive";

const Container = styled.div`
  height: 250px;
  width: 100%;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${Mobile({ height: "200px" })}
`;
const Heading = styled.h2`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 40px;
  ${Mobile({ fontSize: "35px", marginBottom: "20px" })}
`;
const InputContainer = styled.div`
  height: 40px;
  width: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  ${Mobile({ width: "90%" })}
`;
const Desc = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  ${Mobile({ fontSize: "18px", marginBottom: "10px" })}
`;
const Input = styled.input`
  border: none;
  flex: 10;
  padding: 5px 10px;
  margin-right: 10px;
`;
const Button = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  background-color: #008080;
  cursor: pointer;
`;
const Newsletter = () => {
  return (
    <Container>
      <Heading>NEWSLETTER</Heading>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

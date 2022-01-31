import styled from "styled-components";
import { Button } from "./CustomComponent";

const Container = styled.div`
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Tittle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const ButtonPrimary = styled(Button)`
  color: white;
  border: 1px solid currentColor;
  font-weight: 600;
  &:hover {
    background-color: #ccc;
  }
`;

const CategloryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.url} />
      <InfoContainer>
        <Tittle>{item.tittle}</Tittle>
        <Button as={ButtonPrimary}>Shop Now</Button>
      </InfoContainer>
    </Container>
  );
};

export default CategloryItem;

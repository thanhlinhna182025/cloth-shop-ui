import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  max-height: 330px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.3); */
  /* cursor: pointer; */
`;
const Cirle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  /* background-color: rgba(0, 0, 0, 0.1); */
  position: absolute;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.5 linear;
  &:hover {
    background-color: #ccc;
    transform: scale(1.1);
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Cirle />
      <Image src={item.url} />
      <InfoContainer>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default Product;

import styled from "styled-components";
import Anouncement from "../components/Anouncement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { Button } from "../components/CustomComponent";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  max-height: 500px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  object-fit: cover;
  padding: 0 50px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 100;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 100;
`;
const Price = styled.span`
  font-size: 30px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
`;
const TitlePicker = styled.span`
  font-size: 20px;
  font-weight: 100;
  margin-right: 5px;
`;
const ColorPicker = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0 5px;
  margin-left: -60px;
`;
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  cursor: pointer;
`;
const SizePicker = styled.div``;
const Select = styled.select`
  padding: 5px 10px;
  border: 1px solid #ccc;
`;
const Option = styled.option``;
const AmountContainer = styled.div`
  display: flex;
`;
const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  margin-right: 105px;
`;
const Amount = styled.span`
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 5px;
`;
const AddButton = styled(Button)`
  border: 2px solid #ccc;
  :hover { background-color:#eee}
`;

const ProductItem = () => {
  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />
        </ImageContainer>
        <InfoContainer>
          <Title>White Dress</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem, sapiente maiores voluptatem praesentium deserunt
            fuga, laudantium at expedita nisi quia aspernatur assumenda eum
            earum itaque obcaecati, omnis blanditiis. Maxime, iure?
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <TitlePicker>Color :</TitlePicker>
            <ColorPicker>
              <Color bg="yellow" />
              <Color bg="red" />
              <Color bg="black" />
              <Color bg="green" />
              <Color bg="blue" />
            </ColorPicker>
            <SizePicker>
              <TitlePicker>Size :</TitlePicker>
              <Select>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </SizePicker>
          </FilterContainer>
          <AmountContainer>
            <AmountWrapper>
              <Add style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Remove style={{ cursor: "pointer" }} />
            </AmountWrapper>
            <AddButton>Add To Cart</AddButton>
          </AmountContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductItem;

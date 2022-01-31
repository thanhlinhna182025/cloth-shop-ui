import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import { Button } from "../components/CustomComponent";
import { Remove, Add } from "@mui/icons-material";
import { Mobile, Tablet, Ipad } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100vh;
  gap: 20px 0;
  margin-bottom: 50px;
  ${Mobile({ height: "100%", marginBottom: "10px", padding: "0" })}
  ${Tablet({ height: "100%", marginBottom: "10px", padding: "0" })}
  ${Ipad({ height: "100%", marginBottom: "10px", padding: "0" })}
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column", gap: "10px 0" })}
  ${Tablet({ gap: "10px" })}
`;
const ButtonTop = styled(Button)`
  border: ${(props) => (props.filled ? "1px solid #ccc" : "none")};
  background-color: ${(props) => (props.filled ? "white" : "black")};
  color: ${(props) => (props.filled ? "#ccc" : "white")};
  min-width: 264px;
  ${Tablet({
    padding: "10px 5px",
  })}
`;
const TopText = styled.div`
  display: flex;
  gap: 0 10px;
`;
const Text = styled.span``;
const Bottom = styled.div`
  display: flex;
  ${Mobile({ flexDirection: "column", gap: "10px" })}
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductItem = styled.div`
  display: flex;
`;
const ProductInfoContainer = styled.div`
  flex: 2;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
  margin-right: 10px;
`;
const Image = styled.img`
  width: 100%;
`;
const DetailContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Product = styled.span``;
const Id = styled.span``;
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Size = styled.span``;
const ProductAmountContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px 0;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
const Amount = styled.span`
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Total = styled.span``;
const Hr = styled.hr`
  height: 1px;
  width: 80%;
  background-color: #eee;
  border: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px 0;
  border: 1px solid #ccc;
  height: 50vh;
`;
const TitleSumary = styled.h2`
  font-size: 25px;
  font-weight: 100;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TextDetail = styled.span`
  font-size: 20px;
  font-weight: 100;
`;
const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & ${TextDetail} {
    font-size: 25px;
    font-weight: 500;
  }
`;
const ButtonCheckOut = styled(Button)`
  border: 1px solid #ccc;
  ${Mobile({ margin: "0 auto" })}
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <ButtonTop filled>CONTINUE SHOPPING</ButtonTop>
          <TopText>
            <Text>Shopping Bag(2)</Text>
            <Text>Your Wishlist(0)</Text>
          </TopText>
          <ButtonTop>CHECKOUT NOW</ButtonTop>
        </Top>
        <Bottom>
          <Left>
            <ProductItem>
              <ProductInfoContainer>
                <ImageContainer>
                  <Image src="https://media.istockphoto.com/photos/white-color-formal-shirt-with-button-down-collar-isolated-on-white-picture-id932170554?s=612x612" />
                </ImageContainer>
                <DetailContainer>
                  <Product>
                    <b>Product :</b> Shirt
                  </Product>
                  <Id>
                    <b>Id :</b> B09202084
                  </Id>
                  <Color color="yellow" />
                  <Size>
                    <b>Size :</b> 40
                  </Size>
                </DetailContainer>
              </ProductInfoContainer>
              <ProductAmountContainer>
                <AmountContainer>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountContainer>
                <Total>$ 20</Total>
              </ProductAmountContainer>
            </ProductItem>
            <Hr />
            <ProductItem>
              <ProductInfoContainer>
                <ImageContainer>
                  <Image src="https://media.istockphoto.com/photos/white-color-formal-shirt-with-button-down-collar-isolated-on-white-picture-id932170554?s=612x612" />
                </ImageContainer>
                <DetailContainer>
                  <Product>
                    <b>Product :</b> Shirt
                  </Product>
                  <Id>
                    <b>Id :</b> B09202084
                  </Id>
                  <Color color="green" />
                  <Size>
                    <b>Size :</b> 40
                  </Size>
                </DetailContainer>
              </ProductInfoContainer>
              <ProductAmountContainer>
                <AmountContainer>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountContainer>
                <Total>$ 20</Total>
              </ProductAmountContainer>
            </ProductItem>
            <Hr />
            <ProductItem>
              <ProductInfoContainer>
                <ImageContainer>
                  <Image src="https://media.istockphoto.com/photos/white-color-formal-shirt-with-button-down-collar-isolated-on-white-picture-id932170554?s=612x612" />
                </ImageContainer>
                <DetailContainer>
                  <Product>
                    <b>Product :</b> Shirt
                  </Product>
                  <Id>
                    <b>Id :</b> B09202084
                  </Id>
                  <Color color="red" />
                  <Size>
                    <b>Size :</b> 40
                  </Size>
                </DetailContainer>
              </ProductInfoContainer>
              <ProductAmountContainer>
                <AmountContainer>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountContainer>
                <Total>$ 20</Total>
              </ProductAmountContainer>
            </ProductItem>
            <Hr />
            <ProductItem>
              <ProductInfoContainer>
                <ImageContainer>
                  <Image src="https://media.istockphoto.com/photos/white-color-formal-shirt-with-button-down-collar-isolated-on-white-picture-id932170554?s=612x612" />
                </ImageContainer>
                <DetailContainer>
                  <Product>
                    <b>Product :</b> Shirt
                  </Product>
                  <Id>
                    <b>Id :</b> B09202084
                  </Id>
                  <Color color="blue" />
                  <Size>
                    <b>Size :</b> 40
                  </Size>
                </DetailContainer>
              </ProductInfoContainer>
              <ProductAmountContainer>
                <AmountContainer>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountContainer>
                <Total>$ 20</Total>
              </ProductAmountContainer>
            </ProductItem>
          </Left>
          <Right>
            <TitleSumary>ORDER SUMMARY</TitleSumary>
            <TextWrapper>
              <TextDetail>Subtotal</TextDetail>
              <TextDetail>$ 80</TextDetail>
            </TextWrapper>
            <TextWrapper>
              <TextDetail>Estimated Shipping</TextDetail>
              <TextDetail>$ 5.90</TextDetail>
            </TextWrapper>
            <TextWrapper>
              <TextDetail>Shipping Discount</TextDetail>
              <TextDetail>$ -5.90</TextDetail>
            </TextWrapper>
            <TotalWrapper>
              <TextDetail>Total</TextDetail>
              <TextDetail>$ 80</TextDetail>
            </TotalWrapper>
            <ButtonCheckOut>CHECKOUT NOW</ButtonCheckOut>
          </Right>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
